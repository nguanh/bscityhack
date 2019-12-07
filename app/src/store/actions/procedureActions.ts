import { PROCEDURE_ACTION_TYPES } from './types';
import {LANGUAGE} from '../reducers/procedureReducer';

export const changeLanguage = (language: LANGUAGE) => (dispatch) => {
    dispatch({
        type: PROCEDURE_ACTION_TYPES.CHOOSE_LANGUAGE,
        payload: language,
    })
};
