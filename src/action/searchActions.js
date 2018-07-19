import { CHANGE_FORM_VALUE, CHANGE_QUERY_VALUE } from './types';

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