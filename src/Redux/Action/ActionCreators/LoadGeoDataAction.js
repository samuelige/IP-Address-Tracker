import { useDispatch } from "react-redux";
import LoadGeoDataType from "../ActionTypes/LoadGeoDataType";

const LoadGeoData = () => ({
    type: LoadGeoDataType.LOAD_GEO_DATA
});


const APP_IP = `${search}`;
const APP_KEY = 'at_nNg78XsxROQptBqQqi6oCjug5rRKs';
const API_URL = `https://geo.ipify.org/api/v1?apiKey=${APP_KEY}&ipAddress=${search}`

const dispatch = useDispatch()

const fetchData = async () => {
const geodata = await fetch(API_URL)
.then(res => res.json())
.then(data => dispatch(LoadGeoData(data)));

  }



// const LoadGeo = (search) => ({
//     type: LoadGeoDataType.LOAD_GEO_DATA,
//     search
// });

// export const LoadGeoDataUrl = (search) => async (dispatch) => {
    
// };

export {LoadGeoData, fetchData}