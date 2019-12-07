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
}

const initialState: IProcedureState = {
    language: LANGUAGE.DE,
    procedure: PROCEDURE.UNKNOWN,
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
        default:
            return state;
    }
}
