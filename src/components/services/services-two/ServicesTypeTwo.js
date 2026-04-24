import React from 'react';
import {Link} from "react-router-dom";

const ServicesTypeTwo = ({data}) => {
    return (
        <>
            <div className="col-md-4 col-sm-6">
                <div className="service-inner">
                    <div
                        className="service-img"
                        style={{
                            backgroundImage: `url(/images/services/service-one/${data.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center"
                        }}
                    ></div>
                    <div className="service-details">
                        <h2>
                            <Link to={`/service-details-two/${data.id}`}>{data.title}</Link>
                        </h2>
                        <p>{data.excerpt}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesTypeTwo;