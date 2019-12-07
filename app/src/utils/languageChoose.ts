import {LANGUAGE} from '../store/reducers/procedureReducer';

export enum TEXT_FRAGMENTS {
    PICK_PROCEDURE= "pickProcedure",
}

const LANGUAGE_TEXTS = {
    [TEXT_FRAGMENTS.PICK_PROCEDURE] : {
        [LANGUAGE.DE] : "Produkt auswählen",
        [LANGUAGE.EN] : "Choose Product",
    }
}


export function getLangText(name: TEXT_FRAGMENTS, language: LANGUAGE) {
    return LANGUAGE_TEXTS[name][language]
}
