
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [geoLocationData, setGeoLocationData] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  const APP_IP = `${search}`;
  const APP_KEY = 'at_nNg78XsxROQptBqQqi6oCjug5rRKs';
  const API_URL = `https://geo.ipify.org/api/v1?apiKey=${APP_KEY}&ipAddress=${search}`
  
  

  useEffect(() => {
    loadData();
  }, [search]);

  const loadData = async () => {
    // if(query === ''){
    //   let API_URL = `https://geo.ipify.org/api/v1?apiKey=${APP_KEY}`
    // } else {
    //  let API_URL = `https://geo.ipify.org/api/v1?apiKey=${APP_KEY}&ipAddress=${query}`
    // }
    const geodata = await fetch(API_URL)
    .then(res => res.json())
    .then(data => setGeoLocationData(data));

  }

  console.log(geoLocationData);


  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
    </div>
  );
}

export default App;
