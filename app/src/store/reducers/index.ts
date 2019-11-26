import { combineReducers } from 'redux';
import itemReducer, {ItemState} from './itemReducer';
import errorReducer, {IErrorState} from './errorReducer';

interface IState {
    item: ItemState,
    error: IErrorState,
}

export default combineReducers<IState>({
    item: itemReducer,
    error: errorReducer,
});
