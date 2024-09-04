import React from 'react';
import styles from './homeStyles.module.css'

const SpeakersSection = () => {
    return (
        <section data-element_type="section" data-settings={{ "background_background": "classic" }} className={styles.speakerHead}>
            <div >
                <div style={{display:'flex',justifyContent:'center',alignItems:'center', marginBottom:'40px'}}>
                    <div style={{position:'relative'}} data-id="23ddffa" data-element_type="column">
                        <div >
                            <div >
                                {/* Image Widget */}
                                <div  className={styles.arrow1} data-id="1416b3e" data-element_type="widget" data-settings={{ "_position": "absolute" }} data-widget_type="image.default">
                                    <div >
                                        <div >
                                            <img decoding="async" width="50" height="50" src="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle.png 600w, https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle-300x247.png 300w" sizes="(max-width: 600px) 100vw, 600px" data-attachment-id="6248" data-permalink="https://tedxhyderabad.com/home-2/triangle/#main" data-orig-file="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle.png" data-orig-size="600,494" data-comments-opened="1" data-image-meta={{ "aperture": "0", "credit": "", "camera": "", "caption": "", "created_timestamp": "0", "copyright": "", "focal_length": "0", "iso": "0", "shutter_speed": "0", "title": "", "orientation": "0" }} data-image-title="Triangle" data-image-description="" data-image-caption="" data-medium-file="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle-300x247.png" data-large-file="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle.png" />
                                        </div>
                                    </div>
                                </div>

                                {/* Heading Widget - Speakers */}
                                <div data-element_type="widget" data-widget_type="heading.default">
                                    <div className={styles.center_elm}>
                                        <h2 className={styles.speaker}>Speakers</h2>
                                        <h2 className={styles.h2x}style={{color:'red',position:'absolute'}}>TEDx<span style={{ color: "#000" }}>IIT Guwahati</span>2024</h2>
                                    </div>
                                </div>
 
                                {/* Image Widget */}
                                <div data-id="28661b5" data-element_type="widget" data-settings={{ "_position": "absolute" }} data-widget_type="image.default">
                                    <div >
                                        <div>
                                            <img decoding="async" width="50" height="50" src="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle.png 600w, https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle-300x247.png 300w" sizes="(max-width: 600px) 100vw, 600px" data-attachment-id="6248" data-permalink="https://tedxhyderabad.com/home-2/triangle/#main" data-orig-file="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle.png" data-orig-size="600,494" data-comments-opened="1" data-image-meta={{ "aperture": "0", "credit": "", "camera": "", "caption": "", "created_timestamp": "0", "copyright": "", "focal_length": "0", "iso": "0", "shutter_speed": "0", "title": "", "orientation": "0" }} data-image-title="Triangle" data-image-description="" data-image-caption="" data-medium-file="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle-300x247.png" data-large-file="https://tedxhyderabad.com/wp-content/uploads/2023/07/Triangle.png" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakersSection;