import { useState } from 'react'
import styles from './newsletter.module.css'

const Newsletter = () => {
    const [successMsg,setSuccessMsg] = useState(false)
    

    function Submit(e) {
        const formEle = document.querySelector("form")
        e.preventDefault()
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbzuMmPgBdUT4cov_aIvo0y796PoE1B-PYd3Qy_cdkb4SAJyUoFVexTitEd47YpBkH_pYQ/exec",
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
    return(
        <>
            <div className={styles.container}>
                <img src="/Images/Newsletter/newsletter.svg" alt="" className={styles.newimg} />
                <div className={styles.right}>
                    <div className={styles.heading}>Newsletter</div>
                    <div className={styles.subheading}>I want to receive news from TEDxIITGuwahati</div>
                    <form className={`form ${styles.form}`} onSubmit={(e)=> Submit(e)}>
                        <div>
                        <input 
                            name='Email'
                            type="email" 
                            required
                            placeholder='Leave us your email' />
                        <p className={`${styles.success}`} style={successMsg?{visibility:'visible'}:{visibility:'hidden'}}>We will keep you updated regarding TEDxIITGuwahati</p>
                        </div>  {/* <input type="text" style={{visibility:'hidden', position:'absolute'}} value="Devesh" /> */}
                        <button 
                            type='submit' 
                            className={styles.btn} >Subscribe me</button>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default Newsletter
