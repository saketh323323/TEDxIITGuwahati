import NavBar from '../../components/navbar/Navbar';
import styles from '../../components/partners/partners.module.css';
import Partnering from '../../components/partners/partnering';
import Upper2 from '../../components/partners/Upper2';
import Wypar from '../../components/partners/Wypar';
import OurAudience from '../../components/partners/OurAudience';
import SponsOptunity from '../../components/partners/SponsOptunity';
import useWindowWidth from '../../utilities/Hooks/UseWindowWidth.js'
import Footer from '../../components/footer/Footer';
import Newsletter from '../../components/Newsletter/newsletter';
import ScrollButton from '../../components/scrollButton/scrollButton';
import { useEffect } from 'react';

const Partners = () => {
  const windowWidth =useWindowWidth();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
      <div className={styles.main}>
        <NavBar />
        {windowWidth >= 800 && <Partnering />}
        <Upper2 />
        <Wypar />
        <OurAudience />
        <SponsOptunity />
        <Newsletter/>
        <Footer/>
        <ScrollButton/>
      </div>
  );
}

export default Partners;
