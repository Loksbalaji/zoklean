import React, { Component } from "react";
import classnames from "classnames";

import zokleanHighlightsCSS from "./zokleanHighlights.css";

const _img_cleanProfessional = require("../../../images/Signup/cleaningHighlights.jpg");
const _img_violetTick = require("../../../images/violetHighlightBullet.png");

class ZokleanHighlights extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="zkHighlightSectionOuterWrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 nopadding row-eq-height disp-vertical-center">
                <img src={_img_cleanProfessional} alt="" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 nopadding row-eq-height highlights-content-holder">
                <div className="container">
                  <div className="bullet-points">
                    <ul>
                      <li>
                        <i className="hl-buttet-icon">
                          <img src={_img_violetTick} alt="" />
                        </i>
                        Join for Free
                      </li>
                      <li>
                        <i className="hl-buttet-icon">
                          <img src={_img_violetTick} alt="" />
                        </i>
                        Gain customers
                      </li>
                      <li>
                        <i className="hl-buttet-icon">
                          <img src={_img_violetTick} alt="" />
                        </i>
                        Optimize Booking
                      </li>
                    </ul>
                    <button className="zkgreen-cta-butt">
                      Become a contractor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZokleanHighlights;
