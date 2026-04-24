import React from "react";
import getPostData from "../post/PostTypeOneData.json";
import PostTypeOne from "../post/PostTypeOne";
import SectionTitle from "../section-title/SectionTitle";

const HomePost = () => {
    const Data = getPostData.slice(0, 3)
    return (
        <>
            {/* post Section Start */}
            <div className="blog-sec pt-100 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <SectionTitle
                                title="<span>Recent</span> News"
                                content="<p> Lorem ipsum dolor sit amet, pellentesque enim lorem quis vivamus amet.</p>"
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            Data.map((item) => (
                                <PostTypeOne
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* post Section End */}
        </>
    );
}

export default HomePost;