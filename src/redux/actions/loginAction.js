import axios from "axios";
import {toast} from "react-toastify";
import {API_PATH, TOKEN} from "../../tools/constants";

export const login = (values) => (dispatch) => {
   const data = new FormData();
   data.append("username", values.username);
   data.append("password", values.password);
   axios.post(API_PATH + "login", data)
       .then((res) => {
          localStorage.setItem(TOKEN, res.data.token_type + " " + res.data.access_token);
          dispatch({type: ""});
       })
}