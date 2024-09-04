import React, { useEffect } from 'react';
import BuyTickets from './BuyTickets';
import styles from './homeStyles.module.css';
import useWindowWidth from '../../utilities/Hooks/UseWindowWidth.js'
import useAOS from '../../utilities/Hooks/useAOS';

const ThemeInfo = () => {

  const windowWidth = useWindowWidth();
  const aos = useAOS();

  return (
    <div className={styles.container}>
      <article className={styles.article}
        data-aos="fade-right"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" >

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className={styles.content}>

            <h2 className={styles.heading}
              data-aos="fade-left"
              data-aos-easing="ease-in-back"
              data-aos-duration="1000"
              data-aos-delay="700" >
              Echoes of Stillness
            </h2>

            <h3 className={styles.subheading}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              data-aos-delay="700">
              Embracing the pause
            </h3>

            <p className={styles.parastyle}
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
              The theme for TEDxIITGuwahati 2024 is Echoes of Stillness. What’s that, you ask? It’s about fathoming the importance of taking break in process of reaching our goals.
            </p>
            <p className={styles.parastyle}
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
              In today's fast-paced world, it is important to take breaks. These breaks aren't just about relaxing; they're like a timeout to help us grow. Taking a step back lets us think about our journey, what really matters, and it re-energizes us. Like the cicada rests to come back stronger, our breaks become the fertile ground for personal changes.
              During these breaks, we recharge our energy and also learn more about ourselves. It's a time of self-discovery, where we find hidden strengths and better understand what we want.The lessons learned during these breaks are like a guide for the next steps in our journey
            </p>
            <p className={styles.parastyle}
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
              The outcome of our breaks might not always be obvious success, but the experience is priceless. It's like a caterpillar in a cocoon — change takes time and patience. When we take a break, we get to let go of old habits, improve our skills, and come out stronger.
            </p>
            <p className={styles.parastyle}
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
              So, taking a break is like celebrating our ability to grow. Whether it's spent relaxing or learning something new, these pauses help us discover more about ourselves and become better people. By honoring rest, we set the stage for a more meaningful and purposeful journey, recognizing that the process is just as important as the destination.
            </p>
            <span className={styles.linkSpan}>
              <a href='/aboutUs' className={styles.link}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              data-aos-delay="700">
                READ ABOUT TED AND TED<sup>x</sup>
              </a>
            </span>
          </div>
          {windowWidth > 1050 ?
            <div className={styles.buyTickets}>
              <BuyTickets />
            </div> :
            ""
          }
        </div>

      </article>
      {windowWidth < 1050 ?
        <div style={{ width: '40vw' }} className='buyTickets'>
          <BuyTickets />
        </div> :
        ""
      }
    </div>
  );
};

export default ThemeInfo;
