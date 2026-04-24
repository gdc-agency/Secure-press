import React from 'react';
import getPostData from "../post/PostTypeOneData.json";
import {Link} from "react-router-dom";

const RecentPostWidgets = () => {
    return (
        <>
            <div className="widget-two">
                <h1>Recent Post</h1>
                <div className="all_r_pst">
                    {
                        getPostData.slice(0, 3).map((item) => (
                            <div key={item.id} className="media">
                                <div className="relative-post">
                                    <div className="relative-post-thumb">
                                        <img src={`/images/blogs/blog-one/${item.image}`} alt={item.title} />
                                    </div>
                                    <div className="media-body">
                                        <div className="single_r_dec">
                                            <h3>
                                                <Link to={`/blog-details/${item.id}`}>{item.title}</Link>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <span className="meta">
                                                        <i className="fa fa-calendar" /> {item.date}
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="meta">
                                                        <i className="fa fa-pencil" />
                                                        {item.categories}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) )
                    }


                </div>
            </div>
        </>
    );
};

export default RecentPostWidgets;