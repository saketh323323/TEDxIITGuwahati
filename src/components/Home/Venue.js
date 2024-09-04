import React from 'react';
import useWindowWidth from '../../utilities/Hooks/UseWindowWidth.js'
import useAOS from '../../utilities/Hooks/useAOS.js';
import GoogleMap from '../../pages/registration/google_map.js';

const ConferenceVenue = () => {
  const aos = useAOS();
  const windowWidth = useWindowWidth();

  return (
    <div style={{ margin: '20px 0', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {windowWidth > 696 ?
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: '0 0 50%', paddingRight: '20px' }}>
              <div style={{ position: 'relative' }}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                {/* <img
                  src="/Images/home/location.jpg"
                  alt=""
                  style={{ width: '100%', borderRadius: '8px' }}
                /> */}
                <GoogleMap isVisible = {false}/>
              </div>
            </div>
            <div style={{ flex: '0 0 50%', paddingLeft: '20px' }}data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="linear">
              <div style={{ marginBottom: '10px', fontSize: '1.4em', fontWeight: 'bold', color: 'red' }}
              >Conference Venue</div>
              <h2 style={{ fontSize: '3em', marginBottom: '20px', fontWeight: '400' }}>Hosted in IIT Guwahati</h2>
              <p style={{ fontSize: '1.1em', lineHeight: '1.5' }}>
                It's time that we give the leaders around us a stage to discuss their ideas worth spreading. Join us at our IN-PERSON event to be held at Indian Institute of Technology in Guwahati.
              </p>
              <p style={{ fontSize: '1.1em', lineHeight: '1.5' }}>Senate Hall<br />Administration Building, IIT Guwahati, India <br />781039</p>
              {/* <a
                href="https://goo.gl/maps/wg5hYVDZVbegCz888"
                target='blank'
                style={{ display: 'block', marginTop: '10px', textDecoration: 'none', color: '#EB0028' }}
              >
                View Location
              </a> */}
              <a
                href="/https://goo.gl/maps/wg5hYVDZVbegCz888"
                target='blank'
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: 'red',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  marginTop: '20px',
                  fontSize: '1.2em',
                }}
              >
                View Location
              </a>
            </div>
          </div>
          :
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ flex: '0 0 50%', paddingRight: '20px' }}>
              <div style={{ position: 'relative' }}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <GoogleMap isVisible = {false}/>
              </div>
            </div>
            <div style={{ flex: '0 0 50%', paddingLeft: '20px' }}>
              <div style={{ marginBottom: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>Conference Venue</div>
              <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Hosted in IITGuwahati</h2>
              <p style={{ fontSize: '1.1em', lineHeight: '1.5' }}>
                It's time that we give the leaders around us a stage to discuss their ideas worth spreading. Join us at our IN-PERSON event to be held at Indian Institute of Technology in Guwahati.
              </p>
              <p style={{ fontSize: '1.1em', lineHeight: '1.5' }}>Senate Hall<br />Administration Building, IIT Guwahati, Assam, India<br />781039.</p>
              <a
                href="https://goo.gl/maps/wg5hYVDZVbegCz888"
                style={{ display: 'block', marginTop: '10px', textDecoration: 'none', color: '#EB0028' }}
              >
                View Location
              </a>
              <a
                href="/register"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: 'red',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  marginTop: '20px',
                  fontSize: '1.2em',
                }}
              >
                Registration
              </a>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default ConferenceVenue;
