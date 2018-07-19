import { CHANGE_FORM_VALUE, CHANGE_QUERY_VALUE } from '../action/types';

const initialState = {
    searchValue: '',
    queryValue: '',
  };
  
  export default function(state = initialState, action) {
    switch(action.type){
  
        case CHANGE_FORM_VALUE:
        return {
          ...state,
          searchValue:action.payload
        }

        case CHANGE_QUERY_VALUE:
        return {
          ...state,
          queryValue:action.payload
        }
  
        default:
        return state;
    }
  }