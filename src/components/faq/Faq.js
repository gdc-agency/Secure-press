import React from "react";
import FaqCard from "./FaqCard";
import getFaqData from "./FaqCardData.json";
import QuoteForm from "../quote-form/QuoteForm";


const Faq = () => {
    return (
        <>
            {/* Appointment Area Start*/}
            <div className="appoitment-area"
                 style={{ backgroundImage:`url(/images/testimonial_bg.jpg)` }}
            >
                <div className="images-overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="faq-sec">
                                {
                                    getFaqData.map((item) => (
                                    <FaqCard
                                    key={item.id}
                                    data={item}
                                    />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <QuoteForm/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Appointment Area End */}
        </>

    );
}

export default Faq;