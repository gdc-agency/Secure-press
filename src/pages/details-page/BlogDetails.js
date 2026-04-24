import React from 'react';
import {useParams} from "react-router-dom";
import getPostData from "../../components/post/PostTypeOneData.json";
import Layout from "../../common/Layout";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import BlogSidebar from "../../components/blog-sidebar/BlogSidebar";
import {Helmet} from "react-helmet";

const BlogDetails = () => {

    const {id} = useParams();
    const postData = getPostData.filter( post => post.id === parseInt(id) )[0];

    return (
        <>
            <Helmet>
                <title>{postData.title} || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle={postData.title}
                    rootPath="/"
                    parentPath="Home"
                    currentPath={postData.title}
                />
                {/* Blog Details Section Start */}
                <div className="blog-classic-sec pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="media">
                                    <div className="single-post">
                                        <div className="blog-classic-img">
                                            <img src={`/images/blogs/blog-one/${postData.image}`} alt={postData.title} />
                                        </div>
                                        <div className="media-body">
                                            <div className="single-post-text">
                                                <h2>
                                                    {postData.title}
                                                </h2>
                                                <div className="post-info">
                                                    <div className="post-meta">
                                                        <ul>
                                                            <li>
                                                                <span>post Category</span>
                                                                <span className="meta">{postData.categories}</span>
                                                            </li>
                                                            <li>
                                                                <span>post on</span>
                                                                <span className="meta">{postData.date}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div dangerouslySetInnerHTML={{__html:postData.details}}></div>
                                            </div>
                                            <div className="post-share-link">
                                                <span>share</span>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-linkedin" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-google-plus" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="commentar-sec">
                                            <h2>2 comment</h2>
                                            <div className="media">
                                                <img
                                                    className="d-flex mr-3"
                                                    src={`/images/commentar_1.jpg`}
                                                    alt="Avatar"
                                                />
                                                <div className="media-body">
                                                    <h3 className="comment-author">
                                                        alex
                                                        <span className="replay-button">
                        <a href="#">reply</a>
                      </span>
                                                    </h3>
                                                    <h4 className="comment-time">12 h ago</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, luctus posuere semper felis
                                                        consectetuer hendrerit, enim varius enim, tellus tincidunt
                                                        tellus est sed mattis, libero elit mi suscipit. A nulla
                                                        venenatis
                                                    </p>
                                                    <div className="media mt-3">
                                                        <a className="d-flex pr-3" href="#">
                                                            <img src={`/images/commentar_2.jpg`} alt="Avatar" />
                                                        </a>
                                                        <div className="media-body">
                                                            <h3 className="comment-author">
                                                                david
                                                                <span className="replay-button">
                            <a href="#">reply</a>
                          </span>
                                                            </h3>
                                                            <h4 className="comment-time">11 h ago</h4>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, luctus posuere semper
                                                                felis consectetuer hendrerit, enim varius enim, tellus
                                                                tincidunt tellus est sed mattis, libero elit mi
                                                                suscipit. A nulla venenatis{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-field">
                                            <h2>add your comment</h2>
                                            <div className="col-md-12 message-input">
                                                <div className="single-input-field">
                                                    <textarea placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <div className="single-input-field">
                                                            <input type="text" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <div className="single-input-field">
                                                            <input type="email" placeholder="Your E-mail" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-input-fieldsbtn">
                                                <input type="submit" defaultValue="send now " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar Section Start */}
                            <BlogSidebar/>
                            {/* Sidebar Section End */}
                        </div>
                    </div>
                </div>
                {/* Blog Details Section End */}
            </Layout>
        </>
    );
};

export default BlogDetails;