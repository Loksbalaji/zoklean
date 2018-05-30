import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Menu from "./menu.jsx";

const _img_hamburger = require("../../images/hamburgur.png");
const _img_zoklean_logo = require("../../images/final-logo-copy.png");

let _style_menu_showhide = {
  display: "none"
};

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleNavMenuShow = this.handleNavMenuShow.bind(this);
    this.handleNavMenuClose = this.handleNavMenuClose.bind(this);

    this.state = {
      navMenuShow: false
    };
  }

  handleNavMenuClose() {
    this.setState({ navMenuShow: false });
  }

  handleNavMenuShow() {
    this.setState({ navMenuShow: true });
  }

  render() {
    return (
      <div className="pos-relative">
        <div className="header-outer-wrapper violet-gradientbg-light">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7 disp-vertical-center">
                <div className="zoklean-logo-holder">
                  <div className="hamburger-menu">
                    <a
                      href="javascript:"
                      className="menu-icon"
                      onClick={this.handleNavMenuShow}
                    >
                      <img src={_img_hamburger} alt="" />
                    </a>
                  </div>
                  <div className="logo-holder">
                    <a href="/">
                      <img src={_img_zoklean_logo} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="header-nav-links-holder">
                  <div className="row">
                    <div className="col-sm-0 col-md-0 col-lg-1" />
                    <div className="col-sm-4 col-md-4 col-lg-2">
                      <a className="loginLink" href="/login">
                        Login
                      </a>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3">
                      <a className="signupLink" href="/signup">
                        Sign Up
                      </a>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-6">
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
        <Menu dispProp={this.state.navMenuShow} />
      </div>
    );
  }
}

export default Header;
