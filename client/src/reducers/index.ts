import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';

// TODO remove any
export default combineReducers<any>({
    item: itemReducer,
    error: errorReducer,
});
