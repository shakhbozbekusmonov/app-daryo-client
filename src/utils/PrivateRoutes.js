import { Outlet, Navigate } from "react-router-dom";
import {TOKEN} from "../tools/constants";

export const PrivateRoutes = () => {
    return (
        localStorage.getItem(TOKEN) ? <Outlet/> : <Navigate to="/"/>
    )
}