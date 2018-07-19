import { SET_DATA } from './types';



export const setData = (data) => dispatch => {

  let newData = data === null ? [] : data

  dispatch({
      type:SET_DATA,
      payload: newData
  });
}
