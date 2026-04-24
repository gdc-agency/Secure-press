import React from 'react';
import {Link} from "react-router-dom";

const PostTypeTwo = ({data}) => {
    return (
        <>
            {/* Blog Section Start */}
            <div className="media">
                <div className="single-post">
                    <div className="blog-classic-img">
                        <img src={`/images/blogs/blog-two/${data.image}`} alt={data.title} />
                        <div className="blog-classic-overlay">
                            <ul>
                                <li>
                                    <Link to={`/blog-details/${data.id}`}>
                                        <i className="fa fa-unlink" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="media-body">
                        <div className="single-post-text">
                            <h2>
                                <Link to={`/blog-details/${data.id}`}>
                                    {data.title}
                                </Link>
                            </h2>
                            <div className="post-info">
                                <div className="post-meta">
                                    <ul>
                                        <li>
                                            <span>post by</span>
                                            <span className="meta">David Max</span>
                                        </li>
                                        <li>
                                            <span>post on</span>
                                            <span className="meta">06 may 17</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p> {data.content}</p>
                            <Link to={`/blog-details/${data.id}`}>
                                {data.btnText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog Section End */}
        </>
    );
};

export default PostTypeTwo;