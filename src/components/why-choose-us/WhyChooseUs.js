import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import Data from "../why-choose-us/WhyChooseUsCardData.json";
import SectionTitle from "../section-title/SectionTitle";

const WhyChooseUs = () => {
    return (
        <>
            {/* Why Choose Us Start */}
            <div className="why-choose why-choos-bg"
                 style={{ backgroundImage:`url(/images/why-choose-bg.jpg)` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" />
                        <div className="col-md-6 why-choose-us-before">
                            <div className="row">
                                <SectionTitle
                                    title="<span>Why</span> Choose Us"
                                />
                                {Data.slice(0, 4).map((item) => (
                                    <WhyChooseUsCard
                                    key={item.id}
                                    data={item}
                                    />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose Us End */}
        </>
    );
}

export default WhyChooseUs;