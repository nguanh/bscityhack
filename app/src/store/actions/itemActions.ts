import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, EDIT_ITEM} from './types';
import { returnErrors } from './errorActions';
import {getServerUrl} from '../../utils/urlResolver';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(getServerUrl("/api/items"))
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
        .catch( err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addItem = item => (dispatch) => {
    axios
        .post(getServerUrl(`/api/items`), item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteItem = id => (dispatch) => {
    axios
        .delete(getServerUrl(`/api/items/${id}`))
        .then(() =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const editItem = (id, value) => (dispatch) => {
    axios
        .patch(getServerUrl(`/api/items/${id}/${value}`))
        .then(res =>
            dispatch({
                type: EDIT_ITEM,
                payload: res.data,
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};
