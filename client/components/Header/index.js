import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

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
              <div className="col-sm-12 col-md-6 col-lg-7">
                <div className="zoklean-logo-holder" />
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
                        <a className="greenBut" href="">
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
