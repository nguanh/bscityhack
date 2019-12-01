import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, EDIT_ITEM} from './types';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    console.log("get items02");
    const url = "http://192.168.2.107:5000/api/items";
    fetch(url, {
    })
        .then((result) => console.log("result", result))
        .catch((error) => console.log("error", error));

    console.log("loading2");

    axios
        .get(url)
        .then(res =>
            console.log({
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
        .post('/api/items', item)
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
        .delete(`/api/items/${id}`)
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
        .patch(`/api/items/${id}/${value}`)
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
