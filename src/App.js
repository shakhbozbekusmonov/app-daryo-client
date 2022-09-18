import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Login from "./pages/Login/Login";
import AdminMenus from "./pages/AdminPages/AdminMenus";

const App = () => {
    return (
        <Router>
          <Routes>
              <Route path='login' element={<Login/>}/>
              <Route path="admin/menus" element={<AdminMenus/>}/>
          </Routes>
          <ToastContainer/>
        </Router>
    );
};

export default App;