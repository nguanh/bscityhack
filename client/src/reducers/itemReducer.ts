import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    ITEMS_LOADING, IAction
} from '../actions/types';

export interface IItem {
    _id: string,
    name: string,
}

export interface ItemState {
    readonly loading: boolean;
    readonly items: ReadonlyArray<IItem>
}

const initialState: ItemState = {
    items: [],
    loading: false
};


export default function(state: ItemState = initialState, action: IAction) {
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
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
