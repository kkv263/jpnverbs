import { CHANGE_ACTIVE_PAGE, RESET_PAGES, ADD_PAGE_ITEM, SET_RESULTS_LENGTH, SET_TOTAL_PAGES } from './types';

export const changeActivePage = (activePage) => dispatch => {
    dispatch({
        type: CHANGE_ACTIVE_PAGE,
        payload:activePage
    });
}

export const resetPages = () => dispatch => {
    dispatch({
        type: RESET_PAGES,
        payload:[]
    });
}

export const addPages = (pagesArray, newItem) => dispatch => {
    let newPagesArray = Object.assign(...[pagesArray], {[pagesArray.length]:newItem});
    dispatch({
        type: ADD_PAGE_ITEM,
        payload: newPagesArray
    });
}

export const setResultLength = (resultsLength) => dispatch => {

    dispatch({
        type:SET_RESULTS_LENGTH,
        payload: resultsLength
    });
}

export const setTotalPages = (totalPages) => dispatch => {

  dispatch({
      type:SET_TOTAL_PAGES,
      payload: totalPages 
  });
}

