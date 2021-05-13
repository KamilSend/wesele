import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import a from '../../../assets/a.jpg'
import b from '../../../assets/b.jpg'
import c from '../../../assets/c.jpg'

const carousel = () => (
    <>
        <Carousel  autoPlay interval='2000' infiniteLoop="true" showStatus={false} showIndicators={true} showThumbs={false} showArrows={true}>
            <div>
                <img src={a} />
            </div>
            <div>
                <img src={b} />
            </div>
            <div>
                <img src={c} />
            </div>
        </Carousel>
    </>
)

export default carousel