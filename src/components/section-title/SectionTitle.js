import React from 'react';

const SectionTitle = ({title, content}) => {
    return (
        <>
            <div className="sec-title">
                <h1 dangerouslySetInnerHTML={{__html: title}}/>
                <div dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        </>
    );
};

export default SectionTitle;