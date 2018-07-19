import {combineReducers} from 'redux';
import searchReducer from './searchReducer.js';
import pageReducer from './pageReducer';

export default combineReducers({
    search:searchReducer,
    page:pageReducer
});