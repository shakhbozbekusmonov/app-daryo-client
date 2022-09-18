import React from 'react';
import {Link} from "react-router-dom";
import '../sass/admin-layout.scss';
import {HiMenu, HiNewspaper} from "react-icons/hi";
import {AiFillSetting} from "react-icons/ai"

const AdminLayout = (props) => {
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
                        <li className="nav-item"><Link to="/admin/menus" className="d-flex align-items-center"><HiMenu> </HiMenu>Menular</Link></li>
                        <li className="nav-item"><Link to="/admin/news"><HiNewspaper/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin/news"><HiNewspaper/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin/news"><HiNewspaper/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin/news"><HiNewspaper/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin/news"><HiNewspaper/> Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin/setting"><AiFillSetting/> Sozlamalar</Link></li>
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