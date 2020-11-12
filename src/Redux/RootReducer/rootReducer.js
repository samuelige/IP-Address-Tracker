import { combineReducers } from "redux";
import {formReducer, searchReducer} from "../Reducers/formReducer";
import geoDataReducer from "../Reducers/geoDataReducer";

const rootReucer = combineReducers ({
    geoData: geoDataReducer,
    formData: formReducer,
    search: searchReducer
})

export default rootReucer