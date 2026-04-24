import React from 'react';
import Layout from "../common/Layout";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactUsForm from "../components/contact-us-form/ContactUsForm";
import {Helmet} from "react-helmet";

const ContactInfo = [
    {
        title: "Phone",
        content: "0123456789<br />0987654321"
    },
    {
        title: "e-mail",
        content: "yourmail@gmail.com<br />demomail@gmail.com"
    },
    {
        title: "address",
        content: "united states california<br />united states california"
    }
];


const ContactUs = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle="Contact page"
                    rootPath="/"
                    parentPath="Home"
                    currentPath="Contact Us"
                />
                {/* Contact Page Section Start */}
                <div className="contact-page-sec pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="contact-field">
                                    <h2>Write Your Message</h2>
                                    <ContactUsForm/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {
                                    ContactInfo.map((data, i) => (
                                        <div key={i} className="contact-info">
                                            <div className="contact-info-item">
                                                <div className="contact-info-text">
                                                    <h2>{data.title}</h2>
                                                    <span dangerouslySetInnerHTML={{__html: data.content}}/>

                                                    {/*<span>{data.desc}</span>*/}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Page Section End */}
            </Layout>
        </>
    );
};

export default ContactUs;