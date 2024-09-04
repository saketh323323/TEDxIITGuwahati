import { useState } from 'react';
import styles from './TeamMember.module.css'
import { SocialIcon } from 'react-social-icons';

const TeamMember = ({title, designation, image, handle}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <a href={handle} className={styles.link} target='blank'>
                <div className={styles.imgBox} style={{
                    position: "relative",
                }}>
                    <img src={`/Images/Team/${image}`} alt="Img" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                    {isHovered && <div className={styles.hovereff} style={{
                        position: 'absolute', top: '41.2px', right: '93px', display: 'flex', flexDirection: 'column',
                    }}>
                        <SocialIcon url="https://www.linkedin.com" bgColor='#e60028' className={styles.icon}/>
                    </div> }
                </div>
                <div className={styles.imgTitle}>
                    <div className={styles.imgTitleName}>{title}</div>
                    <div className={styles.imgTitlePost}>{designation}</div>
                </div>
            </a>
        </>
    )
}

export default TeamMember