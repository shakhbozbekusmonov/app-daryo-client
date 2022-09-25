import {LANGUAGE} from "../tools/constants";
import {uz} from "./Uz";
import {ru} from "./Ru";
import {en} from "./En";

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
    return getLanguage() === "uz" ?
        uz[word] :
        getLanguage() === "ru" ?
            ru[word] :
            en[word]
};