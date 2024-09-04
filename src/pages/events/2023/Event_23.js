import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/navbar/Navbar";
import ScrollButton from '../../../components/scrollButton/scrollButton';
import theme_23 from "../../../assets/theme_23.png";
import logo_23 from "../../../assets/2023_logo.png";
import Footer from "../../../components/footer/Footer"
import styles from "./Event_23.module.css";
import Modal from "./Modal"
import Card from "./speakerCard";
import Card2 from "./memberCard";
import Data from "./speaker'23_Data"
import Divanshu from "./speakers23/Divanshu.png"
import Platiba from "./speakers23/Plabita.png"
import Kamal from "./speakers23/Kamal.png"
import Neeraj from "./speakers23/Neeraj.png"
import Seema from "./speakers23/Seema.png"
import Neil from "./speakers23/D_Silva.png"
import Pramiti from "./team23/pramiti2.jpg"
import Abhinav from "./team23/abhinav2.jpg"
import Kavin from "./team23/kavin.jpg"
import Parth from "./team23/parth.jpg"
import Shashank from "./team23/shashank.jpg"
import Abhiram from "./team23/Abhiram2.jpg"
import Nandini from "./team23/Nandini.jpg"
import Sree from "./team23/sreelakshmi.jpg"
import vamsi from "./team23/vamsi.jpg"
import pavan from "./team23/pavan.jpg"
import Newsletter from '../../../components/Newsletter/newsletter';

const Event_23 = () => {
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
            <img src={logo_23} alt="theme logo" />
            <div id={styles.theme}>
              <h1>Theme 2023:</h1>
              <h1>The Silent Letter</h1>
            </div>
          </div>
          <h2>February 12, 2023</h2>
        </header>
        <main>
          <div id={styles.banner}>
            <img src={theme_23} alt="theme'23" />
          </div>
          <div id={styles.about}>
            <h2>About</h2>
            <p>
              The Theme of TEDxIITGuwahati is ‘The Silent Letter’, Everything
              has value, whether good or bad, large or small. Nothing in this
              world is useless, although we often mistake that for the case.
              Young people are constantly encouraged to create a colossal
              impact, which causes them to focus primarily on the big problems,
              but small things are necessary for great things to occur. The word
              "Rendezvous" without its silent letters is not even a word
              anymore. Similarly, we have a lot of 'silent letters' around us,
              which help distinguish many aspects and impart more meaning to
              life. Small things matter. Making sacrifices can help you become
              the person you've always wanted to be, but these sacrifices are
              hardly ever acknowledged. Billionaires never talk about the time
              they don't get to spend with their loved ones; they only talk
              about becoming billionaires.
            </p>
          </div>
          <div id={styles.speakers}>
            <h2>Speakers</h2>
            <div id={styles.speakerContainer}>
            <Card func={() => openModal({ name: 'Plabita Borthakur', about: 'Artist', description: `${Data.Plabita}`, image: `${Platiba}` })} name='Plabita Borthakur' id='#Platiba' image={Platiba} />
            <Card func={() => openModal({name: 'Seema Lokhandwala',about: 'Elephant biologist',description: `${Data.Seema}`,image: `${Seema}`})} name='Seema Lokhandwala' id='#Seema' image={Seema} />
            <Card func={() => openModal({name: 'Neil D Silva',about: 'Author',description: `${Data.Neil}`,image: `${Neil}`})} name='Neil D Silva' id='#Neil' image={Neil} />
            <Card func={() => openModal({name: 'Neeraj Kumar Sharma',about: 'IITG Professor',description: `${Data.Neeraj}`,image: `${Neeraj}`})} name='Neeraj Kumar Sharma' id='#Neeraj' image={Neeraj} />
            <Card func={() => openModal({name: 'Kamal Jeswani',about: 'Financial Coach',description: `${Data.Kamal}`,image: `${Kamal}`})} name='Kamal Jeswani' id='#Kamal' image={Kamal} />
            <Card func={() => openModal({name: 'Divanshu Kumar',about: 'Co-founder & CEO',description: `${Data.Divanshu}`,image: `${Divanshu}`})} name='Divanshu Kumar' id='#Divanshu' image={Divanshu} />

            </div>
          </div>
          <div id={styles.team}>
            <h2>Organizing Team</h2>
            <div id={styles.teamContainer}>
            <Card2 name='Pramiti Gupta' about='Organizer' image={Pramiti}/>
            <Card2 name='Kavin' about='Co-Organizer' image={Kavin}/>
            <Card2 name='Parth Rathod' about='Marketing Head' image={Parth}/>
            <Card2 name='Shashank Mishra' about='Design Head' image={Shashank}/>
            <Card2 name='Abhiram Goud Bingi' about='WebOps Head' image={Abhiram}/>
            <Card2 name='Nandini Sharma' about='Content Head' image={Nandini}/>
            <Card2 name='Sreelakshmi Aneesh' about='Curation Head' image={Sree}/>
            <Card2 name='Abhinav' about='Media and Branding Head' image = {Abhinav}/>
            <Card2 name='P.N.V Sai Vamsi' about='Speakers Core' image={vamsi}/>
            <Card2 name='Pavan Dev' about='Curation Core' image={pavan}/>
        
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

export default Event_23;
