import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import styles from './map.module.scss'

L.Icon.Default.imagePath='img/'


const map = () => (
    <div className={styles.leafletContainer}>
        <MapContainer center={[49.6799913, 21.0761146,12]} zoom={12} scrollWheelZoom={false} style={{width: '80%',height: '70vh'}}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.6936986, 21.1952099,98]}>
                <Tooltip permanent offset={[-85, 35]}>Sala weselna</Tooltip>
            </Marker>
            <Marker position={[49.66181526, 20.9975048,17]}>
                <Tooltip permanent offset={[-85, 35]}>Dom Pana Młodego</Tooltip>
            </Marker>
            <Marker position={[49.7078366, 20.9995245,47]}>
                <Tooltip permanent offset={[-85, 35]}>Dom Panny Młodej</Tooltip>
            </Marker>
            <Marker position={[49.6963588, 20.9798291,189]}>
                <Tooltip permanent offset={[-85, 35]}>Kościół</Tooltip>
            </Marker>
        </MapContainer>
    </div>

)

export default map