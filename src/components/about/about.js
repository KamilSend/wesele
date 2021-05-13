import React from 'react'

import Carousel from './carousel/carousel'

import styles from './about.module.scss'

const about = () => (
    <>
        <div className={styles.about}>
            <div className={styles.carouselWrapper}>
                <Carousel/>
            </div>
            <div>podstawowe informacje</div>
        </div>
    </>
)

export default about