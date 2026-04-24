import React from "react";

const WhyChooseUsCard = ({data}) => {
    return (
        <>
            <div className="col-md-6 col-sm-6">
                <div className="why-choose-item">
                    <div className="why-choose-icon">
                        <img src={`/images/icon/${data.icon}`} alt={data.title} />
                    </div>
                    <div className="media-body">
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChooseUsCard;