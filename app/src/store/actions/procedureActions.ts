import { PROCEDURE_ACTION_TYPES } from './types';
import {LANGUAGE} from '../reducers/procedureReducer';

export const changeLanguage = (language: LANGUAGE) => (dispatch) => {
    dispatch({
        type: PROCEDURE_ACTION_TYPES.CHOOSE_LANGUAGE,
        payload: language,
    })
};


export const selectChecklistItem = (item: string) => (dispatch) => {
    dispatch({
        type: PROCEDURE_ACTION_TYPES.SELECT_CHECKLIST_ITEM,
        payload: item,
    })
};


export const addFormField = (item: {key: string, value: string}) => (dispatch) => {
    dispatch({
        type: PROCEDURE_ACTION_TYPES.ADD_FORM_FIELD,
        payload: item,
    })
};
