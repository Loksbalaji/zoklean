import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

const _img_promobanner = require("../../images/careers/careers-banner.jpg");

class Careers extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="contact-page-wrapper">
          <div className="row justify-content-center">
            <div className="banner-img">
              <img src={_img_promobanner} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row contact-content-holder justify-content-center">
                <div className="contact-tit">
                  <h1>Build Together, Grow Together</h1>
                </div>
                <div className="contact-inquiry-form-wrapper">
                  <div className="row">
                    <div className="col-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Careers;
