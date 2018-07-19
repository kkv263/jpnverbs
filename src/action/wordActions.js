import { SET_ENTRY, SET_ALT_ENTRY } from './types';


export const setEntry = (entry) => dispatch => {
  let entryClone = Object.assign({},entry);
  dispatch({
    type:SET_ENTRY,
    payload: entryClone 
  }); 
}

export const setAltEntry = (kdict, hdict) => dispatch => {
  let altEntry = kdict.slice(1).concat(hdict.slice(1))

  dispatch({
    type:SET_ALT_ENTRY,
    payload: altEntry
  }); 
}