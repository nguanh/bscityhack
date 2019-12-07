import {PROCEDURE_ACTION_TYPES } from '../actions/types';

export enum LANGUAGE {
    DE = 0,
    EN = 1,
}

export enum PROCEDURE {
    UNKNOWN = "Unbekannt",
    ANMELDUNG = "Anmeldung",
    DUMMY = "Käse backen",
}

export interface IProcedureState {
    language : LANGUAGE,
    procedure: PROCEDURE,
    checklistItems : string[],
    formField: any,
}

const initialState: IProcedureState = {
    language: LANGUAGE.DE,
    procedure: PROCEDURE.UNKNOWN,
    checklistItems: [],
    formField: {}

};
export interface IAction {
    type: PROCEDURE_ACTION_TYPES,
    payload: any,
}

export default function(state: IProcedureState = initialState, action: IAction): IProcedureState {
    switch (action.type) {
        case PROCEDURE_ACTION_TYPES.CHOOSE_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        case PROCEDURE_ACTION_TYPES.CHOOSE_PROCEDURE:
            return {
                ...state,
                procedure: state.procedure,
            };
        case PROCEDURE_ACTION_TYPES.SELECT_CHECKLIST_ITEM:
             const items = state.checklistItems;
             const newItem: string = action.payload;
             let updatedItems: string[];
             if (items.includes(newItem)) {
                 updatedItems = items.filter(item => item != newItem);
             } else {
                 updatedItems = [...items, newItem];
             }
             return {
                 ...state,
                 checklistItems: updatedItems
             };
        case PROCEDURE_ACTION_TYPES.ADD_FORM_FIELD:
            const formField = Object.assign({}, state.formField);
            const key = action.payload.key;
            const value = action.payload.value;
            formField[key] = value;

            return {
                ...state,
                formField: formField,
            }


        default:
            return state;
    }
}
