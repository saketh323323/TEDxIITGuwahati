import React from 'react';
import footerCSS from  './footerStyles.module.css';
import {
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
    FaMedium,
} from 'react-icons/fa';
import {FaXTwitter, FaThreads} from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className={footerCSS.footer}>
            <div className={footerCSS.footer_main}>
            <div className={footerCSS.footer_col_1}>
                <a href="/" className={footerCSS.logoTED} title="TEDxIITGuwahati">
                    <img src="/Images/footer/WhiteTextLogo.png" alt="TEDxIITGuwahati" />
                </a>
                <div className={footerCSS.footer_social}>
                    <a href="https://www.instagram.com/tedxiitguwahati?igsh=MWcwdmFsY3JnZXV2dw==" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaInstagram />
                    </a>
                    
                    <a href="https://www.linkedin.com/company/tedx-iit-guwahati/" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaLinkedinIn />
                    </a>
                    <a href="https://x.com/tedxiitg?t=pHLpmiyIYiubcmoUCuQrPA&s=08" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaXTwitter />
                    </a>
                    <a href="https://www.facebook.com/TEDxIITGuwahati?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaFacebookF />
                    </a>
                    <a href="https://tedxiitguwahati.medium.com/" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaMedium />
                    </a>
                    <a href="https://www.threads.net/@tedxiitguwahati" target="_blank" rel="noopener noreferrer" className={footerCSS.social_icon}>
                        <FaThreads />
                    </a>

                    <div className={footerCSS.email}>
                        <p>Mail us at <a className={footerCSS.gmail}>iitg.tedx@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className={footerCSS.footer_col_2}>
                <h4 className={footerCSS.quick_links}>Quick Links</h4>
                <a href="/Events" title="Events" className={footerCSS.links_col_2}>Events</a>
                <a href="/AboutUs" title="About Us" className={footerCSS.links_col_2}>About Us</a>
                <a href="/Partners" title="Sponsors" className={footerCSS.links_col_2}>Sponsors</a>
                <a href="/Privacy" title="Privacy Policies" className={footerCSS.links_col_2}>Privacy Policies</a>
                <a href="/Terms" title="Terms and Conditions" className={footerCSS.links_col_2}>Terms and Conditions</a>
                
            </div>
                
            <div className={footerCSS.footer_col_3}>
                <div className='col-2'>

                <h6 className={footerCSS.footer_col_3_h6}> What is TEDx?</h6>

                    <p>
                        This independent TEDx event is organized under license from TED.<br />
                        In the same spirit of spreading ideas, TED has created a program called TEDx.<br />
                        TEDx is an independently organized program of local events that bring together an audience in a TED-like experience. Our event is TEDxIITGuwahati, where x means TED event organized independently.
                    </p>
                    <p>
                        At TEDxIITGuwahati, we combine videos of TED talks and live speakers to generate a deep conversation and connection between attendees. TED gives general guidelines for the TEDx program, but each individual TEDx is organized autonomously (subject to certain guidelines).<br /><br/>
                        TEDxIITGuwahati is a non-profit organization made up of volunteers. Their mission is to spread transformative ideas.
                    </p>
                </div>
            </div>
            </div>
            <div className={footerCSS.credits}>
                © Copyright  by TEDxIITGuwahati. This independent TEDx events is operated under license from TED.
            </div>
        </footer>
    );
};

export default Footer;

