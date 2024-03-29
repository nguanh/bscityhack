import {GET_ERRORS, CLEAR_ERRORS, ERROR_ACTION_TYPES} from '../actions/types';

export interface IErrorState {
    msg: any,
    status: string,
    id: string,
}

const initialState: IErrorState = {
    msg: {},
    status: null,
    id: null
};


export interface IErrorAction {
    type: ERROR_ACTION_TYPES,
    payload: IErrorState
}


export default function(state: IErrorState = initialState, action: IErrorAction) {
    switch(action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
        default:
            return state;
    }
}
