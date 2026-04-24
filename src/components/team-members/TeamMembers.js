import React from "react";
import TeamMembersCard from "./TeamMembersCard";
import getTeamMembersData from "./TeamMembersCardData.json";
import SectionTitle from "../section-title/SectionTitle";

const TeamMembers = () => {

    const data = getTeamMembersData.slice(0, 4);

    return (
        <>
            {/* Team Section Start */}
            <div className="team-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <SectionTitle
                                title="<span>Our Expert </span>Employees"
                                content="<p> Lorem ipsum dolor sit amet, pellentesque enim lorem quis vivamus amet.</p>"
                            />
                        </div>
                    </div>
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
        </>
    );
}

export default TeamMembers;