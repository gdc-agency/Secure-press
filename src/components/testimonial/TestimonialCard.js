import React from 'react';

const TestimonialCard = ({data}) => {
    return (
        <>
            <div className="single-testimonial2">
                <p>{data.content}</p>
                <div className="testimonial2">
                    <div className="inner">
                        <div className="client-info">
                            <h2>{data.name}</h2>
                            <h3>{data.designation}</h3>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="testimonial2-client-img">
                            <img src={`/images/testimonials/${data.image}`} alt={data.name} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;