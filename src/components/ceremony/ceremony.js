import React from 'react'

import Map from './map/map'

import styles from './ceremony.module.scss'

const ceremony = () => (
    <>
        <div className={styles.ceremonyText}>
            <p>Ceremonia odbędzie się dnia 9 października 2021 o godzinie 14:00 w kościele parafialnym w Stróżnej </p>
            <p>Przyjęcie weselne odbędzie się bezpośrednio po mszy ślubnej w restauracji Stary Dworzec</p>
            <Map/>
        </div>
        {/*<div className={styles.ceremonyWrapper}>Informacje o ceremonii</div>*/}
    </>
)

export default ceremony