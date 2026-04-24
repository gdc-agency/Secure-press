import React from 'react';
import {useParams} from "react-router-dom";
import getProjectData from "../../components/projects/ProjectsData.json";
import Layout from "../../common/Layout";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import {Helmet} from "react-helmet";

const ProjectDetails = () => {

    const {id} = useParams();
    const projectData = getProjectData.filter( project => project.id === parseInt(id) )[0];

    return (
        <>
            <Helmet>
                <title>{projectData.title} || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle={projectData.title}
                    rootPath="/"
                    parentPath="Home"
                    currentPath={projectData.title}
                />
                {/* Project Details Section Start */}
                <div className="about-us-sec pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="abt-img">
                                    <img src={`/images/projects/${projectData.image}`} alt={projectData.title} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="abt-lft">
                                    <h2>{projectData.title}</h2>
                                    <div dangerouslySetInnerHTML={{__html:projectData.details}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project Details Section End */}
            </Layout>
        </>

    );
};

export default ProjectDetails;