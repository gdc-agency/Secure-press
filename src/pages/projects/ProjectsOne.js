import React from 'react';
import Layout from "../../common/Layout";
import ProjectTypesOneCard from "../../components/projects/projects-one/ProjectTypesOneCard";
import getProjectData from "../../components/projects/ProjectsData.json";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import {Helmet} from "react-helmet";

const ProjectsOne = () => {
    return (
        <>
            <Helmet>
                <title>Projects One || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle="Projects 3 column Gallery"
                    rootPath="/"
                    parentPath="Home"
                    currentPath="Projects 1"
                />
                {/* Project Section Start */}
                <div className="project-sec pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            {
                                getProjectData.map((item) => (
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
            </Layout>
        </>
    );
};

export default ProjectsOne;