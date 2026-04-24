import React from 'react';
import ServicesTypeOne from "../services/services-one/ServicesTypeOne";
import serviceData from "../services/services-one/ServicesOneData.json";
import SectionTitle from "../section-title/SectionTitle";

const HomeServices = () => {
    const data = serviceData.slice(0, 6);
    return (
        <>
            {/* Service Start */}
            <div className="service2-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <SectionTitle
                                title="What We <span>Offer</span> Here"
                                content="<p>Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer hendrerit, enim varius enim, tellus tincidunt tellus est sed enim varius enim, tellus tincidunt tellus est sedLorem ipsum dolor sit amet, luctus posuere semper felis consectetuer hendrerit, enim varius enim, tellus tincidunt tellus est sed enim varius enim, tellus tincidunt tellus est sed</p>"
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.map((item) => (
                                <ServicesTypeOne
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    );
};

export default HomeServices;