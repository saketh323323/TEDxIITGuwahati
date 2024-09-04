import React, { useState, useEffect } from 'react';  
import nominationCSS from './nomination.module.css';

const Nomination =() =>{
    return (
        <>
            <div className={nominationCSS.form_button}>
                <h2 className={nominationCSS.blinkingAnimation}>Speaker Nomination is Open!</h2>
                <div className={nominationCSS.buttonCont}>
                    <a href="https://bit.ly/3Obw1nY" 
                        target="_blank" 
                        className={nominationCSS.button}>
                        <i className="fa fa-ticket" aria-hidden="true"></i>
                        Nomination Form
                    </a>
                    <a href="https://forms.gle/xixPDSBBD4PNyqZDA"
                        target="_blank" 
                        className={nominationCSS.button}>
                        <i className="fa fa-ticket" aria-hidden="true"></i>
                        UnrestricTED (for IITG students)
                    </a>
                </div>
            </div>
        </>
    );


};

export default Nomination;
