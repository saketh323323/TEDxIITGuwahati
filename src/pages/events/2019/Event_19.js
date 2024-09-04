import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/navbar/Navbar";
import theme_19 from "../../../assets/theme19.png";
import ScrollButton from '../../../components/scrollButton/scrollButton';
import logo_19 from "../../../assets/2019_logo.png";
import Footer from "../../../components/footer/Footer"
import styles from "./Event_19.module.css";
import Modal from "./Modal"
import Card from "./speakerCard";
import Card2 from "./memberCard";
import Data from "./speaker'19_Data"
import Alana from "./speakers19/Alana Golmei.png"
import Anamika from "./speakers19/Anamika_Barua.png"
import Arup from "./speakers19/Arup Kumar Dutta.png"
import Binita from "./speakers19/Binita Jain.png"
import Milin from "./speakers19/Milin Dutta.png"
import Pragnya from "./speakers19/Pragnya_Ramjee.jpg"
import Zoma from "./speakers19/Zoma_Sailo.png"
import Sangeet from "./team19/sangeetchandaliya.jpeg"
import Bhaskar from "./team19/bhaskar.jpg"
import Paridhi from "./team19/paradhi.jpg"
import Anupirya from "./team19/anupriya.png"
import Daman from "./team19/daman.jpg"
import Ishan from "./team19/ishan.jpg"
import Harshith from "./team19/harshith.jpg"
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
            <img src={logo_19} alt="theme logo" />
            <div id={styles.theme}>
              <h1>Theme 2019:</h1>
              <h1>The Changing Faces of Taboo</h1>
            </div>
          </div>
          <h2>February 10, 2019</h2>
        </header>
        <main>
          <div id={styles.banner}>
            <img src={theme_19} alt="theme'19" />
          </div>
          <div id={styles.about}>
            <h2>About</h2>
            <p>
            TEDxIITGuwahati brings to you the theme for our event, ‘The Changing Faces of Taboo’.
The words ‘rigid rules of yesterday that have become obscure and obsolete today’ describes precisely what the global society is incessantly countering with innumerable questions and logic. In short, they describe - Taboos.
While for centuries taboos have shunned countless into oblivion, it is time that we wage a war against them using our intellect, logic and diligence.
TEDxIITGuwahati is thrilled to invite you all to be a part of its modest step towards a rational and fearless world. This Theme will remain the primal theme for the day and hopefully, an encouragement for our future!
            </p>
          </div>
          <div id={styles.speakers}>
            <h2>Speakers</h2>
            <div id={styles.speakerContainer}>
            <Card func={() => openModal({ name: 'Alana Golmei', about: 'Lawyer, Humanitarian', description: `${Data.Alana}`, image: `${Alana}` })} name='Alana Golmei' id='#Alana' image={Alana} />
            <Card func={() => openModal({name: 'Anamika Barua',about: 'Professor of Economics',description: `${Data.Anamika}`,image: `${Anamika}`})} name='Anamika Barua' id='#Anamika' image={Anamika} />
            <Card func={() => openModal({name: 'Arup Kumar Dutta',about: 'Journalist, Conservationalist',description: `${Data.Arup}`,image: `${Arup}`})} name='Arup Kumar Dutta' id='#Arup' image={Arup} />
            <Card func={() => openModal({name: 'Binita Jain',about: 'Teacher',description: `${Data.Binita}`,image: `${Binita}`})} name='Binita Jain' id='#Binita' image={Binita} />
            <Card func={() => openModal({name: 'Milin Dutta',about: 'Trans-activist',description: `${Data.Milin}`,image: `${Milin}`})} name='Milin Dutta' id='#Milin' image={Milin} />
            <Card func={() => openModal({name: 'Pragnya Ramjee',about: 'Student',description: `${Data.Pragnya}`,image: `${Pragnya}`})} name='Pragnya Ramjee' id='#Pragnya' image={Pragnya} />
            <Card func={() => openModal({name: 'Zoma Sailo',about: 'Mentor and Part of Light After Dark',description: `${Data.Zoma}`,image: `${Zoma}`})} name='Zoma Sailo' id='#Zoma' image={Zoma} />

            </div>
          </div>
          <div id={styles.team}>
            <h2>Organizing Team</h2>
            <div id={styles.teamContainer}>
            <Card2 name='Sangeet Chandaliya' about='Organizer' image={Sangeet}/>
            <Card2 name='Sai Bhasker Devatha' about='Co-Organizer' image={Bhaskar}/>
            <Card2 name='Paridhi Kothari' about='Content Head' image={Paridhi}/>
            <Card2 name='Daman Tekchandani' about='WebOps Head' image={Daman}/>
            <Card2 name='Anupriya Gupta' about='Design Head' image={Anupirya}/>
            <Card2 name='Ishan Azad' about='Events Head' image={Ishan}/>
            <Card2 name='Harshith Ravikumar' about='Marketing and Branding Head' image={Harshith}/>
              
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
