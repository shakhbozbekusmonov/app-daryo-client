import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import {PrivateRoutes} from "./utils/PrivateRoutes";
import AdminMenus from "./pages/AdminPages/AdminMenus";
import AdminNewsUz from "./pages/AdminPages/AdminNewsUz";
import AdminNewsRu from "./pages/AdminPages/AdminNewsRu";
import AdminNewsEn from "./pages/AdminPages/AdminNewsEn";
import Header from "./components/Header/Header";
import Uz from "./pages/Language/Uz";
import Ru from "./pages/Language/Ru";
import En from "./pages/Language/En";

const App = () => {
    return (
        <Router>
            <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route element={<PrivateRoutes/>}>
                  <Route path="admin/menus" element={<AdminMenus/>}/>
                  <Route path="admin/news/uz" element={<AdminNewsUz/>}/>
                  <Route path="admin/news/ru" element={<AdminNewsRu/>}/>
                  <Route path="admin/news/en" element={<AdminNewsEn/>}/>
              </Route>
              <Route path="uz" element={<Uz/>}/>
              <Route path="ru" element={<Ru/>}/>
              <Route path="en" element={<En/>}/>
              <Route path='login' element={<Login/>}/>
          </Routes>
          <ToastContainer/>
        </Router>
    );
};

export default App;