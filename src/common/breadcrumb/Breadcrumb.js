import React from 'react';
import {Link} from "react-router-dom";

const Breadcrumb = ({pageTitle, rootPath, parentPath, currentPath }) => {
    return (
        <>
            <>
                {/* Page Heading Section Start */}
                <div className="pagehding-sec"
                     style={{ backgroundImage:`url(${process.env.PUBLIC_URL}/images/pg_hd.jpg)` }}
                >
                    <div className="pagehding-overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-heading">
                                    <h1 dangerouslySetInnerHTML={{__html: pageTitle}}/>
                                    <ul>
                                        <li>
                                            <Link to={`${rootPath}`} dangerouslySetInnerHTML={{__html: parentPath}}/>
                                        </li>
                                        <li
                                            style={{
                                                color:'#fab909'
                                            }}
                                            dangerouslySetInnerHTML={{__html: currentPath}} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Heading Section End */}
            </>

        </>
    );
};

export default Breadcrumb;