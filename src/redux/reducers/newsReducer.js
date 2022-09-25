import { UPDATE_STATE } from "../types/newsTypes";

const initialState = {
    open: false,
    newsUz: [],
    newsRu: [],
    newsEn: [],
    deleteModal: false,
    selectedIndex: '',
    selectedItem: {},
}

export const newsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_STATE){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}