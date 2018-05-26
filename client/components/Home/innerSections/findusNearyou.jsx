import React, { Component } from "react";
import classnames from "classnames";

import findusNearyou from "./findusNearyou.css";

const _img_location1 = require("../../../images/Home/bitmap_8.png");
const _img_location2 = require("../../../images/Home/bitmap_9.png");
const _img_location3 = require("../../../images/Home/bitmap_10.png");

class FindusNearyou extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="meetPartners-outer-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="nearyou-heading-holder">
                  <h3>You can find us near you...</h3>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <input
                  type="text"
                  className="pinCodeBox"
                  placeholder="Enter Pincode"
                />
              </div>
            </div>
            <div className="row violet-gradientbg-light fus-content-wrapper">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="container">
                  <div className="locationImageHolder">
                    <img className="img-fluid" src={_img_location1} alt="" />
                  </div>
                  <h4>La Jolla</h4>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="container">
                  <div className="locationImageHolder">
                    <img className="img-fluid" src={_img_location2} alt="" />
                  </div>
                  <h4>Del Mar</h4>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="container">
                  <div className="locationImageHolder">
                    <img className="img-fluid" src={_img_location3} alt="" />
                  </div>
                  <h4>Downtown</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindusNearyou;
