import React, { useEffect, useState } from "react";


const ScrollToTop  = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton && (
                <button onClick={scrollToTop} id="scrollUp" className="back-to-top">
                    <i className="fa fa-angle-up"/>
                </button>
            )}
        </>
    );
};

export default ScrollToTop ;