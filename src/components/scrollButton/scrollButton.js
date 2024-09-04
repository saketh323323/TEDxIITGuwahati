import React, {useState, useEffect} from 'react'
import Styles from './scrollButton.module.css'

const ScrollButton = () => {
    const [visibile, setVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);


    const handleScroll = () => {
        let pos = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let progress = (pos/ height) * 100;

        setScrollProgress(progress);
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 100){
            setVisible(true);
        }
        else if(scrolled <= 100){
            setVisible(false)
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        });
    }

  return (
    <> 
        <div className={Styles.progressWrap} style={{display: visibile ? 'flex': 'none', background: `conic-gradient( #e62b1e ${scrollProgress}%, rgb(180 178 178) ${scrollProgress}%)`}}>
            <div id={Styles.progressValue} onClick= {scrollToTop}>
            <svg width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003" transform="rotate(0)"><g id="SVGRepo_bgCarrier"strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC"strokeWidth="0.192"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071C4.68342 13.0976 5.31658 13.0976 5.70711 12.7071L12 6.41421L18.2929 12.7071C18.6834 13.0976 19.3166 13.0976 19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L12.7071 4.29289ZM12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L12.7071 11.2929Z" fill="#ff0000"></path> </g></svg>
            </div>
        </div>
    </>

  )
}
export default ScrollButton; 