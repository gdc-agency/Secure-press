import React from "react";

const FaqCard = ({data}) => {
    return (
        <>
            <div className="faq-single">
                <div className="media">
                    <div className="media-left">
                        <div className="icon">
                            <img src={`/images/icon/${data.icon}`} alt={data.title} />
                        </div>
                    </div>
                    <div className="media-body">
                        <h2>{data.title}</h2>
                        <p>{data.content}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaqCard;