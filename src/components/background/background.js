import React from 'react'

import backgroundImg from '../../assets/rings.png';
import styles from './background.module.scss';

const background = () => (
    <>
        <img src={backgroundImg} alt="background image" className={styles.homeImg}/>
        <div className={styles.imgOverlay}></div>
    </>
)

export default background