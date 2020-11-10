
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const APP_IP = '8.8.8.8';
  const APP_KEY = 'at_nNg78XsxROQptBqQqi6oCjug5rRKs';
  const API_URL = `https://geo.ipify.org/api/v1?apiKey=${APP_KEY}&ipAddress=${APP_IP}`
  
  const [geoLocationData, setGeoLocationData] = useState([]);
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const geodata = await fetch(API_URL)
    .then(res => res.json())
    .then(data => setGeoLocationData(data))
  }

  console.log(geoLocationData);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
