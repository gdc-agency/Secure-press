import React from 'react';
import ServicesTypeTwo from "../../components/services/services-two/ServicesTypeTwo";
import servicesData from "../../components/services/services-two/ServicesTwoData.json";
import Layout from "../../common/Layout";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import {Helmet} from "react-helmet";

const ServicesTwo = () => {
    return (
        <>
            <Helmet>
                <title>Service Two || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle="Service Page 2"
                    rootPath="/"
                    parentPath="Home"
                    currentPath="Service 2"
                />
                {/* Service Start */}
                <div className="service-sec pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            {
                                servicesData.map((item) => (
                                    <ServicesTypeTwo
                                        key={item.id}
                                        data={item}
                                    />
                                ) )
                            }
                        </div>
                    </div>
                </div>
                {/* Service End */}
            </Layout>
        </>
    );
};

export default ServicesTwo;