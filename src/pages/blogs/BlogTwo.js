import React from "react";
import getPostData from "../../components/post/PostTypeTwoData.json";
import PostTypeTwo from "../../components/post/PostTypeTwo";
import Layout from "../../common/Layout";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import BlogSidebar from "../../components/blog-sidebar/BlogSidebar";
import {Helmet} from "react-helmet";

const BlogTwo = () => {
    return (
        <>
            <Helmet>
                <title>Blog Two || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle="Blog Page 2"
                    rootPath="/"
                    parentPath="Home"
                    currentPath="Blog Page 2"
                />
                {/* Blog Section Start */}
                <div className="blog-classic-sec pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                {
                                    getPostData.map((item) => (
                                        <PostTypeTwo
                                            key={item.id}
                                            data={item}
                                        />
                                    ))
                                }
                            </div>
                            <BlogSidebar/>
                        </div>
                    </div>
                </div>
                {/* Blog Section End */}
            </Layout>
        </>
    );
}

export default BlogTwo;