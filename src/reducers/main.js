import {combineReducers} from 'redux';
import searchReducer from './searchReducer.js';
import pageReducer from './pageReducer';
import dataReducer from './dataReducer';

export default combineReducers({
    search:searchReducer,
    page:pageReducer,
    data:dataReducer
});