import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/navbar/Navbar";
import ScrollButton from '../../../components/scrollButton/scrollButton';
import theme_21 from "../../../assets/theme21.png";
import logo_21 from "../../../assets/2021_logo.png";
import Footer from "../../../components/footer/Footer"
import styles from "./Event_21.module.css";
import Modal from "./Modal"
import Card from "./speakerCard";
import Card2 from "./memberCard";
import Data from "./speaker'21_Data"
import Aashish from "./speakers21/Aashish.png"
import Aditya from "./speakers21/Aditya.jpg"
import Bhagvan from "./speakers21/Bhagvan.JPG"
import Bidisha from "./speakers21/Bidisha.jpg"
import Nisha from "./speakers21/Nisha.jpg"
import Prabhagaran from "./speakers21/Prabhagaran.jpg"
import Rudy from "./speakers21/Rudy.jpg"
import Seema from "./speakers21/Seema.png"
import Shiva from "./speakers21/Shiva.jpg"
import Anvita from "./team21/anvita_kodru.png"
import Ayush from "./team21/Ayush Srivastava.jpg"
import Emily from "./team21/Emily Huiling.jpg"
import Govind from "./team21/Govind Singh.jpg"
import Jaideep from "./team21/Jaideep Buksagarmath.jpg"
import JaikishanMansukhani from "./team21/JaikishanMansukhani.jpg"
import Nishant from "./team21/Nishant.jpg"
import Ritik from "./team21/Ritik Singh.jpg"
import Samrarth from "./team21/SamarthSaraswat.jpg"
import Shivangi from "./team21/ShivangiKumar.jpg"
import Sree from "./team21/SreesiddeshBhavanasi.jpeg"
import Sudarshan from "./team21/Sudarshan Birla.jpg"
import Vishwa from "./team21/VishwaprasannaH.jpg"
import Newsletter from '../../../components/Newsletter/newsletter';

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
            <img src={logo_21} alt="theme logo" />
            <div id={styles.theme}>
              <h1>Theme 2021:</h1>
              <h1>The Other End of the Line</h1>
            </div>
          </div>
          <h2>March 7, 2021</h2>
        </header>
        <main>
          <div id={styles.banner}>
            <img src={theme_21} alt="theme'21" />
          </div>
          <div id={styles.about}>
            <h2>About</h2>
            <p>
            TEDxIITGuwahati brings to you the theme for our event this year, 'The Other End of the Line'. Humans have always had an unexplainable drive to excel in every aspect of life. As we leap across these barriers, do we take into consideration, a backup to cover the consequences of the mess we have regretfully created? A line can be metaphorically used as a timeline as we pin along the various events that have brought about a change in the to be history of the humankind, but does this line seem to have an end? Is this advancement limitless, and if it is, where does it lead to? Can we reach a point where this steep graph of growth finally plateaus and the humility of satisfaction finally extinguishes these ambitious desires?
            </p>
          </div>
          <div id={styles.speakers}>
            <h2>Speakers</h2>
            <div id={styles.speakerContainer}>
            <Card func={() => openModal({ name: 'Aashish Chandratreya', about: 'Photographer & Videographer', description: `${Data.Aashish}`, image: `${Aashish}` })} name='Aashish Chandratreya' id='#Aashish' image={Aashish} />
            <Card func={() => openModal({name: 'Aditya Gupta',about: 'Entrepreneur And Adventure Traveller',description: `${Data.Aditya}`,image: `${Aditya}`})} name='Aditya Gupta' id='#Aditya' image={Aditya} />
            <Card func={() => openModal({name: 'Bhagvan Kommadi',about: 'Professor of Linguistics',description: `${Data.Bhagvan}`,image: `${Bhagvan}`})} name='Bhagvan Kommadi' id='#Bhagvan' image={Bhagvan} />
            <Card func={() => openModal({name: 'Nisha Bora',about: 'Social researcher and entrepreneur',description: `${Data.Nisha}`,image: `${Nisha}`})} name='Nisha Bora' id='#Nisha' image={Nisha} />
            <Card func={() => openModal({name: 'Prabhagaran Rakkiappan',about: 'Product Manager & UX Designer',description: `${Data.Prabhagaran}`,image: `${Prabhagaran}`})} name='Prabhagaran Rakkiappan' id='#Prabhagaran' image={Prabhagaran} />
            <Card func={() => openModal({name: 'Bidisha Som',about: 'Professor of Linguistics',description: `${Data.Bidisha}`,image: `${Bidisha}`})} name='Bidisha Som' id='#Bidisha' image={Bidisha} />
            <Card func={() => openModal({name: 'Seema Gupta',about: 'Professor of Digital Marketing',description: `${Data.Seema}`,image: `${Seema}`})} name='Seema Gupta' id='#Seema' image={Seema} />
            <Card func={() => openModal({name: 'Rudy Wallang',about: 'Blues Musician',description: `${Data.Rudy}`,image: `${Rudy}`})} name='Rudy Wallang' id='#Rudy' image={Rudy} />
            <Card func={() => openModal({name: 'Shiva Sah',about: 'Student, Architect',description: `${Data.Shiva}`,image: `${Shiva}`})} name='Shiva Sah' id='#Shiva' image={Shiva} />

            </div>
          </div>
          <div id={styles.team}>
            <h2>Organizing Team</h2>
            <div id={styles.teamContainer}>
            <Card2 name='Jaikishan Mansukhani' about='Organizer' image={JaikishanMansukhani}/>
            <Card2 name='Sreesiddesh Bhavanasi' about='Co-Organizer' image={Sree}/>
            <Card2 name='Anvita Kodru' about='Content Head' image={Anvita}/>
            <Card2 name='Shivangi Kumar' about='WebOps Head' image={Shivangi}/>
            <Card2 name='Vishwaprasanna H' about='Design Head' image={Vishwa}/>
            <Card2 name='Samarth Saraswat' about='Marketing and Branding Head' image={Samrarth}/>
              
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
      <Footer />
      <ScrollButton/>
    </div>
  );
};

export default Event_22;
