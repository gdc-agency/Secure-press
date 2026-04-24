import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import {Link} from "react-router-dom";
import NavMenuItems from "../header/NavMenuItems";

const ResponsiveMenu = ({menus}) => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar} />
            </Link>
            <nav>
                <ul className={sidebar ? "mobile-nav-menu active" : "mobile-nav-menu"}>
                    <li className='navbar-close'>
                        <Link to="#" className='menu-close-bars'>
                            <AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    <NavMenuItems menus={menus}/>
                </ul>
            </nav>
        </>
    );
};

export default ResponsiveMenu;

