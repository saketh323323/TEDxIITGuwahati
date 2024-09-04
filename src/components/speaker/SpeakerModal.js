import { FaCross, FaFacebook, FaInstagram, FaLink, FaLinkedin, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './SpeakerModal.module.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const SpeakerModal=({set, name,  description, image, func})=>{
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
          document.body.style.overflowY = "scroll";
        };
      }, []);
    return ReactDOM.createPortal(
        <>
            <div className={styles.overlay}></div>
        <div className={styles.container}>
            <div className={styles.box}>
                
                <button className={styles.close} onClick={set}>
                    <div className={styles.icon}>
                    <FaTimes className={styles.x} />
                    </div>
                    Close
                </button>
                <div className={styles.modal}>
                    <div className={styles.header}>
                    <div className={styles.img}>
                        <img src={image} alt="" id={styles['image_']} />
                    </div>
                        <div className={styles.name}>
                            <h2>{name}</h2>
                            {/* <ul className={styles.soc_list}>
                                <li className="">
                                    <Link>
                                    <FaLinkedin className={styles.link}/>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                    <FaXTwitter className={styles.link}/>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                    <FaInstagram className={styles.link}/>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                    <FaFacebook className={styles.link}/>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link>
                                    <FaLink className={styles.link}/>
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                        {/* <h3 id={styles['posi']}>Co-Curator and Head of Speaker Coaching</h3> */}
                    </div>
                    <div className={styles.content}>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
        </>,
    document.body
    )
}
export default SpeakerModal