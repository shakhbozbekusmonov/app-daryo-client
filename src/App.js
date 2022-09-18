import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import {PrivateRoutes} from "./utils/PrivateRoutes";
import AdminMenus from "./pages/AdminPages/AdminMenus";
import AdminNews from "./pages/AdminPages/AdminNews";

const App = () => {
    return (
        <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route element={<PrivateRoutes/>}>
                  <Route path="admin/menus" element={<AdminMenus/>}/>
                  <Route path="admin/news" element={<AdminNews/>}/>
              </Route>
              <Route path='login' element={<Login/>}/>
          </Routes>
          <ToastContainer/>
        </Router>
    );
};

export default App;