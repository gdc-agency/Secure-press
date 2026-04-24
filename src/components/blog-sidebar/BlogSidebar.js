import React from 'react';
import CategoryWidgets from "../widgets/CategoryWidgets";
import RecentPostWidgets from "../widgets/RecentPostWidgets";
import TagWidgets from "../widgets/TagWidgets";
import SearchWidgets from "../widgets/SearchWidgets";

const BlogSidebar = () => {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar">
                    <SearchWidgets/>
                    <CategoryWidgets/>
                    <RecentPostWidgets/>
                    <TagWidgets/>
                </div>
            </div>
        </>
    );
};

export default BlogSidebar;