import React from 'react';
import mapCSS from './google_map.module.css';
import { IoIosSend } from "react-icons/io";

const GoogleMap = ({ isVisible }) => {
    return (

        <section className={mapCSS.position_relative}>
            <div className={mapCSS.whole_container}>
                <iframe title='gmap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114616.39528371989!2d91.5604279!3d26.1392905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5ac3dddc3601%3A0xfff84915e863cea1!2sAdministrative%20Block%2C%20IIT%20Guwahati!5e0!3m2!1sen!2sin!4v1704578677012!5m2!1sen!2sin"
                    width="100%" height="450"
                    allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

                {isVisible &&
                    <div className={mapCSS.container}>
                        <div className={mapCSS.row}>
                            <div className={mapCSS.map_text}>

                                <div className={mapCSS.map_title}>

                                    <h4 className={mapCSS.head4}>TED <sup>x</sup> Venue Location Info</h4>
                                    <h2 className={mapCSS.head2}>Event Location</h2>


                                </div>
                                <p className={mapCSS.para}>Senate Hall, Administration Building, IIT Guwahati, India-781039</p>


                                <div className={mapCSS.get_location}>
                                    <a href="https://goo.gl/maps/wg5hYVDZVbegCz888" target="_blank" className={mapCSS.cmn_button}>

                                        <IoIosSend /> Get Location
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                }
            </div>




        </section>




    );

};

export default GoogleMap;
