import React from "react";
import Slider from "react-slick";
import "../../assets/css/slick.css";
import "../../assets/css/slick-theme.css";
import getSliderData from "./HeroSliderData.json"
import {HeroSliderConfig} from "../../includes/scripts";

const HeroSlider = () => {

    return (
      <>
          {/* Slider Section Start */}
          <div className="slider index2">
              <div className="all-slide" >
                  {/*>*/}
                    <Slider
                        {...HeroSliderConfig}
                    >
                        {
                            getSliderData.map((data, i) => (
                                <div key={i}>

                                    <div className="single-slide"
                                        style={{ backgroundImage:`url(/images/slider/${data.image})` }}
                                    >
                                        <div className="slider-overlay"/>
                                        <div className="slider-text">
                                            <div className="slider-wraper">
                                                <h1 dangerouslySetInnerHTML={{__html:data.title}}></h1>
                                                <p>{data.content}</p>
                                                <ul>
                                                    <li><a href={data.btnLinkOne}>{data.btnTextOne}</a></li>
                                                    <li><a href={data.btnLinkTwo}>{data.btnTextTwo}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                  {/*</OwlCarousel>*/}
              </div>
          </div>
          {/* Slider Section End */}
      </>
    );
}

export default HeroSlider;