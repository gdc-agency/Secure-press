import React from "react";
import Slider from "react-slick";
import "../../assets/css/slick.css";
import "../../assets/css/slick-theme.css";
import getTestimonialData from "./TestimonialData.json";
import TestimonialCard from "./TestimonialCard";
import TestimonialSectionTitle from "../section-title/TestimonialSectionTitle";
import {TestimonialCarouselConfig} from "../../includes/scripts";

const Testimonial = () => {
    return (
        <>
            {/* Testimonial Section Start */}
            <div className="testimonial-sec pt-100 pb-100"
                 style={{ backgroundImage:`url(/images/testimonial_bg.jpg)` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <TestimonialSectionTitle
                            subTitle="What's say about our client"
                            title="<span>Client</span> Review"
                            content="<p>Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer hendrerit, enim varius enim, tellus tincidunt tellus est sed enim varius enim, tellus tincidunt tellus est sed</p>"
                            btnText="See All"
                            btnLink="/"
                            />
                        </div>
                        <div className="col-md-8 no-padding">
                            <Slider
                                className="all-testimonial2"
                                {...TestimonialCarouselConfig}
                            >
                                {
                                    getTestimonialData.map((item) => (
                                        <TestimonialCard
                                        key={item.id}
                                        data={item}
                                        />
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial Section End */}
        </>
    );
}

export default Testimonial;