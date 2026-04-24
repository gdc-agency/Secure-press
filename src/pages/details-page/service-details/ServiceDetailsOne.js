import React from "react";
import {useParams} from "react-router-dom";
import getServiceData from "../../../components/services/services-one/ServicesOneData.json";
import Layout from "../../../common/Layout";
import Breadcrumb from "../../../common/breadcrumb/Breadcrumb";
import ServicesTypeOne from "../../../components/services/services-one/ServicesTypeOne";
import SectionTitle from "../../../components/section-title/SectionTitle";
import ClientLogo from "../../../components/client-logo/ClientLogo";
import {Helmet} from "react-helmet";

const ServiceDetailsOne = () => {

    const {id} = useParams();
    const serviceData = getServiceData.filter( service => service.id === parseInt(id) )[0];

    return (
        <>
            <Helmet>
                <title>{serviceData.title} || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle={serviceData.title}
                    rootPath="/"
                    parentPath="Home"
                    currentPath={serviceData.title}
                />
                {/* Service Details Section Start */}
                <div className="about-us-sec pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="abt-img">
                                    <img src={`/images/services/service-one/service-details/${serviceData.image}`} alt={serviceData.title} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="abt-lft">
                                    <h2>Details of {serviceData.title}</h2>
                                    <div dangerouslySetInnerHTML={{__html:serviceData.details}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service Details Section End */}
                {/* Service Start */}
                <div className="service2-sec pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <SectionTitle
                                    title="<span>Related</span> Service"
                                    content="<p>Lorem ipsum dolor sit amet, pellentesque enim lorem quis vivamus amet.</p>"
                                />
                            </div>
                        </div>
                        <div className="row">
                            {
                                getServiceData.slice(0, 3).map((item) => (
                                    <ServicesTypeOne
                                        key={item.id}
                                        data={item}
                                    />
                                ) )
                            }
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* All Patner Section Start */}
                <ClientLogo />
                {/* All Patner Section End */}
            </Layout>
        </>
    );
};

export default ServiceDetailsOne;