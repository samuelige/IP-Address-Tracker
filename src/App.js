import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form/Form'
import './App.css'
// import Map from './Map/Map'
import IpMap from './Map/IpMap'



const App = () => {
  const geoDataState = useSelector(state => state.geoData);

  return (
    <div className="container">
      <div className="titleInputContainer">
        <h3>IP Address Tracker</h3>
        <Form />
        <div className="inputResult">
          <div className="result">
            <h4 className="ipAddress">IP ADDRESS</h4>
            <h3>{geoDataState.geodata.ip || null}</h3>
          </div>
          <div className="result">
            <h4 className='location'>LOCATION</h4>
          <h3>{geoDataState.geodata.location?.city || null}, {" "} 
            {geoDataState.geodata.location?.region || null},  {" "} 
            "{geoDataState.geodata.location?.country || null}" {" "} 
            {geoDataState.geodata.location?.geonameId || null}
          </h3>
          </div>
          <div className="result">
            <h4 className="timezone">TIMEZONE</h4>
            <h3>{geoDataState.geodata.location?.timezone || null}</h3>
          </div>
          <div className="ispResult">
            <h4 className="isp">ISP</h4>
            <h3>{geoDataState.geodata.isp || 'nothing'}</h3>
          </div>
        </div>
      </div>
      <div className="map">
        {/* <Map /> */}
        <IpMap />
      </div>
    </div>
  )
}

export default App
