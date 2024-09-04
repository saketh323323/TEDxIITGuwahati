import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/navbar/Navbar";
import theme_16 from "../../../assets/theme16.png";
import logo_16 from "../../../assets/2016_logo.png";
import Footer from "../../../components/footer/Footer"
import styles from "./Event_16.module.css";
import Modal from "./Modal"
import Card from "./speakerCard";
import Card2 from "./memberCard";
import Data from "./speaker'16_Data"
import Ravindra from "./speakers16/ravindranath.png"
import Sankara from "./speakers16/sankara-subramaniam.jpeg"
import Seema from "./speakers16/seema-biswas.jpeg"
import Sanjoy from "./speakers16/sonjoy-hazarika.jpeg"
import Amit from "./team16/amit.jpg"
import Newsletter from '../../../components/Newsletter/newsletter';
import ScrollButton from '../../../components/scrollButton/scrollButton';

const Event_22 = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const openModal = ({name, about, description, image}) => {
    setSelectedSpeaker({name, about, description,image});
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Navbar />
      <div id={styles.body}>
        <header>
          <div>
            <img src={logo_16} alt="theme logo" />
            <div id={styles.theme}>
              <h1>Theme 2016:</h1>
              <h1>Pushing the limits</h1>
            </div>
          </div>
          <h2>January 16, 2016</h2>
        </header>
        <main>
          <div id={styles.banner}>
            <img src={theme_16} alt="theme'16" />
          </div>
          <div id={styles.about}>
            <h2>About</h2>
            <p>
            TEDxIITGuwahati brings to you the theme for our upcoming event, ‘Pushing the limits’. It is about the people who are doing the job for the betterment of society with little resources in the beginning and our aim is to give them a platform to share and spread their work to the world community.
            </p>
          </div>
          <div id={styles.speakers}>
            <h2>Speakers</h2>
            <div id={styles.speakerContainer}>
            <Card func={() => openModal({ name: 'Ravindranath Ravi', about: 'Social Activist', description: `${Data.ravindranath}`, image: `${Ravindra}` })} name='Ravindranath Ravi' id='#ravindranath ravi' image={Ravindra} />
            <Card func={() => openModal({name: 'Sanjoy Hazarika',about: 'Author',description: `${Data.Sanjoy}`,image: `${Sanjoy}`})} name='Sanjoy Hazarika' id='#Sanjoy' image={Sanjoy} />
            <Card func={() => openModal({name: 'Sankara Subramanian C',about: 'Traveler and blogger',description: `${Data.Sankara}`,image: `${Sankara}`})} name='Sankara Subramanian C' id='#Sankara' image={Sankara} />
            <Card func={() => openModal({name: 'Seema Biswas',about: 'Actress',description: `${Data.Seema}`,image: `${Seema}`})} name='Seema Biswas' id='#Seema' image={Seema} />
            </div>
          </div>
          <div id={styles.team}>
            <h2>Organizing Team</h2>
            <div id={styles.teamContainer}>
            <Card2 name='Amit Kumar Baghel' about='Organizer' image={Amit}/>
            </div>
          </div>
        </main>


        {selectedSpeaker && (
          <Modal
            name={selectedSpeaker.name}
            about={selectedSpeaker.about}
            image={selectedSpeaker.image}
            description = {selectedSpeaker.description}
            func={closeModal}
          />
        )}
        {selectedSpeaker && <div onClick={closeModal} id={styles.overlay}></div>}





      </div>
      <Newsletter/>
      <Footer/>
      <ScrollButton/>
    </div>
  );
};

export default Event_22;
