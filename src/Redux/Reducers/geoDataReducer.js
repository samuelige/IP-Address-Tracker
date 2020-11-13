import LoadGeoDataType from "../Action/ActionTypes/LoadGeoDataType"

import GeoData_State from "../State/geoData"

const geoDataReducer = (geoState= GeoData_State, action) => {
    switch(action.type) {
        case LoadGeoDataType.LOAD_GEO_DATA:
            return {
                ...geoState,
                geodata: action.payload,
            }
    }
    return geoState
}

export default geoDataReducer
