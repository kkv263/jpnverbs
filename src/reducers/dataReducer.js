import { SET_DATA } from '../action/types';

const initialState = {
  entryData: []
};
  
  export default function(state = initialState, action) {
    switch(action.type){
  
        case SET_DATA:
        return {
          ...state,
          entryData:action.payload
        }
  
        default:
        return state;
    }
  }