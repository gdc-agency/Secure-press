import React from 'react';
import Layout from "../common/Layout";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import AboutUs from "../components/about-us/AboutUs";
import Testimonial from "../components/testimonial/Testimonial";
import TeamMembers from "../components/team-members/TeamMembers";
import ClientLogo from "../components/client-logo/ClientLogo";
import {Helmet} from "react-helmet";

const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
           <Layout>
               <Breadcrumb
                   pageTitle="About Us Page"
                   rootPath="/"
                   parentPath="Home"
                   currentPath="About Us"
               />
               <AboutUs/>
               <Testimonial/>
               <TeamMembers/>
               <ClientLogo/>
           </Layout>
        </>
    );
};

export default AboutUsPage;