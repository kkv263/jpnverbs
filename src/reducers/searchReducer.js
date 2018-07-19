import { CHANGE_FORM_VALUE, CHANGE_QUERY_VALUE, TOGGLE_LOADING } from '../action/types';

const initialState = {
    searchValue: '',
    queryValue: '',
    loading: true,
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

        case TOGGLE_LOADING:
        return {
          ...state,
          loading: action.payload
        }
  
        default:
        return state;
    }
  }