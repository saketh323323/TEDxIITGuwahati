import React, {useEffect, useState} from 'react';
import Navbar from "../../../components/navbar/Navbar";
import ScrollButton from '../../../components/scrollButton/scrollButton';
import theme_22 from "../../../assets/theme22.jpeg";
import logo_22 from "../../../assets/2022_logo.png";
import Footer from "../../../components/footer/Footer"
import styles from "./Event_22.module.css";
import Modal from "./Modal"
import Card from "./speakerCard";
import Card2 from "./memberCard";
import Data from "./speaker'22_Data"
import abhimanyu from "./speakers22/abhimanyu.jpg"
import jalal from "./speakers22/jalal.jpg"
import Magician from "./speakers22/Magician.jpg"
import pravathy from "./speakers22/parvathy.jpg"
import james from "./speakers22/james.jpg"
import rishab from "./speakers22/rishab_mandeep.jpg"
import mandeep from "./speakers22/mandeep.jpg"
import saumya from "./speakers22/saumya.jpg"
import rohan from "./speakers22/Rohan.jpg"
import titiksha from "./team22/titiksha2.jpeg"
import Miloni from "./team22/Miloni Patel.jpg"
import Anindya from "./team22/Anindya Rajan.jpg"
import Govind from "./team22/Govind Singh.jpg"
import Anushka from "./team22/Anushka Anand.jpg"
import Gourav from "./team22/Gourav Kumar.jpg"
import Emily from "./team22/Emily Huiling.jpg"
import Nildari from "./team22/Niladri Sarkar.jpg"
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
            <img src={logo_22} alt="theme logo" />
            <div id={styles.theme}>
              <h1>Theme 2022:</h1>
              <h1>The Boiling Frog</h1>
            </div>
          </div>
          <h2>February 20, 2022</h2>
        </header>
        <main>
          <div id={styles.banner}>
            <img src={theme_22} alt="theme'22" />
          </div>
          <div id={styles.about}>
            <h2>About</h2>
            <p>
            TEDxIITGuwahati brings to you the theme for our upcoming event, 'The Boiling Frog'. The phrase “The Boiling Frog” may appear to be hilarious at first, but it holds a much deeper meaning. As the tale goes, if you put a frog in a pan of boiling water, it will jump out at once. However, if you place it in a pot of gently lukewarm water and slowly heat it, the frog will stay in the water until it boils to death. <br />
It is a metaphor for our lack of will or inability to react to threats that arise gradually rather than suddenly. So, are we laying the road for the ultimate catastrophe, just as the frog's ignorance led it to death?
Another aspect of this fable is the very leap of survival that the frog must take. It is a difficult endeavour involving great risk. <br />
True innovations have always been found on this very edge.Are these moments of sheer inspiration massive disturbances that send waves ofrapture through the world, or are they quietly absorbed into our society?
            </p>
          </div>
          <div id={styles.speakers}>
            <h2>Speakers</h2>
            <div id={styles.speakerContainer}>
            <Card func={() => openModal({ name: 'Abhimanyu Singh', about: 'Co-founder of Hexprssions', description: `${Data.Abhimanyu}`, image: `${abhimanyu}` })} name='Abhimanyu Singh' id='#abhimanyu' image={abhimanyu} />
            <Card func={() => openModal({name: 'Baland Jalal',about: 'Neuroscientist',description: `${Data.Baland}`,image: `${jalal}`})} name='Baland Jalal' id='#jalal' image={jalal} />
            <Card func={() => openModal({name: 'Pritam Patra',about: 'Torque Magician',description: `${Data.Pritam}`,image: `${Magician}`})} name='Pritam Patra' id='#Pritam' image={Magician} />
            <Card func={() => openModal({name: 'Parvathy Sailesh',about: 'Student UnrestricTED Winner',description: `${Data.Parvathy}`,image: `${pravathy}`})} name='Parvathy Sailesh' id='#Parvathy' image={pravathy} />
            <Card func={() => openModal({name: 'Richard James MacCowan',about: 'BioFuturist',description: `${Data.Richard}`,image: `${james}`})} name='Richard James MacCowan' id='#james' image={james} />
            <Card func={() => openModal({name: 'Rishabh Jain & Mandeep Gill',about: 'Co-Founder labour law advisor',description: `${Data.Mandeep}`,image: `${rishab}`})} name='Rishabh Jain & Mandeep Gill' id='#rishab' image={rishab} />
            <Card func={() => openModal({name: 'Rohan Agrawal',about: 'Traveller',description: `${Data.Rohan}`,image: `${rohan}`})} name='Rohan Agrawal' id='#Rohan' image={rohan} />
            <Card func={() => openModal({name: 'Sawmya Ray',about: 'Professor Humanities and Social Sciences',description: `${Data.Sawmya}`,image: `${saumya}`})} name='Sawmya Ray' id='#Sawmya' image={saumya} />

            </div>
          </div>
          <div id={styles.team}>
            <h2>Organizing Team</h2>
            <div id={styles.teamContainer}>
            <Card2 name='Titiksha Sah' about='Organizer' image={titiksha}/>
            <Card2 name='Miloni Patel' about='Co-Organizer' image={Miloni}/>
            <Card2 name='Govind Singh' about='Speakers Head' image={Govind}/>
            <Card2 name='Anushka Anand' about='Content Head' image={Anushka}/>
            <Card2 name='Gourav Kumar' about='WebOps Head' image={Gourav}/>
            <Card2 name='Emily Huiling' about='Design Head' image={Emily}/>
            <Card2 name='Niladri Sarkar' about='Speakers Core' image={Nildari}/>
            <Card2 name='Anindya Rajan' about='Content Core' image={Anindya}/>
              
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
