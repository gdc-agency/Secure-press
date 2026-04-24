import React from "react";
import {Link} from "react-router-dom";

const ServicesTypeOne = ({data}) => {
    return (
        <>
            <div className="col-md-4 col-sm-6">
                <div className="service2-inner">
                    <div className="media">
                        <div className="media-left">
                            <div className="service2-icon">
                                <img src={`/images/icon/${data.icon}`} alt={data.title} />
                            </div>
                        </div>
                        <div className="media-body">
                            <div className="service2-details">
                                <h2>
                                    <Link to={`/service-details/${data.id}`}>
                                        {data.title}
                                    </Link>
                                </h2>
                                <p>{data.excerpt}</p>
                                <Link to={`/service-details/${data.id}`}>{data.btnText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesTypeOne;