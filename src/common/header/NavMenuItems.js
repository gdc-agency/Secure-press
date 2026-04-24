import React from 'react';
import {Link} from "react-router-dom";

const NavMenuItems = ({menus}) => {

    return (
        <>
            {
                menus.length > 0 && menus.map((menu) => (
                    <li key={menu.id}>
                        <Link to={menu.link}>{menu.text} {menu.dropdown.length > 0 && (<i className="fa fa-angle-down"/>)}</Link>

                        {
                            menu.dropdown.length > 0 && (
                                <ul>
                                    {
                                        menu.dropdown.map((dropdownMenu) => (
                                            <li key={dropdownMenu.id}><Link to={dropdownMenu.link}>{dropdownMenu.text}</Link></li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </li>
                ))
            }
        </>
    );
}

export default NavMenuItems;