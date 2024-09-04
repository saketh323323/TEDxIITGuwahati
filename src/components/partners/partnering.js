import React from 'react';
import styles from './partners.module.css';

const Partnering = () => {
  const email = 'iitg.tedx@gmail.com';

  return (
    <section className={styles.centering}>
      <div className={styles.title} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vw' }}>
        <span>Partner with TEDxIITGuwahati</span>
      </div>
      <p style={{ width: '65vw' }}>
        <span className={styles.content}>
          We’re looking for a select group of strategic partners to help us grow the impact of TEDxIITGuwahati over the next five years to help us reach <strong>100,000+ Guwahatians</strong> through our live in-person events and <strong>100+ million global citizens</strong> through our virtual events and videos.
        </span>
      </p>
      <a href={`mailto:${email}`} className={styles.button}>
        <span>Sponsor TEDxIITGuwahati</span>
      </a>
    </section>
  );
};

export default Partnering;
