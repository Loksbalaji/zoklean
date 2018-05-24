import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

const _img_hamburger = require("../../images/hamburgur.png");
const _img_zoklean_logo = require("../../images/final-logo-copy.png");

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="header-outer-wrapper violet-gradientbg-light">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-7 disp-vertical-center">
                <div className="zoklean-logo-holder">
                  <div className="hamburger-menu">
                    <img src={_img_hamburger} alt="" />
                  </div>
                  <div className="logo-holder">
                    <img src={_img_zoklean_logo} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-5">
                <div className="header-nav-links-holder">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <a className="loginLink" href="/login">
                        Login
                      </a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <a className="signupLink" href="/signup">
                        Sign Up
                      </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      <span>
                        <a className="greenBut" href="/contractor-signup">
                          Become a contractor
                        </a>
                      </span>
                    </div>
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

export default Header;
