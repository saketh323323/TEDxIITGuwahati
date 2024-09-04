import styles from './Merch.module.css';
import MerchCard from './MerchCard';
import { useInView } from "react-intersection-observer";

const Attend = () => {
    const merchImages = [
        ['/Images/Registration/HoodieFront.png'], 
        ['/Images/Registration/HoodieBack.png'],
        ['/Images/Registration/TshirtFront.png'],
        ['/Images/Registration/TshirtBack.png'],
    ]

    const { ref: upperRef, inView: upperVisibility } = useInView();

    return ( 
        <div className={styles.contentContainer}>
            <div
                ref={upperRef}
                className={`${styles.upper} ${
                upperVisibility ? styles.fadeInAnimation : ""
                }`}
            >
                <div className={styles.headingContainer}>
                {/* <p className={styles.overheading}>Grab our Merchandise —</p> */}
                <h1 className={styles.overheading}>Merchandise</h1>
                </div>
                <p className={styles.message}>
                    This Hoodie and T-shirt are everything you've dreamed of and more. It feels soft and lightweight, with the right amount of stretch. It's comfortable and flattering for both men and women.
                </p>
            </div>
            <div className={styles.cardsContainer}>
            {
                merchImages.map(([imgLink, heading])=>(
                    <MerchCard imgLink={imgLink}/>
                ))
            }
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.bookButton} >
                <a target='_blank' href = 'https://forms.gle/LWEi8mDYswThhX4BA'>Order Now</a></button>
            </div>
        </div>
     );
}
 
export default Attend;