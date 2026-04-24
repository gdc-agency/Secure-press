import React from 'react';
import Slider from "react-slick";
import "../../assets/css/slick.css";
import "../../assets/css/slick-theme.css";
import getClientLogo from "./ClientLogoData.json";
import {ClientLogoCarouselConfig} from "../../includes/scripts";


const ClientLogo = () => {

    return (
        <>
            <div className="all-patner-sec">
                <div className="all-patner">
                    <div className="container">
                        <Slider
                            {...ClientLogoCarouselConfig}
                        >
                            {
                                getClientLogo.map((data, i) => (
                                    <div key={i}>
                                        <div className="single-patner">
                                            <img src={`/images/client-logo/${data.image}`} alt={data.title} />
                                        </div>

                                    </div>


                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientLogo;