import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    //@ts-ignore
    item: itemReducer,
    error: errorReducer,
});
