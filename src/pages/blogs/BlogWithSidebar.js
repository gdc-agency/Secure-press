import React from "react";
import getPostData from "../../components/post/PostTypeOneData.json";
import PostTypeOne from "../../components/post/PostTypeOne";
import Layout from "../../common/Layout";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import BlogSidebar from "../../components/blog-sidebar/BlogSidebar";
import {Helmet} from "react-helmet";

const BlogWithSidebar = () => {
    return (
        <>
            <Helmet>
                <title>Blog With Sidebar || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle="Blog Page 1"
                    rootPath="/"
                    parentPath="Home"
                    currentPath="Blog Page 1"
                />
                {/* post Section Start */}
                <div className="blog-sec pt-100 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    {
                                        getPostData.map((item) => (
                                            <PostTypeOne
                                                key={item.id}
                                                data={item}
                                                className='col-md-6 col-sm-6'
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Sidebar Section Start */}
                            <BlogSidebar/>
                            {/* Sidebar Section End */}
                        </div>
                    </div>
                </div>
                {/* post Section End */}
            </Layout>
        </>
    );
}

export default BlogWithSidebar;