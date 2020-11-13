// import { useDispatch } from "react-redux";
import LoadGeoDataType from "../ActionTypes/LoadGeoDataType";

const LoadGeoData = (payload) => ({
    type: LoadGeoDataType.LOAD_GEO_DATA,
    payload: payload
});





export {LoadGeoData}