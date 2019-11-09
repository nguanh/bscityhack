import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    item: itemReducer,
    error: errorReducer,
});
