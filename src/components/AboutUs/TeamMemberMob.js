import React, { useEffect, useState } from 'react';
import styles from './TeamMember.module.css';
import { SocialIcon } from 'react-social-icons';
import useAos from '../../utilities/Hooks/useAOS';

const TeamMemberMob = ({ title, designation, image, handle }) => {
  const [scrolled, setScrolled] = useState(false);
  const aos = useAos();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight/2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrolled]);

  console.log("window height:" + window.innerHeight);
  console.log(scrolled);
  //Might get improved with using map and passing key in source file so that reconciler render every elemnt differently
  return (
    <>
      <a href={handle} className={styles.link}>
        <div
          className={styles.imgBoxm}
          style={{
            position: 'relative',
          }}
        >
          <img src={`/Images/Team/${image}`} alt="Img" />
          <div className={styles.redboxm}></div>
          {(
            <div
              className={styles.hovereffm}
              style={{
                position: 'absolute',
                top: '41.2px',
                right: '93px',
                display: 'flex',
                flexDirection: 'column',
              }
          }
          
          data-aos="fade-up"
            >
              <SocialIcon url="https://www.linkedin.com" bgColor='#e60028' />
            </div>
          )}
        </div>
        <div className={styles.imgTitle}>
          <div className={styles.imgTitleName}>{title}</div>
          <div className={styles.imgTitlePost}>{designation}</div>
        </div>
      </a>
    </>
  );
};

export default TeamMemberMob;
