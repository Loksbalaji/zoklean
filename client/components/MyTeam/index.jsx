import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

const _img_promobanner = require("../../images/Team/team-banner.png");
const _img_worldmap = require("../../images/contact/worldmap.jpg");

class MyTeam extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="team-page-wrapper">
          <div className="row justify-content-center">
            <div className="banner-img">
              <img src={_img_promobanner} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row team-content-holder justify-content-center">
                <div className="team-tit">
                  <h1>Contact Us</h1>
                </div>
                <div className="worldmap-image">
                  <img src={_img_worldmap} alt="" />
                </div>
                <div className="contact-inquiry-form-wrapper">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <input
                        type="text"
                        className=""
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <input type="text" className="" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <input
                        type="text"
                        className=""
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <input type="text" className="" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <textarea />
                    </div>
                  </div>
                  <div className="row-submit-cta row justify-content-center">
                    <a href="javascript:" className="submit-cta" title="">
                      Send
                    </a>
                  </div>
                </div>
              </div>

              <div className="row c24x7-wrapper violet-gradientbg-light">
                <div className="col-sm-12 col-md-6 col-lg-7">
                  <div className="row justify-content-center">
                    <p className="c24x7-txt">24x7 Customer Support</p>
                    <p className="para">
                      A Zoklean representative is available to chat!
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <a className="tel-no" href="javascript:">
                    (800) 331-7527
                  </a>
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

export default MyTeam;
