import {combineReducers} from 'redux';
import searchReducer from './searchReducer';
import pageReducer from './pageReducer';
import dataReducer from './dataReducer';
import wordReducer from './wordReducer';

export default combineReducers({
    search:searchReducer,
    page:pageReducer,
    data:dataReducer,
    word:wordReducer,
});