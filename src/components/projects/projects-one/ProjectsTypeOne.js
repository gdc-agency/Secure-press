import React from "react";
import ProjectTypesOneCard from "./ProjectTypesOneCard";
import Data from "../ProjectsData.json";
import SectionTitle from "../../section-title/SectionTitle";

const ProjectsTypeOne = () => {
    return (
        <>
            {/* Project Section Start */}
            <div className="project-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <SectionTitle
                                title="<span>Our Gallery </span>Photo"
                                content="<p> Lorem ipsum dolor sit amet, pellentesque enim lorem quis vivamus amet.</p>"
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            Data.slice(0, 6).map((item) => (
                            <ProjectTypesOneCard
                            key={item.id}
                            data={item}
                            extraClass={'col-xs-6 col-sm-4 col-md-4'}
                            />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Project Section Start */}
        </>
    );
}

export default ProjectsTypeOne;