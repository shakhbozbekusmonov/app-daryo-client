import {UPDATE_STATE} from "../types/newsTypes";
import axios from "axios";
import {API_PATH, TOKEN} from "../../tools/constants";

export function updateState(data){
    return {
        type: UPDATE_STATE,
        payload: data
    }
}


export const saveNews = (values) => (dispatch) => {
    axios.post(API_PATH + "uz/news", values)
        .then((res) => {
            console.log(res);
        })
}