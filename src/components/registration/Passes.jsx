import styles from "./Passes.module.css";
import React, {useState, useTransition } from 'react';
import { useInView } from "react-intersection-observer";
import useAOS from "../../utilities/Hooks/useAOS";
import Modal from "../verficationModal/VerficationModal"

const Passes = () => {
  const [selectedPass, setselectedPass] = useState(null)
  const [isPending, startTransition] = useTransition();

  const openModal = (userType)=>{
    startTransition(() => {
      setselectedPass(userType);
    });
  };
  const closeModal = ()=>{
    startTransition(() => {
      setselectedPass(null);
    });
  };

  const aos = useAOS();
  const { ref: upperRef, inView: upperVisibility } = useInView();
  const { ref: ticket1Ref, inView: ticket1Visibility } = useInView();
  const { ref: ticket2Ref, inView: ticket2Visibility } = useInView();

  return (
    <div className={styles.contentContainer}>
      <div
        ref={upperRef}
        className={`${styles.upper} ${
          upperVisibility ? styles.fadeInAnimation : ""
        }`}
      >
        <div className={styles.headingContainer}>
          <p className={styles.overheading}>Secure your seat —</p>
          <h1 className={styles.heading}>Get Your Passes Today</h1>
        </div>
        <p className={styles.message}>
          Join us for an electrifying day of thought-provoking talks, inspiring
          performances, and engaging discussions. Our lineup of esteemed
          speakers will share their powerful ideas and innovative insights at
          TEDxIITGuwahati 2024. Secure your tickets now and reserve your spot at
          our upcoming event. With limited seating available, early booking is
          highly recommended.
        </p>
      </div>
      <div></div>
      <div className={styles.ticketContainer}>
        <div
          ref={ticket1Ref}
          className={`${styles.ticket} ${
            ticket1Visibility ? styles.fadeInAnimation : ""
          }`}
        >
          <div className={styles.passContainer}>
            <h3 className={styles.passname}>General Pass</h3>
            <img
              className={styles.image}
              loading="lazy"
              src={"/images/Registration/img1.svg"}
              style={{ right: "0" }}
              alt="upperImg"
            />
          </div>
          <div className={styles.ticketDetails}>
            <div className={styles.priceContainer}>
              <p className={styles.priceHeading}> price</p>
              <h3 className={styles.priceValue}>₹ 250 /-</h3>
            </div>
            <div className={styles.details}>
              <h3 className={styles.detailsHeading}>Exclusive benefits</h3>
              <ul className={styles.list}>
                {/* <li className={styles.listItem}>Access to Simulcast Zone</li> */}
                <li className={styles.listItem}>
                  Access to all sessions in-person event in Main Hall
                </li>
                {/* <li className={styles.listItem}>Reserved Seating with assured seat numbers</li> */}
                <li className={styles.listItem}>
                  Early access: get admitted early to the theatre to access the
                  best seats for all sessions
                </li>
                <li className={styles.listItem}>
                  Exclusive Access to meet & network with speakers
                </li>
                <li className={styles.listItem}>Faster Registration process</li>
                <li className={styles.listItem}>
                  Networking with other attendees
                </li>
                <li className={styles.listItem}>
                  Access to Special Programming and Additional events, spaces
                  and opportunities to participate in Q & A with speakers
                </li>
                <li className={styles.listItem}>
                  Quick access to main stage seats from priority gates
                </li>
              </ul>
              <p className={styles.footer}>& more benefits</p>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.bookButton} onClick = {()=>{openModal("Civilian")}}>Book Now</button>
            </div>
          </div>
          <div className={styles.nudges}>
            <img
              className={styles.triangle1}
              src="/images/Registration/triangle.svg"
              alt="triangle"
            />
            <div className={styles.line}></div>
            <img
              className={styles.triangle2}
              src="/images/Registration/triangle.svg"
              alt="triangle"
            />
          </div>
          <div className={styles.circleContainer}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </div>
        <div
          ref={ticket2Ref}
          className={`${styles.ticket} ${
            ticket2Visibility ? styles.fadeInAnimation : ""
          }`}
        >
          <div className={styles.passContainer}>
            <h3 className={styles.passname}>IITG Pass</h3>
            <img
              className={styles.image}
              loading="lazy"
              src={"/images/Registration/img2.svg"}
              style={{ left: "0" }}
              alt="upperImg"
            />
          </div>
          <div className={styles.ticketDetails}>
            <div className={styles.priceContainer}>
              <p className={styles.priceHeading}> price</p>
              <h3 className={styles.priceValue}>₹ 200 /-</h3>
            </div>
            <div className={styles.details}>
              <h3 className={styles.detailsHeading}>
                Who can purchase a student ticket —
              </h3>
              <ul className={styles.listStudent}>
                <li className={styles.listItemStudent}>
                  Students who have valid College ID Card of IITG
                </li>
                {/* <li className={styles.listItemStudent}>Students from the age of 13 years to 21 years (Valid School or College ID Card is must)</li> */}
                <li className={styles.listItemStudent}>
                  Students from the age of 8 to 12 years should be accompanied
                  by an adult attendee. This conference is not open for children
                  below 8 years.
                </li>
              </ul>
              <p className={styles.footer}>& benefits of general pass</p>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.bookButton} onClick = {()=>{openModal("Student")}} >Book Now</button>
            </div>
          </div>
          <div className={styles.nudges}>
            <img
              className={styles.triangle1}
              src="/images/Registration/triangle.svg"
              alt="triangle"
            />
            <div className={styles.line}></div>
            <img
              className={styles.triangle2}
              src="/images/Registration/triangle.svg"
              alt="triangle"
            />
          </div>
          <div className={styles.circleContainer}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>

      <div className={styles.termsCondButton}>
        <span className={styles.linkSpan}>
          <a
            href="/Terms"
            className={styles.link}
          >
            TERMS & CONDITIONS<p className={styles.arrow}> &#8594; </p>
          </a>
        </span>
      </div>
      {selectedPass && <Modal userType = {selectedPass} func = {closeModal} isPending={isPending} />}
      {selectedPass && <div id={styles.overlay}></div>}
    </div>
  );
};

export default Passes;
