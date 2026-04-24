import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube, FaSkype } from 'react-icons/fa';

const TeamMembersCard = ({data}) => {
    return (
        <>
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="team-member">
                    <div className="team-thumb">
                        <img src={`/images/team-members/${data.image}`} alt={data.name} />
                        <div className="team-overlay">
                            <ul>
                                {data.fbLink ?
                                    <li>
                                        <a href={data.fbLink}>
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    : null
                                }
                                {data.twitterLink ?
                                    <li>
                                        <a href={data.twitterLink}>
                                            <FaTwitter/>
                                        </a>
                                    </li>
                                    : null
                                }
                                {data.linkedinLink ?
                                <li>
                                    <a href={data.linkedinLink}>
                                        <FaLinkedin />
                                    </a>
                                </li>
                                    : null
                                }
                                {data.skypeLink ?
                                <li>
                                    <a href={data.skypeLink}>
                                        <FaSkype />
                                    </a>
                                </li>
                                    : null
                                }
                                {data.youtubeLink ?
                                <li>
                                    <a href={data.youtubeLink}>
                                        <FaYoutube />
                                    </a>
                                </li>
                                : null
                                }
                            </ul>
                        </div>
                    </div>
                    <h2>{data.name}</h2>
                    <h3>{data.designation}</h3>
                </div>
            </div>
        </>
    );
}

export default TeamMembersCard;