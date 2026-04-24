import React from "react";
import { FaCalendar, FaPencilAlt} from "react-icons/fa";
import {Link} from "react-router-dom";

const PostTypeOne = ({data , className}) => {
    return (
        <>
            <div className={`${className ? className : "col-md-4 col-sm-6"}`}>
                <div className="media">
                    <div className="single-post">
                        <div className="blog-thumb">
                            <img src={`/images/blogs/blog-one/${data.image}`} alt={data.title} />
                            <Link to={`/blog-details/${data.id}`}>{data.btnText}</Link>
                        </div>
                        <div className="media-body">
                            <div className="single-post-desc">
                                <h2>
                                    <Link to={`/blog-details/${data.id}`}>{data.title}</Link>
                                </h2>
                                <p>{data.content}</p>
                                <div className="post-date">
                                    <ul>
                                        <li>
                                            <span className="meta">
                                               <FaCalendar
                                               style={{
                                                   color:'#fab909',
                                                   marginRight:'5px',
                                               }}
                                               />
                                                {data.date}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="meta">
                                               <FaPencilAlt
                                                   style={{
                                                       color:'#fab909',
                                                       marginRight:'5px',
                                                   }}
                                               />
                                                {data.categories}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostTypeOne;