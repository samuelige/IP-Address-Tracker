import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form/Form'
import './App.css'



const App = () => {
  const geoDataState = useSelector(state => state.geoData);
  console.log(geoDataState, 'geodata-geo')
  // console.log(geoDataState.geodata.ip)
  // console.log(geoDataState.geodata.location.city)
  // console.log(geoDataState.geodata.location.country)
  // console.log(geoDataState.geodata.location.geonameId)
  // console.log(geoDataState.geodata.location.region)
  // console.log(geoDataState.geodata.location.timezone)
  // console.log(geoDataState.geodata.isp)
  return (
    <>
      <div className="titleInputContainer">
        <h3>IP Address Tracker</h3>
        <Form />
        <div className="inputResult">
          <div className="ipAddress">
            <h4>IP ADDRESS</h4>
            <h3>{geoDataState.geodata.ip || null}</h3>
          </div>
          <div className="location">
            <h4>LOCATION</h4>
          <h3>{geoDataState.geodata.location?.city || null}, <br/>
            {geoDataState.geodata.location?.region || null},  
            "{geoDataState.geodata.location?.country || null}" <br/>
            {geoDataState.geodata.location?.geonameId || null}
          </h3>
          </div>
          <div className="timezone">
            <h4>TIMEZONE</h4>
            <h3>{geoDataState.geodata.location?.timezone || null}</h3>
          </div>
          <div className="isp">
            <h4>ISP</h4>
            <h3>{geoDataState.geodata.isp || 'nothing'}</h3>
          </div>
        </div>
      </div>
      <div className="map"></div>
    </>
  )
}

export default App
