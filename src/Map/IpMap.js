import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import mapboxgl from 'mapbox-gl';
import './IpMap.scss'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtdWVsaWdlIiwiYSI6ImNrZmliNWV4NjAyM2MzM21weGwzamJ4eWMifQ.4BmTZvA4puEeO3mjXa9dyQ';
// console.log(mapboxgl);

const IpMap = () => {
   const mapRef = useRef(null)
   const geoData = useSelector(state => state.geoData.geodata);
//    console.log(geoData.location.lng, geoData.location.lat)
// geoData.location?.lng || null
// geoData.location?.lat || null
   const [state, setState] = useState({
    lng: geoData.location?.lng,
    lat: geoData.location?.lat,
    zoom: 12
   })
   
   useEffect(() => {
        const coords = [state.lng, state.lat]
        console.log(state.lng, state.lat);
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: coords, // starting position [lng, lat]
            zoom: state.zoom,
            });
        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, "top-left");
    
        map.addControl(
            new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: true,
            })

        ); 
        let marker = new mapboxgl.Marker() //To display location Icon
        .setLngLat([state.lng, state.lat])
        .addTo(map);

        
    
        new mapboxgl.Marker({ position: coords, map });
    }, [state.lng, state.lat, geoData])

    return (
        geoData ? 
            <div ref={mapRef} className='mapContainer'></div>
        :
        "Data is loading..."
    )
}

export default IpMap
