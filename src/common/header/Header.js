import React from "react";
import StickyNav from "./StickyNav";
import Topbar from "./Topbar";
const Header = () => {
    return (
        <>
            {/* Header Start */}
            <header>
                <div className="hd-style1">
                    <Topbar/>
                    {/* header Nav Menu Start */}
                    <StickyNav/>
                    {/* header Nav Menu End */}

                </div>
            </header>
            {/* Header End */}
        </>
    );
}

export default Header;