import styles from './Event_23.module.css';
import React from 'react'

const speakerCard = ({name,id, image, func}) => {

    return ( 
        <div className={styles.speaker} data-modal-target={id} onClick = {func}>
            <img src= {image} alt="Speaker Image" />
            <h3>{name}</h3>
        </div>
     );
}
 
export default speakerCard;