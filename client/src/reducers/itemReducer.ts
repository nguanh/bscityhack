import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    ITEMS_LOADING,
    ACTION_TYPES, EDIT_ITEM
} from '../actions/types';
import {editItem} from '../actions/itemActions';

export interface IItem {
    _id: string,
    name: string,
}

export interface ItemState {
    loading: boolean;
    items: IItem[];
}

const initialState: ItemState = {
    items: [],
    loading: false
};
export interface IAction {
    type: ACTION_TYPES,
    payload: any,
}

// TODO payload aufräumen

export default function(state: ItemState = initialState, action: IAction): ItemState {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case EDIT_ITEM:
            const items = state.items.filter(item => item._id !== action.payload._id);
            return {
                ...state,
                items: [action.payload, items]
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
