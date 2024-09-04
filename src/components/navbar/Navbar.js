import { NavLink,Link } from "react-router-dom"
import styles from './navbar.module.css'
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [navicon, setnavicon] = useState(true);
    const [shortnav, setshortnav] = useState(false);
    shortnav ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
    const showActivePage = (isActive,color)=>{return {color: isActive?color:''}}
    return (
        <>
        <div className={styles.nav}>
            <div className={styles.left}>
                <Link id={styles.lg} to='/'>
                    <img src="/Images/Navbar/TEDxIITG_new.png" alt="" className={styles.logo1} />
                    <div className={styles.logo2}></div>
                </Link>
            </div>
            <div className={styles.btn}>
                        <button 
                        className={styles["toggle"]} 
                        onClick={()=>{
                            setnavicon(!navicon);
                            setshortnav(!shortnav);
                            }}>
                        {
                            navicon ? <IoMenu className={styles.ll}/>
                            :<IoMdClose className={styles.ll} />
                        }
                        </button>
                    </div>
            
            <div className={styles.right}>
                <NavLink to='/' className={styles.lin} style={({isActive})=>showActivePage(isActive,'red')}>HOME</NavLink>
                <NavLink to='/AboutUs' className={styles.lin} style={({isActive})=>showActivePage(isActive,'red')}>ABOUT US</NavLink>
                <NavLink to='/Events' className={styles.lin} style={({isActive})=>showActivePage(isActive,'red')}>EVENTS</NavLink>
                <NavLink to='/Partners' className={styles.lin} style={({isActive})=>showActivePage(isActive,'red')} >SPONSORS</NavLink>
                <NavLink to='/Registration' className={styles.lin} id={styles["red"]}>BUY TICKETS</NavLink>
                <NavLink to='/ContactUs' className={styles.lin} style={({isActive})=>showActivePage(isActive,'red')} >CONTACT US</NavLink>
            </div>
        </div>
        {
                shortnav ?
                        <div className={styles.sidehead}>
                            <div className={styles.head}>
                                <NavLink to='/' className={styles.lin1} style={({isActive})=>showActivePage(isActive,'red')} >HOME</NavLink>
                                <NavLink to='/AboutUs' className={styles.lin1} style={({isActive})=>showActivePage(isActive,'red')} >ABOUT US</NavLink>
                                <NavLink to='/Events' className={styles.lin1} style={({isActive})=>showActivePage(isActive,'red')} >EVENTS</NavLink>
                                <NavLink to='/Partners' className={styles.lin1} style={({isActive})=>showActivePage(isActive,'red')} >SPONSORS</NavLink>
                                <NavLink to='/Registration' className={styles.lin1} id={styles["red1"]}>BUY TICKETS</NavLink>
                                <NavLink to='/ContactUs' className={styles.lin1} style={({isActive})=>showActivePage(isActive,'red')} >CONTACT US</NavLink>
                            </div>
                        </div>
                    : <div></div>
            }
        {shortnav ? <div className={styles.black} onClick={()=>{
            setshortnav(false);
            setnavicon(true);
        }}></div>: null}
        </>
    )
}

export default NavBar