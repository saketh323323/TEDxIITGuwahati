import { useInView } from 'react-intersection-observer';
import styles from './Attend.module.css';
import AttendCard from './AttendCard';

const Attend = () => {
    const attendanceReasons = [
        ['/images/Registration/attend1.jpeg', 'Learn from the best', 'Be the first to witness to ideas from iconic speakers breaking barriers across fields.'],
        ['/images/Registration/attend2.jpeg', 'Find the magic', 'Our event program is designed for attendees and speakers from vastly different fields to cinnect and draw inspiration from unlikely places.'],
        ['/images/Registration/attend3.jpeg', 'Be a part of a community', "Our Delegates represent every field from A (architects) to Z (zoologists). Our attendees are as interesting as our speakers"],
        ['/images/Registration/attend4.jpeg', 'Build life-long connections', 'Meet like-minded attendees and exchange new ideas and insights. Each conversation with a new person could reveal new trends, treatments and technologies- or spark them.'],
        ['/images/Registration/attend5.jpeg', 'Discovery Sessions', 'Explore new interests and connect with your fellow TED stars during deep-dive workshops and speaker meetings.'],
        ['/images/Registration/attend6.jpeg', 'Join a movement', 'A gathering of iconic individuals from around the world. Unexpected connections. Extraordingary insights. Unimaginable discoveries. Powerful inspiration.']
    ]

    const {ref:headingRef, inView:headingVisibility} = useInView();

    return ( 
        <div className={styles.contentContainer}>
            <h1 ref={headingRef} className={`${styles.heading} ${headingVisibility?styles.fadeBelowAnimation:''}`}>Why Should<br />You Attend?</h1>
            <div className={styles.cardsContainer}>
            {
                attendanceReasons.map(([imgLink, heading,para])=>(
                    <AttendCard imgLink={imgLink} heading={heading} para={para}/>
                ))
            }
            </div>
        </div>
     );
}
 
export default Attend;