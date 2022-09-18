import React from 'react';
import {Link} from "react-router-dom";
import '../sass/admin-layout.scss';
import {HiMenu, HiNewspaper} from "react-icons/hi";
import {AiFillSetting} from "react-icons/ai"
import {createBrowserHistory} from 'history';

const AdminLayout = (props) => {
    const history = createBrowserHistory({window});
    return (
        <div className="admin-layout">
            <div className="admin-layout-left">
                <div className="user-information d-flex justify-content-between align-items-center">
                        <img src="/assets/images/user.svg" alt="Shakhbozbek"/>

                        <div>
                            <h5 className="mb-0">Shakhbozbek Usmonov</h5>
                            <p className="mb-0">Administrator</p>
                        </div>
                </div>

                <div className="menus">
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/admin/menus" className={`${history.location.pathname === "/admin/menus" ? "active" : ""} d-flex align-items-center`}><HiMenu> </HiMenu>Menular</Link></li>
                        <li className="nav-item"><Link to="/admin/news" className={`${history.location.pathname === "/admin/news" ? "active" : ""} d-flex align-items-center`}><HiNewspaper/> Yangiliklar Uz</Link></li>
                        <li className="nav-item"><Link to="/admin/news" className={`${history.location.pathname === "/admin/" ? "active" : ""} d-flex align-items-center`}><HiNewspaper/> Yangiliklar Ru</Link></li>
                        <li className="nav-item"><Link to="/admin/news" className={`${history.location.pathname === "/admin/" ? "active" : ""} d-flex align-items-center`}><HiNewspaper/> Yangiliklar En</Link></li>
                        <li className="nav-item"><Link to="/admin/news" className={`${history.location.pathname === "/admin/" ? "active" : ""} d-flex align-items-center`}><HiNewspaper/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin/news" className={`${history.location.pathname === "/admin/" ? "active" : ""} d-flex align-items-center`}><HiNewspaper/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin/setting" className={`${history.location.pathname === "/admin/setting" ? "active" : ""} d-flex align-items-center`}><AiFillSetting/> Sozlamalar</Link></li>
                    </ul>
                </div>
            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;