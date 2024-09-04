import styles from "./aboutUs.module.css";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScrollButton from '../../components/scrollButton/scrollButton';
import AboutCarousel from "../../components/AboutUs/AboutCarousel";
import TeamMember from "../../components/AboutUs/TeamMember";
import TeamMemberMob from "../../components/AboutUs/TeamMemberMob";
import useWindowWidth from '../../utilities/Hooks/UseWindowWidth'
import { useEffect } from 'react';

const AboutUs = () => {
  const windowWidth = useWindowWidth();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <NavBar></NavBar>
      <div className="main">
        <div className={styles.outerbox}>
          <AboutCarousel />
          <div className={styles.innerbox}>
          </div>
        </div>
        <div className={styles.outerBox3}>
          <div className={styles.mainContent}>
            <div className={styles.teamHeader}>
              <div className={styles.teamHeading}>
                <span>Meet our Core team</span>
              </div>
              <div className={styles.teamHeader2}>
                <p>
                  The Core team here at TEDxIITGuwahati is made up of a diverse
                  bunch of awesome humans!
                </p>
              </div>
              <div className={styles.teamHeaderContent}>
                <p>
                  We are driven by passion and curiosity. We are inspired by
                  ideas. And we want to leave the world better than we found it.
                  In our day lives you can find us working in design,
                  computer science, chemistry, biology, finance, NGOs, arts,
                  business, psycology, health and everything in between. We
                  work year round to bring TEDxIITGuwahati and all of our activities
                  to life.
                </p>
              </div>
            </div>
            <div>
              <div className={styles.teamImg}>
                <div>
                  {windowWidth > 890 ? 
                  <TeamMember title="Sravya Vardhani" designation="Organizer" image="Sravya_square.jpg" handle="https://www.linkedin.com/in/sravya-devarakonda/" /> :
                  <TeamMemberMob title="Sravya Vardhani" designation="Organizer" image="Sravya_square.jpg" handle="https://www.linkedin.com/in/sravya-devarakonda/" />
                  }
                </div>
                <div>
                  {windowWidth > 890 ?
                    <TeamMember title="Pranjal Saxena" designation="Co-Organizer & Content Head" image="Pranjal_square.jpg" handle="http://linkedin.com/in/pranjalsaxena04" /> :
                    <TeamMemberMob title="Pranjal Saxena" designation="Co-Organizer & Content Head" image="Pranjal_square.jpg" handle="http://linkedin.com/in/pranjalsaxena04" />
                  }
                </div>

                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Ravi Garlay" designation="Content Core" image="Ravi_square.jpg" handle="https://www.linkedin.com/in/ravi-garlay-1a8921223/" />:
                  <TeamMemberMob title="Ravi Garlay" designation="Content Core" image="Ravi_square.jpg" handle="https://www.linkedin.com/in/ravi-garlay-1a8921223/" />}
                </div>
                
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Kanv Choudary" designation="Content Core" image="Kanv_square.png" handle="https://www.linkedin.com/in/kanvchaudhary" />:
                  <TeamMemberMob title="Kanv Choudary" designation="Content Core" image="Kanv_square.png" handle="https://www.linkedin.com/in/kanvchaudhary" />}
                </div>
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Rajeev Verma" designation="Design Head" image="Rajeev.jpg" handle="https://www.linkedin.com/in/vrajeev/" />:
                  <TeamMemberMob title="Rajeev Verma" designation="Design Head" image="Rajeev.jpg" handle="https://www.linkedin.com/in/vrajeev/" />}
                </div>
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Kodudula Ashish Reddy" designation="WebOps Head" image="Ashish_new.jpeg" handle="https://www.linkedin.com/in/kodudula-ashish-reddy-585115224/" />:
                  <TeamMemberMob title="Kodudula Ashish Reddy" designation="WebOps Head" image="Ashish_new.jpeg" handle="https://www.linkedin.com/in/kodudula-ashish-reddy-585115224/" />}
                </div>
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Harsh Gupta" designation="Marketing Head" image="Harsh_square.jpg" handle="https://www.linkedin.com/in/harsh-gupta-a2753b228/" />:
                  <TeamMemberMob title="Harsh Gupta" designation="Marketing Head" image="Harsh_square.jpg" handle="https://www.linkedin.com/in/harsh-gupta-a2753b228/" />}
                </div>
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Divyansh Dadheech" designation="Events Head" image="Divyansh_square.jpg" handle="https://www.linkedin.com/in/divyansh-dadheech/" />:
                  <TeamMemberMob title="Divyansh Dadheech" designation="Events Head" image="Divyansh_square.jpg" handle="https://www.linkedin.com/in/divyansh-dadheech/" />}
                </div>
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Manish Kumar" designation="Events Core" image="Manish_square.jpg" handle="https://www.linkedin.com/in/johndoe" />:
                  <TeamMemberMob title="Manish Kumar" designation="Events Core" image="Manish_square.jpg" handle="https://www.linkedin.com/in/johndoe" />}
                </div>
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Sankalp Setia" designation="Speakers Head" image="Sankalp_square.jpg" handle="https://www.linkedin.com/in/sankalp-setia/" />:
                  <TeamMemberMob title="Sankalp Setia" designation="Speakers Head" image="Sankalp_square.jpg" handle="https://www.linkedin.com/in/sankalp-setia/" />}
                </div>
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Pankaj Kumar Jha" designation="Speakers Core" image="Pankaj1_square.jpg" handle="https://www.linkedin.com/in/ar-pkjha/" />:
                  <TeamMemberMob title="Pankaj Kumar Jha" designation="Speakers Core" image="Pankaj1_square.jpg" handle="https://www.linkedin.com/in/ar-pkjha/" />}
                </div>
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Triparna Kalita" designation="Speakers Core" image="Triparna Di_square.jpg" handle="https://www.linkedin.com/in/triparna-kalita-b1aaa5160" />:
                  <TeamMemberMob title="Triparna Kalita" designation="Speakers Core" image="Triparna Di_square.jpg" handle="https://www.linkedin.com/in/triparna-kalita-b1aaa5160" />}
                </div>
                <div>
                {windowWidth > 890 ?
                  <TeamMember title="Punakshit Singh" designation="PR & Media Head" image="Punakshit.jpg" handle="https://www.linkedin.com/in/punakshit-singh-6819b0253/" />:
                  <TeamMemberMob title="Punakshit Singh" designation="PR & Media Head" image="Punakshit.jpg" handle="https://www.linkedin.com/in/punakshit-singh-6819b0253/" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollButton />
    </>
  );
};

export default AboutUs;
