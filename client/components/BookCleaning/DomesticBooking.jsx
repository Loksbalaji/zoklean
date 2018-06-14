import React, { Component } from "react";
import classnames from "classnames";

import style from "./domesticBooking.css";

const _img_bedicon_mainselec = require("../../images/cleaning/bed-cir.png");
const _img_bathicon_mainselec = require("../../images/cleaning/bath-cir.png");

const _img_addon_service_1 = require("../../images/cleaning/addon-service-1.png");
const _img_addon_service_2 = require("../../images/cleaning/addon-service-2.png");
const _img_addon_service_3 = require("../../images/cleaning/addon-service-3.png");
const _img_addon_service_4 = require("../../images/cleaning/addon-service-4.png");
const _img_addon_service_5 = require("../../images/cleaning/addon-service-5.png");
const _img_addon_service_6 = require("../../images/cleaning/addon-service-6.png");

class DomesticBooking extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="domestic-form-holder">
          <div className="col-12">
            <div className="input-row row">
              <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                <input type="text" placeholder="Enter Zip Code" />
              </div>
              <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                <select>
                  <option value="" disabled selected>
                    Select Type *
                  </option>
                </select>
              </div>
            </div>

            <div className="area-selection">
              <div className="row justify-content-center">
                <p className="prop-title">Property Details</p>
              </div>

              <div className="row justify-content-md-center">
                <div className="col-12">
                  <p className="ques justify-content-center row">
                    What is the square footage of your house?
                  </p>
                </div>
                <div className="col-12 col-sm-12 col-md-9 col-lg-6">
                  <select>
                    <option value="" disabled selected>
                      Select Square Footage
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row room-selection">
              <div className="row justify-content-md-center col-12">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <div className="no-of-rooms nos-bedroom row justify-content-md-center">
                    <div className="icon-holder">
                      <img src={_img_bedicon_mainselec} alt="" />
                    </div>
                    <p className="txt col-12">Bedroom</p>
                    <div className="selector-inc-dec col-12 nopadding">
                      <span className="dec">-</span>
                      <span className="disp">1</span>
                      <span className="inc">+</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <div className="no-of-rooms nos-bathroom row justify-content-md-center">
                    <div className="icon-holder">
                      <img src={_img_bathicon_mainselec} alt="" />
                    </div>
                    <p className="txt col-12">Bathroom</p>
                    <div className="selector-inc-dec col-12 nopadding">
                      <span className="dec">-</span>
                      <span className="disp">1</span>
                      <span className="inc">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="input-row row">
              <div className="row justify-content-center col-12">
                <p className="ques">Select Data and Time</p>
              </div>

              <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                <select>
                  <option value="" disabled selected>
                    Select Date
                  </option>
                </select>
              </div>
              <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                <select>
                  <option value="" disabled selected>
                    Select Time
                  </option>
                </select>
              </div>
            </div>

            <div className="input-row row">
              <div className="row justify-content-center col-12">
                <p className="ques">Rate the current condition of your house</p>
              </div>
            </div>

            <div className="input-row row">
              <div className="row justify-content-center col-12">
                <p className="ques">Add on services</p>
              </div>
              <div className="row justify-content-center col-12">
                <div className="add-on-services row col-12">
                  <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                    <div className="icon-holder">
                      <img src={_img_addon_service_1} alt="blinds" />
                    </div>
                    <p className="txt">Blinds</p>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                    <div className="icon-holder">
                      <img src={_img_addon_service_2} alt="Fridge" />
                    </div>
                    <p className="txt">Fridge</p>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                    <div className="icon-holder">
                      <img src={_img_addon_service_3} alt="Ovan" />
                    </div>
                    <p className="txt">Ovan</p>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                    <div className="icon-holder">
                      <img src={_img_addon_service_4} alt="Walls" />
                    </div>
                    <p className="txt">Walls</p>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                    <div className="icon-holder">
                      <img src={_img_addon_service_5} alt="Windows" />
                    </div>
                    <p className="txt">Windows</p>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                    <div className="icon-holder">
                      <img src={_img_addon_service_6} alt="Eco-Friendly" />
                    </div>
                    <p className="txt">Eco-Friendly</p>
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

export default DomesticBooking;
