import React from 'react'

import Carousel from './carousel/carousel'

import styles from './about.module.scss'

const about = () => (
    <>
        <div className={styles.about}>
            <div className={styles.carouselWrapper}>
                <Carousel/>
            </div>
            <div>Kinga & Kamil</div>
            <p>Bieremy se ślub 9 października 2021 </p>
            <p>Więcej szczegółów w sekcji ceremonia</p>
        </div>
    </>
)

export default about