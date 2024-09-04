import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import Schedule from '../../components/Home/Schedule'
import ThemeInfo from '../../components/Home/ThemeInfo'
import Newsletter from '../../components/Newsletter/newsletter'
import Nomination from '../../components/Home/nomination'
import Welcome from '../../components/animation/Welcome'
// import Swiperr from "../../components/speaker/swiper.js"
import SpeakersSection from '../../components/Home/SpeakersSection'
import Speaker_1 from '../../components/speaker/speaker_1.js'
import { useEffect } from 'react';

const Home = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return(
        <div>
            <Navbar/>
            <Welcome/>
            <Nomination/>
            <ThemeInfo/>
            <SpeakersSection/>
            {/* <Swiperr/> */}
            <Speaker_1/>
            <Schedule/>
            <Newsletter/>
            <Footer/>
            <ScrollButton/>
        </div>
    )
}

export default Home

//Animation
//Themeinfo-->Hobart
    //Buytickets-->Hobart
//Speakers =>Empty
//Venue-->MIT
//schedule-->CIVILlINES
