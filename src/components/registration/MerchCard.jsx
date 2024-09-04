import { useInView } from 'react-intersection-observer';
import styles from './MerchCard.module.css'

const MerchCard = ({imgLink, heading, para}) => {
    const {ref,inView} = useInView()
    return ( 
        <div ref={ref} className={`${styles.container} ${inView? styles.animate:''}`}>
            <img className={styles.image} src={imgLink} alt="img" />
        </div>
     );
}
 
export default MerchCard;