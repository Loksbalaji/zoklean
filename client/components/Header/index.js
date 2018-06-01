import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import style from "./style.css";

import Menu from "./menu.jsx";

const _img_hamburger = require("../../images/hamburgur.png");
const _img_zoklean_logo = require("../../images/final-logo-copy.png");

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
        <div className="header-outer-wrapper violet-gradientbg-light font-avenir-roman">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-5 col-lg-6 disp-vertical-center d-xs-padding-right-none">
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
                  <Link to="/">
                    <img src={_img_zoklean_logo} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-7 col-lg-6 d-xs-padding-left-none">
              <div className="header-nav-links-holder">
                <div className="col-12">
                  <div className="row">
                    <Link
                      className="loginLink d-none d-sm-none d-md-block d-lg-block"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="signupLink d-none d-sm-none d-md-block d-lg-block"
                      to="/signup"
                    >
                      Sign Up
                    </Link>
                    <span>
                      <Link className="greenBut" to="/contractor-signup">
                        Become a contractor
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Menu
          dispProp={this.state.navMenuShow}
          callback={() => this.handleNavMenuClose()}
        />
      </div>
    );
  }
}

export default Header;
