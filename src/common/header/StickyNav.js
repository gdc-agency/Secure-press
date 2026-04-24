import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import NavMenu from "./NavMenu";
import ResponsiveMenu from "../responsive-menu/ResponsiveMenu";
import primaryMenus from "./NavMenuData.json"

const StickyNav =() => {

    const {menus} = primaryMenus;

    const [scrolled,setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 100 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    }, [])

    let x=['mnmenu-sec'];
    if(scrolled){
        x.push('sticky_menu');
    }
    return (
        <>
            <div className={x.join(" ")}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 nav-menu">
                            <div className="col-xs-5 col-sm-4 col-md-3">
                                <div className="logo">
                                    <Link to={"/"}><img src={`/images/logo2.png`} alt="Logo"/></Link>
                                </div>
                            </div>

                            <div className="col-xs-7 col-sm-8 col-md-9">
                                <div className="responsive-nav-menu">
                                    <ResponsiveMenu menus={menus}/>
                                </div>
                                <div className="menu">
                                    <nav id="main-menu" className="main-menu">
                                        <NavMenu menus={menus}/>
                                    </nav>
                                    <div className="menu-icon">
                                        <div className="site-search">
                                            <i className="fa fa-search"/>
                                            <div className="search-forum">
                                                <form action="#">
                                                    <input placeholder="Search For Site" type="text"/>
                                                    <input type="submit" value="Go"/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default StickyNav;