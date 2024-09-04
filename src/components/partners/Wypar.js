import React from 'react';
import styles from './partners.module.css';
import useWindowWidth from '../../utilities/Hooks/UseWindowWidth.js'
import useAos from '../../utilities/Hooks/useAOS';

const Strip = ({ image, title, content, pwidth }) => {
  const aos = useAos();
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
    fontSize: '30px',
    fontWeight: '350',
    textAlign: 'center',
  };

  const contentStyle = {
    width: pwidth,
    textAlign: 'center',
    fontWeight: '250',
  };

  return (
    <div>
      <div style={stripStyle}>
        <img src={image} alt={title} style={imageStyle} 
        data-aos="zoom-out-up"
        data-aos-easing="ease-in-back"
        data-aos-duration="1500"
        data-aos-delay="700"
        />
        <div style={titleStyle}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
        data-aos-delay="700"
        >{title}</div>
        <p className={styles.content} style={contentStyle} dangerouslySetInnerHTML={{ __html: content }} 
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2500"
        data-aos-delay="700"
        />
      </div>
    </div>
  );
};

const Wypar = () => {
  const sponsorshipItems = [
    { title: 'Influential Audience', content: 'Connect your brand with the most influential audience in the Washington DC metropolitan area - dreamers, doers, influencers.', image: '/svgs/inf_aud.svg' },
    { title: 'Brand Alignment', content: 'Align your brand with TEDxIITGuwahati and our mission to spread ideas, build community, and change lives.', image: '/svgs/brand_alignment.svg' },
    { title: 'Corporate Objectives', content: 'Achieve specific corporate objectives with our customized and integrated approach to partnerships.', image: '/svgs/corp_obj.svg' },
    { title: 'Thought Leadership', content: 'Be a leader in bringing together corporations, start-ups, entrepreneurs, and individuals who are inspired by remarkable thinking', image: '/svgs/leadership.svg' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  };

  const itemStyle = {
    width: '100vw',
    marginBottom: '6em',
    boxSizing: 'border-box',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const windowWidth = useWindowWidth();
  const pWidth = windowWidth < 400 ? '75vw' : '75vw';
  const titlewidth = windowWidth < 435 ? styles.title_under435: styles.title;
  //
  return (
    <section>
      <div>
        <div>
          <div className={titlewidth} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2em 0px ' }}>
            <span>Why Partner with us?</span>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[0].title} content={sponsorshipItems[0].content} image={sponsorshipItems[0].image} pWidth={pWidth} />
          </div>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[1].title} content={sponsorshipItems[1].content} image={sponsorshipItems[1].image} pWidth={pWidth} />
          </div>
        </div>
        <div style={containerStyle}>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[2].title} content={sponsorshipItems[2].content} image={sponsorshipItems[2].image} pWidth={pWidth} />
          </div>
          <div style={itemStyle}>
            <Strip title={sponsorshipItems[3].title} content={sponsorshipItems[3].content} image={sponsorshipItems[3].image} pWidth={pWidth} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wypar;
