import { combineReducers } from "redux";
import geoDataReducer from "../Reducers/geoDataReducer";

const rootReucer = combineReducers ({
    geoData: geoDataReducer,
})

export default rootReucer