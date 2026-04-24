import React from 'react';
import getTeamMembersData from "../components/team-members/TeamMembersCardData.json";
import TeamMembersCard from "../components/team-members/TeamMembersCard";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Layout from "../common/Layout";
import {Helmet} from "react-helmet";

const TeamMembersPage = () => {

    const data = getTeamMembersData.slice(0, 16);

    return (
        <>
            <Helmet>
                <title>Employees || Security Company React  Template</title>
                <meta name="description" content="Securepress - Security Company React  Template" />
                <meta name="keywords" content="safety, bodyguard, cctv, emergency, Event Security, fire, investigation, investigator, officer, protection, security, Security Camera, Care, Parking  Security" />
            </Helmet>
            <Layout>
                <Breadcrumb
                    pageTitle="Our Employees"
                    rootPath="/"
                    parentPath="Home"
                    currentPath="Our Employees"
                />
                {/* Team Section Start */}
                <div className="team-sec pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            {
                                data.map((item) => (
                                    <TeamMembersCard
                                        key={item.id}
                                        data={item}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Team Section End */}
            </Layout>
        </>
    );
};

export default TeamMembersPage;