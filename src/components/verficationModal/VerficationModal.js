import useScript from '../../utilities/Hooks/useScript'
import React, { useEffect, useState, useRef} from 'react';
import styles from './modal.module.css'
import emailjs from '@emailjs/browser';
import axios from 'axios'
import Razorpay from 'react-razorpay';
import { customOtpGen } from 'otp-gen-agent'
import OtpInput from "otp-input-react"

const STATUS_CODE = {
    SUCCESS: 1,
    ERROR: 2,
    PENDING: 3
}

const EXPIRY_TIME = {
    DELAY: 10 // minutes
}

const VerficationModal = ({userType, func}) => {
    const [details, setDetails] = useState({ name: '', email: '', phone: ''})
    const otpDetails = useRef()
    const [otp, setotp] = useState("")
    const [step, setStep] = useState(1);
    const [status, setStatus] = useState({
        code: STATUS_CODE.SUCCESS, errorMsg: 'Please enter correct otp.'
    })

    useEffect(()=>{
        document.body.style.overflowY = 'hidden';
        return ()=>{
          document.body.style.overflowY  = "scroll";
        }
      })

    const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,4})$/;

    const USER_TYPE = {
        CIVILIAN: "Civilian",
        REGISTERED_STUDENT: "Student"
    }

    useEffect(() => {
        otpDetails.current = { otp: null, expiredTime: null }
    }, [])

    function modifyDetails(e) {
        const { value, dataset: { id } } = e.target

        setDetails({ ...details, [id]: value })
    }

    function isFormValid() {
        switch (userType) {
            case USER_TYPE.CIVILIAN: {
                if (EMAIL_REGEX.test(details.email)) {
                    return true
                }
                break;
            }
            case USER_TYPE.REGISTERED_STUDENT: {
                const index = details.email.indexOf('@')
                const domain = details.email.slice(index + 1)
                if (EMAIL_REGEX.test(details.email) && domain == "iitg.ac.in") {
                    return true
                }
            }
        }
        return false
    }


    function getParams() {
        const my_form = document.createElement('FORM');
        my_form.name = 'my_form';
        const my_tb = document.createElement('INPUT');
        my_tb.type = 'TEXT';
        my_tb.name = 'message';
        my_tb.value = otp;
        my_form.appendChild(my_tb);

        const my_tb2 = document.createElement('INPUT');
        my_tb2.type = 'TEXT';
        my_tb2.name = 'to_email';
        my_tb2.value = details.email;
        my_form.appendChild(my_tb2);

        const my_tb3 = document.createElement('INPUT');
        my_tb3.type = 'TEXT';
        my_tb3.name = 'to_name';
        my_tb3.value = details.name;
        my_form.appendChild(my_tb3);

        return my_form
    }

    function isSubmitDisabled() {
        return !isFormValid()
    }

    async function sendOTP() {
        const otp = await customOtpGen({length: 6, chars: '123456789'});
        console.log(otp);
        otpDetails.current = {
            otp,
            expiredTime: Date.now() + 60000 * EXPIRY_TIME.DELAY
        }
        setStatus({
            ...status,
            code: STATUS_CODE.PENDING
        })

        emailjs.send('service_v6d5nl8', 'template_2m2clg7', getParams(), 'on8bzsw6VYdMSOEiy')
            .then((result) => {
                setStatus({
                    ...status,
                    errorMsg: '',
                    code: STATUS_CODE.SUCCESS
                })
                setStep(2)
            }, (error) => {
                setStatus({
                    ...status,
                    errorMsg: 'Request failed due to server error.',
                    code: STATUS_CODE.ERROR
                })
                console.log(error.text);
            });

    }

    function checkOTPValidity() {
        // TO-DO: Add expiry check for otp
        const now = +new Date()
        const expiryTime = +new Date(otpDetails.current.expiredTime)
        if (otp == otpDetails.current.otp && now < expiryTime) return true

        return false
    }


    async function submitHandler() {
        if (step == 1) {
            sendOTP()
        } else {
            const status = checkOTPValidity()
            if (status) {
                setStatus({
                    errorMsg: '',
                    code: STATUS_CODE.SUCCESS
                })
                console.log("emailisValid")
                checkoutHandler(250, details.name, details.email)
            } else {
                setStatus({
                    errorMsg: 'Invalid OTP entered or time has expired.',
                    code: STATUS_CODE.ERROR
                })
            }
        
        }
    }
    

    const codes = document.querySelectorAll('.dash');
    // codes[0].focus()
    codes.forEach((code, idx)=>{
        code.addEventListener('keydown', (e)=>{
            if(e.key >=0 && e.key<=9){
                console.log(codes[idx].value);
                codes[idx].value = ''
                console.log(codes[idx].value);
                setTimeout(()=> codes[idx+1].focus(), 10)
            }else if(e.key === 'Backspace'){
                setTimeout(()=> codes[idx-1].focus(), 10)
            }
        })
    })

    
    useScript('https://checkout.razorpay.com/v1/checkout.js')
    const BaseURL = 'https://localhost:5000'

    function checkoutHandler(Name, email, amount){
        const { data: { key } } = axios.get(`${BaseURL}/api/getkey`)
        const { data: { order } } = axios.post(`${BaseURL}/api/checkout`, {Name, email, amount})

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "TEDxIITGuwahati",
            description: "Event Ticketing",
            image: "/Images/Navbar/TEDxIITG_new.png",
            order_id: order.id,
            callback_url: `${BaseURL}/api/paymentverification`,
            prefill: {
                "name": Name,
                "email": email,
            },
            theme: {
                "color": "#121212"
            }
        };

        const razorInstance = new Razorpay(options)
        razorInstance.open();
    }

    return(
        <>
        <div id={styles.TicketModal}>
            <div className={styles.modalHeader}>
                <h1 id='modalTitle'>{userType == USER_TYPE.CIVILIAN ? 'General Pass Ticket' : 'IITG Pass Ticket (for IITG Students)'}</h1>
                <button data-close-button onClick={func} className={styles.closeBtn}>
                ×<div className={styles.circle}>×</div>
                </button>
            </div>
            {step == 1 && <div className={styles.Note}><p className={`warning`}>
                <b>Important: </b>
                <br />
                1. Please Note that the Ticket Design is different for IITG Students, So Please make sure to purchase right ticket.
                <br />
                2. Enter your Email correctly to recieve the Ticket for the Event.
                <br />
                </p></div>}
            <div className={styles.modalBody}>
                <div className={styles.nameContainer}>
                    {step == 1 && <h2>Name: </h2>}
                    {step == 1 && <input placeholder='Name'
                            type="text"
                            data-id="name"
                            value={details.name}
                            onChange={modifyDetails}
                            className="tedx_input"
                            autoFocus
                            required
                        ></input>}
                </div>
                
                <div className={styles.emailContainer}>
                    {step == 1 && <h2>Email:</h2>}
                    {userType == USER_TYPE.REGISTERED_STUDENT && step == 1 && <input placeholder='Registered IITG email'
                        type="email"
                        value={details.email}
                        data-id="email"
                        onChange={modifyDetails}
                        className={isFormValid()? styles.validInput:styles.emailInput}
                        required
                    ></input>}
                    {userType == USER_TYPE.CIVILIAN && step == 1 && <input placeholder='Email'
                        type="email"
                        value={details.email}
                        data-id="email"
                        onChange={modifyDetails}
                        className={isFormValid()? styles.validInput:styles.emailInput}
                        required
                    ></input>}
                </div>
                <div className={styles.emailContainer}>
                    {step == 1 && <h2>Phone:</h2>}
                    {step == 1 && <input placeholder='Phone number'
                        type="tel"
                        value={details.phone}
                        data-id="phone"
                        onChange={modifyDetails}
                        className={styles.phoneInput}
                        maxLength = {10}
                        required
                    ></input>}
                </div>
                {step == 2 &&
                <div className={styles.otpContainer}>
                    <svg width="113px" height="113px" viewBox="-5.04 -5.04 34.08 34.08" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.312"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-5.04" y="-5.04" width="34.08" height="34.08" rx="17.04" fill="#e62b1e" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff2b2626" stroke-width="0.336"> <path d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z" fill="#ffffff"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z" fill="#ffffff"></path> </g></svg>
                    <h2>Enter your OTP</h2>
                    <OtpInput
                    OTPLength = {6}
                    value ={otp}
                    onChange = {setotp}
                    otpType = "number"
                    disabled = {false}
                    autoFocus
                    className= {styles.otp}
                    >
                    </OtpInput>
                </div>}
                <div className={styles.amountContainer}>
                    <h2>Amount:</h2>
                    <div><h3>{userType == USER_TYPE.CIVILIAN?"₹ 250 /-":"₹ 200 /-"}</h3></div>
                </div>

                <div className={styles.btnContainer}>
                    <button className="btn cancel-btn" onClick={func}>Cancel</button>
                    {<button disabled={isSubmitDisabled() ||status.code == STATUS_CODE.PENDING} onClick={submitHandler} className={`btn submit-btn`}>{status.code == STATUS_CODE.PENDING}{step == 1 ? 'Send OTP' : 'Proceed to Payment'}</button>}

                    {/* {userType == USER_TYPE.CIVILIAN && <button disabled={isSubmitDisabled() || status.code == STATUS_CODE.PENDING} onClick={() => submitHandler()} className="btn submit-btn">{status.code == STATUS_CODE.PENDING && <CircleAnimation />}Proceed to Payment</button>} */}
                </div>
            </div>
            <div className={styles.alertContainer}>

            </div>
        </div>
        
        </>
    )

}

export default VerficationModal;