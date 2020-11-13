import { FormType } from "../Action/ActionTypes/FormType";
import { FORM_STATE, SEARCH_STATE } from "../State/formState"

const formReducer = (state = FORM_STATE, action) => {
    switch(action.type) {
        case FormType.CHANGE:
            return {
                ...state,
                ipAddress: action.payload,
            };
        
        default:
            return state;
            
       
    }
}

const searchReducer = (searchState = SEARCH_STATE, action ) => {
    switch(action.type) {
        case FormType.SUBMIT:
            return {
                ...searchState,
                search: action.payload,
            }
    }
    return searchState
}

export {formReducer, searchReducer}