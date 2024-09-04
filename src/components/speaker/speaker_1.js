import SpeakerModal from './SpeakerModal';
import { Link } from "react-router-dom"
import styles from "./speaker_1.module.css"
import data from './speaker_data';
import useAOS from '../../utilities/Hooks/useAOS';
import React, { useState } from 'react';
const Speaker_1 = () => {
    const aos = useAOS();
    document.body.style.overflowX = "hidden"
    const [speakermodal, setmodal] = useState(false);
    const closeModal = () => setmodal(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const openModal = ({name, about, description, image}) => {
        setSelectedSpeaker({name, about, description,image});
      };
    return (
        <>
            <div className={styles.container}>
                {
                    speakermodal && <SpeakerModal 
                    set={closeModal}
                    name={selectedSpeaker.name}
                    about={selectedSpeaker.about}
                    image={selectedSpeaker.image}
                    description = {selectedSpeaker.description}
                    />
                }
                <div className={styles.speaker}>
                    <Link className={styles.item} onClick={() => { setmodal(true); setSelectedSpeaker({name: "Aleena", about: "educator", image: "./Images/Speakers/aleena.jpg", description: data.Aleena}) }}
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/Speakers/aleena.jpg" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Aleena Rais</h1>
                            {/* <p className={styles.des}>Ultra pro max developer</p> */}
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true); setSelectedSpeaker({name:"Rajat Rathor", about:"Cop",image:"./Images/Speakers/rajat.jpg",description:data.Rajat}) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/Speakers/rajat.jpg" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Rajat Rathor</h1>
                            {/* <p className={styles.des}>Ultra pro max developer</p> */}
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true); setSelectedSpeaker({name:"Ilina Sinha", about:"Phd",image:"./Images/Speakers/illina.jpg",description:data.illina}) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/Speakers/illina.jpg" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Ilina Sinha</h1>
                            {/* <p className={styles.des}>Ultra pro max developer</p> */}
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true); setSelectedSpeaker({name:"Capt Satendra Sangwan", about:"Phd",image:"./Images/Speakers/captain_3.jpg",description:data.sangwan}) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/Speakers/captain.jpg" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Capt Satendra Sangwan</h1>
                            {/* <p className={styles.des}>Ultra pro max developer</p> */}
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true); setSelectedSpeaker({name:"Rituparna Neog", about:"Phd",image:"./Images/Speakers/Neog_2.jpg",description:data.Rituparna}) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/Speakers/Neog.jpg" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Rituparna Neog</h1>
                            {/* <p className={styles.des}>Ultra pro max developer</p> */}
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true); setSelectedSpeaker({name:"Asutosh Kashyap", about:"Phd",image:"./Images/Speakers/asutosh_2.jpg",description:data.Asutosh}) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/Speakers/asutosh.jpg" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Asutosh Kashyap</h1>
                            {/* <p className={styles.des}>Ultra pro max developer</p> */}
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true); setSelectedSpeaker({name:"Sudhana Sankar", about:"Phd",image:"./Images/Speakers/sudhana_2.jpg",description:data.Sudhana}) }}
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/Speakers/sudhana.jpg" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Sudhana Sankar</h1>
                            {/* <p className={styles.des}>Ultra pro max developer</p> */}
                        </div>
                    </Link>
                    <Link className={styles.item} onClick={() => { setmodal(true); setSelectedSpeaker({name:"Mrinal Talukdar", about:"Phd",image:"./Images/Speakers/mrinal_2.jpg",description:data.Mrinal}) }}
                            data-aos="fade-right"
                            data-aos-easing="linear" 
                            data-aos-duration="1500"
                            data-aos-delay="400">
                        <div className={styles.image}>
                            <img src="./Images/Speakers/mrinal.jpg" alt="" className={styles.image_1} />
                        </div>
                        <div className={styles.heading_1}>
                            <h1 className={styles.head}>Mrinal Talukdar</h1>
                            {/* <p className={styles.des}>Ultra pro max developer</p> */}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Speaker_1