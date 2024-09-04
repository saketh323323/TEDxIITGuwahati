import React from 'react';
import styles from './homeStyles.module.css'
import useAOS from '../../utilities/Hooks/useAOS';

const BuyTickets = () => {
  const aos = useAOS();
  return (
    <div style={{
      position: 'sticky',
      top: '70px',
      display: 'flex',
      justifyContent: 'flex-end',
    }}>
      <div className={styles.conference_box}
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-delay="1500"
        data-aos-offset="0"
      >
        <div className={styles.innerbox}
        >
          <div className={styles.date}
            >
            <h3>11 February</h3><br />
            <h3>2024</h3>
          </div>
          <hr className={styles.line} />
          <div className={styles.time}
            >
            <h5 >9 AM to 5 PM</h5>
          </div>
          <hr className={styles.line} />
          <div className={styles.booking_tickets}>
            <p style={{ textAlign: 'center', color: 'white' }}
            >The room is open to all who are looking for exemplary stories and inspiring ideas – and to participate in celebrating these individuals who embody the spirit of TED.</p>
            <a href='/Registration' style={{ textAlign: 'center', color: 'white', textDecoration: 'none', margin: '10px' }}>
              <button style={{ textAlign: 'center', border: '2px solid white', borderRadius: '10px', padding: '10px', marginTop: '10px' }}>
                BUY TICKETS
              </button>
            </a>
            <a href='https://forms.gle/LWEi8mDYswThhX4BA' style={{ textAlign: 'center', color: 'white', textDecoration: 'none', margin: '5px' }}>
              <button style={{ textAlign: 'center', border: '2px solid white', borderRadius: '10px', padding: '10px', marginBottom:'5px' }}>
                GRAB MERCH
              </button>
            </a>
            <a href='/Partners' style={{ textAlign: 'center', color: 'white', textDecoration: 'none', margin: '5px' }}>
              <button style={{ textAlign: 'center', border: '2px solid white', borderRadius: '10px', padding: '10px' }}>
                SPONSOR
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTickets;
