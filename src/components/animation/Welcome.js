import styles from './Welcome.module.css'

const Welcome = () => {

    return(
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div>
                        <p>
                            Welcome to
                        </p>
                    </div>
                    <div>
                        <img src='/Images/Navbar/TEDxIITG_new.png'></img>
                    </div>
                </div>
                <div className={styles.logo}>
                        <img src='/Images/animation/LogoAnimTrans.gif'></img>
                </div>
            </div>
        </>
    );
}

export default Welcome