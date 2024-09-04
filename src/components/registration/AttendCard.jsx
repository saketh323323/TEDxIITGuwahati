import { useInView } from 'react-intersection-observer';
import styles from './AttendCard.module.css'

const AttendCard = ({imgLink, heading, para}) => {
    const {ref,inView} = useInView()
    return ( 
        <div ref={ref} className={`${styles.container} ${inView? styles.animate:''}`}>
            <img className={styles.image} src={imgLink} alt="img" />
            <div className={styles.content}>
                <h4 className={styles.heading}>{heading}</h4>
                <p className={styles.para}>{para}</p>
            </div>
        </div>
     );
}
 
export default AttendCard;