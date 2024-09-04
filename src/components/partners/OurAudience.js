import React from 'react';
import styles from './partners.module.css';
import useWindowWidth from '../../utilities/Hooks/UseWindowWidth.js'

const Strip = ({ image, title, content }) => {
  const stripStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1em',
  };

  const imageStyle = {
    width: '45%',
    margin: 'auto',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '350',
    textAlign: 'center',
  };

  const contentStyle = {
    // width: '55vw',
    textAlign: 'center',
    fontWeight: '250',
  };

  return (
    <div>
      <div style={stripStyle}>
        <img src={image} alt={title} style={imageStyle} />
        <div style={titleStyle}>{title}</div>
        <span className={styles.content} style={contentStyle} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

const OurAudience = () => {
  const sponsorshipItems = [
    { title: 'ATTENDEES', content: '', image: '/svgs/attendees.svg' },
    { title: 'SOCIAL REACH', content: '1.5K+ Fans & Followers', image: '/svgs/social_reach.svg' },
    { title: 'YOUTUBE VIEWS', content: '1M+ views', image: '/svgs/youtube_views.svg' },
    { title: 'IMPRESSIONS', content: '7K+ Impressions', image: '/svgs/impressions.svg' },
  ];

  const windowWidth = useWindowWidth();
  const titlewidth = windowWidth < 435 ? styles.title_under435: styles.title;
  const contentwidth = windowWidth<800? '70vw':'45vw';

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  };

  const itemStyle = {
    width: '100em',
    marginBottom: '16px',
    boxSizing: 'border-box',
    maxWidth: '200px',
  };

  const sectionStyle = {
    background: '#F7F7F7',
  };

  const headingStyle = {
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  };

  const contentTextStyle = {
    width: contentwidth,
  };

  return (
    <section style={sectionStyle}>
      <div>
        <div style={headingStyle}>
          <h1 className={titlewidth}>
            <span>Our Audience</span>
          </h1>
          <p style={contentTextStyle} className={styles.content}>
            <span>
              Since 2019, TEDxIITGuwahati has been working to galvanize the local community, bringing together corporations, community organizations, entrepreneurs, and individuals, providing a platform for exceptional ideas, and a catalyst for profound change.
            </span>
          </p>
        </div>
        <div style={containerStyle}>
          {sponsorshipItems.map((item, index) => (
            <div key={index} style={itemStyle}>
              <Strip title={item.title} content={item.content} image={item.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAudience;
