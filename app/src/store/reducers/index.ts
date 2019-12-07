import { combineReducers } from 'redux';
import itemReducer, {ItemState} from './itemReducer';
import errorReducer, {IErrorState} from './errorReducer';
import procedureReducer, {IProcedureState} from './procedureReducer';

export interface IGlobalState {
    item: ItemState,
    error: IErrorState,
    procedure: IProcedureState,
}

export default combineReducers<IGlobalState>({
    item: itemReducer,
    error: errorReducer,
    procedure: procedureReducer,
});
