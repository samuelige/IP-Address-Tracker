import { point } from 'leaflet';
import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux'
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import location from '../images/icon-location.svg'
import './Map.scss'


const Map = () => {
    const geoData = useSelector(state => state.geoData.geodata);
   console.log (geoData)
   const position = [51.505, -0.09]
   let myIcon = L.icon({
       iconUrl: location,
       iconSize: [25, 41],
       iconAnchor: [12.5, 41],
       popupAnchor: [0, -41]
       
   });
    return (
        geoData ? 
            <MapContainer className="map" center={position} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* {
                    geoData.map(item => {
                        const point = [item['point']['coordinates'][1], item['point']['coordinates'][0]]

                        return (
                            <Marker position = {point} key={item['ip']}>
                                <Popup>
                                </Popup>
                            </Marker>
                        )
                    })
                    
                    
                } */}
                <Marker position={position} icon={myIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                
            </MapContainer>
        :
        "Data is loading..."
    )
}

export default Map
