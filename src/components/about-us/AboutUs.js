import React from "react";
import CountUp from 'react-countup';
import SectionTitle from "../section-title/SectionTitle";

const CounterItem = [
    {
        number: "250",
        title: "Project Done"
    },
    {
        number: "280",
        title: "happy client"
    },
    {
        number: "240",
        title: "Our employees"
    }
];

const AboutUs = () => {
    return (
        <>
            {/* About Start */}
            <div className="about-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="about-desc">
                                <SectionTitle
                                title="<span>About</span> Our Company"
                                content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"
                                />
                                <div className="about-countup">
                                    {
                                        CounterItem.map((data, i) => (
                                            <div key={i} className="counting-inner">
                                                <div className="countup-text">
                                                    <h2 className="counter"><CountUp end={data.number} duration={2.5} delay={0.9} start={0} /></h2>
                                                    <h4>{data.title}</h4>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="about-us-img">
                                <img src={`/images/about.jpg`} alt="About Thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    );
}

export default AboutUs;