import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar.js";
import Footer from "../../components/footer/Footer.js";
import { useSearchParams } from "react-router-dom"
import jsPDF from "jspdf";
import Ticket from '../../components/ticket/ticket.js';
import styles from "./success.module.css";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Success = () => {
    const searchQuery = useSearchParams()[0]
    const docRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
    const reportTemplateRef = useRef(null);
    const referenceNum = searchQuery.get("reference")
    const Email = searchQuery.get("email")
    const Name = searchQuery.get("name")


    const handleGeneratePdf = () => {

        docRef.current.text(referenceNum, 30, 100, null, -90);
        docRef.current.setFont("Inter-Regular", "normal");

        docRef.current.html(reportTemplateRef.current, {
            async callback(doc) {
                docRef.current.setTextColor("#FFFFFF");
                docRef.current.setFontSize(30);
                docRef.current.text(referenceNum, 190, 350, -90);
                await doc.save("Event Pass");
            }
        });

    };

    useEffect(() => {
        docRef.current = new jsPDF({
            format: [2001, 648],
            unit: "px",
            orientation: "landscape"
        });

        setDimensions({ width: docRef.current.internal.pageSize.getWidth(), height: docRef.current.internal.pageSize.getHeight() })
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.main_div}>
                <div className={styles.card}>
                    <div className={styles.container}>
                        <a className={styles.tick}><IoIosCheckmarkCircle /></a>
                        <p className={styles.confirmed}>Ticket Confirmed</p>
                        <p className={styles.confirm}>Your order is confirmed with Reference No.{referenceNum} .You will receive an order 
                        confirmation on your mail shortly with all necessary details for the events
                        <br />
                        <br />
                        Note: Bring your Adhaar Card or PAN Card or any ID card for verification of your name at the venue.
                        <br />
                        (IITG Users should have their ID card During the entry)
                        </p>

                        <div className={styles.btn_dwn}>
                            <button className={styles.btne2} onClick={handleGeneratePdf}>Download ticket</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hidden_container}>
                <div ref={reportTemplateRef} className={styles.ticket_container} id="ticketid">
                    <Ticket dimension={dimensions} data={{ email: Email, name: Name }} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Success;