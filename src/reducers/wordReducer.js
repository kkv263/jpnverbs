import { SET_ENTRY, SET_ALT_ENTRY } from '../action/types'

const initialState = {
    entry: {
            forms:[],
            info: [],
            freq: 0,
            hdict: [],
            kdict: [],
          },
    altEntry: []
  };
  
export default function(state = initialState, action) {
  switch(action.type){
  
      case SET_ENTRY:
      return {
        ...state,
        entry:action.payload
      } 

      case SET_ALT_ENTRY:
      return {
        ...state,
        altEntry:action.payload
      }  

      default:
        return state;
    }
  }