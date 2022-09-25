import {UPDATE_STATE} from "../types/newsTypes";
import axios from "axios";
import {API_PATH, TOKEN} from "../../tools/constants";
import {toast} from "react-toastify";

export function updateState(data){
    return {
        type: UPDATE_STATE,
        payload: data
    }
}


// Uz News Actions
export const saveNewsUz = (values) => (dispatch, getState) => {
    if (getState().news.selectedItem.id){
        axios.put(API_PATH + "uz/news/" + getState().news.selectedItem.id, values)
            .then((res) => {
                dispatch(getNewsUz());
                dispatch(updateState({open: false, selectedItem: {}}));
            })
            .catch((error) => {
                toast.error(error);
            })
    } else {
        axios.post(API_PATH + "uz/news", values)
            .then((res) => {
                dispatch(getNewsUz());
                dispatch({open: false});
                toast.success("Muvaffaqiyatli saqlandi!");
            })
            .catch((error) => {
                toast.error(error);
            })
    }
}

export const getNewsUz = () => (dispatch) => {
    axios.get(API_PATH + "uz")
        .then((res) => {
            dispatch(updateState({news: res.data.top}));
        })
}

export const deleteNewsUz = () => (dispatch, getState) => {
    console.log(getState())
    axios.delete(API_PATH + "uz/news" + getState().news.selectedIndex)
        .then((res) => {
            dispatch(getNewsUz());
            dispatch(updateState({selectedIndex: ''}))
            toast.success("Muvaffaqiyatli o'chirildi!");
        })
        .catch((error) => {
            toast.error(error);
        })
}

// Ru News Actions
export const saveNewsRu = (values) => (dispatch, getState) => {
    if (getState().news.selectedItem.id){
        axios.put(API_PATH + "ru/news/" + getState().news.selectedItem.id, values)
            .then((res) => {
                dispatch(getNewsRu());
                dispatch(updateState({open: false, selectedItem: {}}));
            })
            .catch((error) => {
                toast.error(error);
            })
    } else {
        axios.post(API_PATH + "ru/news", values)
            .then((res) => {
                dispatch(getNewsRu());
                dispatch({open: false});
                toast.success("Muvaffaqiyatli saqlandi!");
            })
            .catch((error) => {
                toast.error(error);
            })
    }
}

export const getNewsRu = () => (dispatch) => {
    axios.get(API_PATH + "ru")
        .then((res) => {
            dispatch(updateState({newsRu: res.data.top}));
        })
}

export const deleteNewsRu = () => (dispatch, getState) => {
    console.log(getState())
    axios.delete(API_PATH + "ru/news" + getState().news.selectedIndex)
        .then((res) => {
            dispatch(getNewsRu());
            dispatch(updateState({selectedIndex: ''}))
            toast.success("Muvaffaqiyatli o'chirildi!");
        })
        .catch((error) => {
            toast.error(error);
        })
}

// En News Actions
export const saveNewsEn = (values) => (dispatch, getState) => {
    if (getState().news.selectedItem.id){
        axios.put(API_PATH + "en/news/" + getState().news.selectedItem.id, values)
            .then((res) => {
                dispatch(getNewsEn());
                dispatch(updateState({open: false, selectedItem: {}}));
            })
            .catch((error) => {
                toast.error(error);
            })
    } else {
        axios.post(API_PATH + "en/news", values)
            .then((res) => {
                dispatch(getNewsEn());
                dispatch({open: false});
                toast.success("Muvaffaqiyatli saqlandi!");
            })
            .catch((error) => {
                toast.error(error);
            })
    }
}

export const getNewsEn = () => (dispatch) => {
    axios.get(API_PATH + "en")
        .then((res) => {
            dispatch(updateState({newsEn: res.data.top}));
        })
}

export const deleteNewsEn = () => (dispatch, getState) => {
    axios.delete(API_PATH + "en/news" + getState().news.selectedIndex)
        .then((res) => {
            dispatch(getNewsEn());
            dispatch(updateState({selectedIndex: ''}))
            toast.success("Muvaffaqiyatli o'chirildi!");
        })
        .catch((error) => {
            toast.error(error);
        })
}