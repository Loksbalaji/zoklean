import React, { Component } from "react";
import classnames from "classnames";
import Slider from "react-slick";

import style from "./testimonial.css";

const _img_per1 = require("../../../images/Home/testimonial-user1.png");
const _img_per2 = require("../../../images/Home/testimonial-user2.png");
const _img_star = require("../../../images/Home/star.png");
const _img_cir = require("../../../images/Home/pagination-circle-empty.png");

class Testimonial extends Component {
  constructor() {
    super();
  }

  render() {
    var settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={_img_cir} />
          </a>
        );
      },
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false,
      adaptiveHeight: true
    };
    return (
      <div>
        <div className="row testimonial-wrapper">
          <div className="container">
            <div className="col-12">
              <div className="testi-title">
                <h3>See what people say about us...</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="testimonial-box-holder font-avenir-roman">
                <Slider {...settings}>
                  <div className="testi-box">
                    <div className="col-12 row1">
                      <div className="col-3">
                        <img src={_img_per1} alt="" />
                      </div>
                      <div className="col-9 name-rating-sec">
                        <p className="name-and-rating">
                          <span className="user-name">Danny Vaughn</span>
                          <span className="rating">
                            <i>
                              <img src={_img_star} alt="" />
                            </i>
                            <i>
                              <img src={_img_star} alt="" />
                            </i>
                            <i>
                              <img src={_img_star} alt="" />
                            </i>
                            <i>
                              <img src={_img_star} alt="" />
                            </i>
                          </span>
                        </p>
                        <p>587 Ratke Manors Apt. 980, ZIP 57895</p>
                      </div>
                    </div>
                    <div className="col-12 row2">
                      <p>
                        From ads that dance or sing to MTV-like commercials,
                        online advertisers are now using a new type of
                        technology called “rich media” to attract consumers.
                      </p>
                    </div>
                  </div>

                  <div className="testi-box">
                    <div className="col-12 row1">
                      <div className="col-3">
                        <img src={_img_per2} alt="" />
                      </div>
                      <div className="col-9 name-rating-sec">
                        <p className="name-and-rating">
                          <span className="user-name">Danny Vaughn</span>
                          <span className="rating">
                            <i>
                              <img src={_img_star} alt="" />
                            </i>
                            <i>
                              <img src={_img_star} alt="" />
                            </i>
                            <i>
                              <img src={_img_star} alt="" />
                            </i>
                            <i>
                              <img src={_img_star} alt="" />
                            </i>
                          </span>
                        </p>
                        <p>587 Ratke Manors Apt. 980, ZIP 57895</p>
                      </div>
                    </div>
                    <div className="col-12 row2">
                      <p>
                        From ads that dance or sing to MTV-like commercials,
                        online advertisers are now using a new type of
                        technology called “rich media” to attract consumers.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
