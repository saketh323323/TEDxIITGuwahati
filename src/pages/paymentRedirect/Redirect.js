import React from 'react';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './styles.module.css'
import { useSearchParams, useNavigate } from "react-router-dom"
import CircleAnimation from '../../components/loading/Circle.js';

function PaymentRedirect(props) {
    const searchQuery = useSearchParams()[0]
    const navigate = useNavigate()

    useEffect(() => {
        const referenceNum = searchQuery.get("reference")
        const email = searchQuery.get("email")
        const name = searchQuery.get("name")
        const params = {
            to: email,
            url: `${process.env.PUBLIC_URL}/success?reference=${referenceNum}&email=${email}&name=${name}`,
            name,
            reference: referenceNum
        }
        emailjs.send('', '', params, '')
            .then((obj) => {
                navigate(`/success?reference=${referenceNum}&email=${email}&name=${name}`)
            })
            .catch((err) => {
                console.log(err)
            })


    }, [])
    return (
        <div className={styles.container}>
            <h3>Processing Payment...</h3>
            <CircleAnimation />
        </div>
    );
}

export default PaymentRedirect;