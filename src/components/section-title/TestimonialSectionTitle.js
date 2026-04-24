import React from 'react';

const TestimonialSectionTitle = ({subTitle, title, content, btnText, btnLink}) => {
    return (
        <>
            <div className="testimonial-text">
                <span className="tst-sbtitle">{subTitle}</span>
                <div className="sec-title">
                    <h1 dangerouslySetInnerHTML={{__html: title}}/>
                </div>
                <div dangerouslySetInnerHTML={{__html: content}}/>
                {btnText && btnLink ? (<a href={btnLink}>{btnText}</a>) : null}
            </div>
        </>
    );
};

export default TestimonialSectionTitle;