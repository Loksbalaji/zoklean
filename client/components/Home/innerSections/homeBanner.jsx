import React, { Component } from "react";
import classnames from "classnames";

import style from "./homeBanner.css";
import { CSSTransitionGroup } from "react-transition-group";

const _img_homeBannerBg = require("../../../images/Home/bitmap.png");
const _img_mapPin = require("../../../images/bitmap_6.png");
const _img_greenTick = require("../../../images/bitmap_5.png");

const _style_promoBannerBgImg = {
  backgroundImage: "url(" + _img_homeBannerBg + ")"
};

class HomeBanner extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <div className="container-fluid md-sm-full-width nopadding">
            <div
              className="row homebanner-wrapper"
              style={_style_promoBannerBgImg}
            >
              <div className="col-sm-12 col-md-12 col-lg-7 nopadding">
                &nbsp;
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5 nopadding">
                <CSSTransitionGroup
                  transitionName="zkSlideIn"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <div className="banner-booking-holder">
                    <div className="container">
                      <div className="booking-title">
                        <p>
                          Zipc<img src={_img_mapPin} alt="" />de
                        </p>
                      </div>
                      <div className="booking-input-area">
                        <input
                          type="text"
                          placeholder="Enter your zipcode"
                          className=""
                        />
                        <div className="booking-hl-txt">
                          <span className="icon">
                            <img src={_img_greenTick} alt="" />
                          </span>
                          <span className="txt">
                            Service is available in your area. Do you want to
                            book a Cleaning Service.
                          </span>
                        </div>
                        <div className="button-holder">
                          <button className="booking-submit-butt">BOOK</button>
                          <span className="">
                            Need assitance feel free to call us -{" "}
                            <span className="orange-txt">(800) 331-7527</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransitionGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
