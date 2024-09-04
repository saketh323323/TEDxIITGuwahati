import styles from './contactUs.module.css'
import NavBar from '../../components/navbar/Navbar'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Newsletter from '../../components/Newsletter/newsletter'
import ScrollButton from '../../components/scrollButton/scrollButton'
import { useEffect } from 'react';

const ContactUs = () => {
    const [successMsg, setSuccessMsg] = useState(false)

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    function Submit(e) {
        const formEle = document.querySelector("form")
        e.preventDefault()
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbzSbAQTTjc2_8V_hirJYSq7NfrlTrWoklvftISmXfgHJGy36RzL5-FUmJa30jDekCWI1A/exec",
            {
                method: "POST",
                body: formData
            })
            .then((res) => { return res.text() }).then((data) => {
                console.log(data)
                setSuccessMsg(true)
                formEle.reset()
                setTimeout(() => { setSuccessMsg(false) }, 2500)
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <>
            <NavBar></NavBar>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div>
                    <p className={styles.title}>Leave Us a Message!!</p>
                    <p className={styles.para}>If you would like to subscribe to our Newsletter, have a question about an upcoming event, would like to explore a partnership with TEDxGuwahati, or want to send us a comment or suggestion, simply fill out the form below and we’ll get back to you shortly.</p>
                    </div>
                    <img className={styles.image} src="/Images/contactUs/contactUsImage2.jpg" alt="image" />
                </div>
                <div className={styles.formContainer}>
                    <form name='submit-to-google-sheet' className={styles.form} onSubmit={(e) => Submit(e)}>
                        <input className={styles.formField} type="text" name='FirstName' placeholder='First Name*' required title='Please' />
                        <input className={styles.formField} type="text" name='LastName' placeholder='Last Name' />
                        <input className={styles.formField} type="email" name='Email' placeholder='Email*' required />
                        <input className={styles.formField} type="tel" name="ContactNumber" placeholder='Contact Number*' required />
                        <textarea className={`${styles.comments} ${styles.formField}`} name='Comments' placeholder="Comments" cols="30" rows="5"></textarea>
                        <p className={styles.checkboxContainer} ><input className={styles.checkbox} name="Checkbox" type="checkbox" />Sign me up for the TEDxIITGuwahati newsletter</p>
                        <button className={styles.button} type="submit">Submit <p className={styles.arrow}> &#8594; </p></button>
                        {successMsg ? (<p className={styles.successMsg}>Thank you for your response</p>) : <></>}
                        <p className={styles.privacy}>This form collects your name and email address so we can follow up with your request to become a partner. We never sell, rent, or share this information with outside parties.</p>
                        <p className={styles.required}>* Indicates required fields</p>
                    </form>
                </div>
            </div>
            <Footer/>
            <ScrollButton/>
        </>
    )
}

export default ContactUs