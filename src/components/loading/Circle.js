import React from 'react';
import styles from './loading.module.css'

const CircleAnimation = () => {
    return (
        <div id={styles["spinner-container"]}>
            <div id={styles["loading-spinner"]}></div>
        </div>

    );
};

export default CircleAnimation;