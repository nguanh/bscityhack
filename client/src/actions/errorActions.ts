import { ERROR_ACTION_TYPES } from './types';
import {IErrorAction} from '../reducers/errorReducer';

// RETURN ERRORS
export const returnErrors = (msg: string, status: string, id = null): IErrorAction => {
    return {
        type: ERROR_ACTION_TYPES.GET_ERRORS,
        payload: { msg, status, id }
    };
};

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: ERROR_ACTION_TYPES.CLEAR_ERRORS
    };
};
