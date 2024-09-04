import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'
import ScrollButton from '../../components/scrollButton/scrollButton'
import Passes from '../../components/registration/Passes'
import Venue from '../../components/Home/Venue'
import Attend from '../../components/registration/Attend'
import GoogleMap from './google_map.js'
import Merch from '../../components/registration/Merch.jsx'
import { useEffect } from 'react';


const Registration = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return(
        <>
        <NavBar/>
        <Passes/>
        <Attend/>
        <Venue/>
        <Merch/>
        <Newsletter/>
        <Footer/>
        <ScrollButton/>
        </>
    )
}

export default Registration
