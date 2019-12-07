import { combineReducers } from 'redux';
import itemReducer, {ItemState} from './itemReducer';
import errorReducer, {IErrorState} from './errorReducer';
import procedureReducer, {IProcedureState} from './procedureReducer';

interface IState {
    item: ItemState,
    error: IErrorState,
    procedure: IProcedureState,
}

export default combineReducers<IState>({
    item: itemReducer,
    error: errorReducer,
    procedure: procedureReducer,
});
