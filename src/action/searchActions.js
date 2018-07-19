import { CHANGE_FORM_VALUE, CHANGE_QUERY_VALUE, TOGGLE_LOADING } from './types';

export const changeFormValue = (searchValue) => dispatch => {
    dispatch({
        type: CHANGE_FORM_VALUE,
        payload:searchValue
    });
}

export const changeQueryValue = (queryValue) => dispatch => {
    dispatch({
        type: CHANGE_QUERY_VALUE,
        payload:queryValue
    });
}

export const toggleLoading = (isLoading) => dispatch => {

    dispatch({
        type: TOGGLE_LOADING,
        payload: isLoading 
    })
}