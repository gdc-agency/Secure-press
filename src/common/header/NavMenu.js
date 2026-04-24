import React from "react";
import NavMenuItems from "./NavMenuItems";

const NavMenu = ({menus}) => {


    // console.log(menus);

    return (

        <>

            <ul>
                <NavMenuItems menus={menus}/>
            </ul>
        </>
    );
}

export default NavMenu;