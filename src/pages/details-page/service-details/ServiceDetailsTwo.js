import React from "react";
import {useParams} from "react-router-dom";
import serviceData from "../../../components/services/services-two/ServicesTwoData.json";
import Layout from "../../../common/Layout";
import Breadcrumb from "../../../common/breadcrumb/Breadcrumb";
import ServicesTypeTwo from "../../../components/services/services-two/ServicesTypeTwo";
import SectionTitle from "../../../components/section-title/SectionTitle";
import ClientLogo from "../../../components/client-logo/ClientLogo";
import {Helmet} from "react-helmet";
import BlogSidebar from "../../../components/blog-sidebar/BlogSidebar";

const ServiceDetailsTwo = () => {

    const {id} = useParams();
    const service = serviceData.filter( service => service.id === parseInt(id) )[0];

    return (
        <>
            <Helmet>
                <title>{service.title} || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle={service.title}
                    rootPath="/"
                    parentPath="Home"
                    currentPath={service.title}
                />
                {/* Service Details Section Start */}
                <div className="blog-classic-sec pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="media">
                                    <div className="single-post">
                                        <div className="blog-classic-img">
                                            <img src={`${process.env.PUBLIC_URL}/images/services/service-two/service-details/${service.image}`} alt={service.title} />
                                        </div>
                                        <div className="media-body">
                                            <div className="single-post-text">
                                                <h2>Service Details of {service.title}</h2>
                                                <div dangerouslySetInnerHTML={{__html:service.details}}></div>
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
                                        <div className="contact-field">
                                            <h2>Write your Review</h2>
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
                {/* Service Details Section End */}
                {/* Service Start */}
                <div className="service-sec pt-100 pb-100">
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
                                serviceData.slice(0, 3).map((item) => (
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
                {/* All Patner Section Start */}
                <ClientLogo />
                {/* All Patner Section End */}
            </Layout>
        </>
    );
};

export default ServiceDetailsTwo;