import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";
import {LANGUAGE} from "../../tools/constants";
import {getLanguage, getText} from "../../locales";

const Header = () => {
    const changeLanguage = (e)=> {
        localStorage.setItem(LANGUAGE, e.target.value);
        document.location.reload(true);
        let loc = "https://daryoapp.netlify.app/";
        window.location.replace(loc + e.target.value);
    }
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/"><img src="/assets/images/logo.svg" alt="Daryo"/></Link>
                <ul className="nav">
                    <li className="nav-item"><a href="" className="nav-link">{getText("mahalliy")}</a></li>
                    <li className="nav-item"><a href="" className="nav-link">{getText("dunyo")}</a></li>
                    <li className="nav-item"><a href="" className="nav-link">{getText("pul")}</a></li>
                    <li className="nav-item"><a href="" className="nav-link">{getText("madaniyat")}</a></li>
                    <li className="nav-item"><a href="" className="nav-link">{getText("layfstayl")}</a></li>
                    <li className="nav-item"><a href="" className="nav-link">{getText("sport")}</a></li>
                    <li className="nav-item"><a href="" className="nav-link">{getText("multi")}</a></li>
                    <li className="nav-item"><a href="" className="nav-link">{getText("kolumn")}</a></li>
                </ul>
                <select onChange={changeLanguage}>
                    <option value="uz" selected={getLanguage() === "uz"}>Uzbek</option>
                    <option value="ru" selected={getLanguage() === "ru"}>Russian</option>
                    <option value="en" selected={getLanguage() === "en"}>English</option>
                </select>
            </nav>
        </header>
    );
};

export default Header;