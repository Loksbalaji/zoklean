import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 nopadding">
              <img
                src="https://ae01.alicdn.com/kf/HTB1AGZVLFXXXXc0XFXXq6xXFXXXz/New-Arrival-2016-Summer-Fashion-OL-Styles-Work-Suits-With-Jackets-And-Skirt-Professional-Formal-Ladies.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="login-form-wrapper">
                <div className="row justify-content-center">
                  <h1 className="">Login to Zoklean</h1>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="loginForm-icon-holder">
                      <img
                        src="https://www.icon2s.com/img256/256x256-brown-woman-people-icon.png
                        "
                        alt=""
                      />
                    </div>
                    <p>Customer</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="loginForm-icon-holder">
                      <img
                        src="https://marketplace.canva.com/MAB60QJGqGg/1/thumbnail_large/canva-man-male-avatar-person-people-icon.-vector-graphic-MAB60QJGqGg.png"
                        alt=""
                      />
                    </div>
                    <p>Employee</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="loginForm-icon-holder">
                      <img
                        src="http://www.myiconfinder.com/uploads/iconsets/256-256-c606900441e4739c7105f6df0ec0d147-engineer.png"
                        alt=""
                      />
                    </div>
                    <p>Contractor</p>
                  </div>
                </div>
                <div className="container">
                  <form name="">
                    <div className="input-group input-group-lg input-row">
                      <input
                        className="form-control"
                        aria-label="Large"
                        type="text"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className="input-group input-group-lg input-row">
                      <input
                        className="form-control"
                        aria-label="Large"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="input-group justify-content-center input-row">
                      <div className="col-7">
                        <button className="greenBut">LOGIN</button>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <a className="orangeTxt-fp" href="">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="row justify-content-center">
                      Don't have an accout?{" "}
                      <a className="orangeTxt-fp" href="">
                        Sign up
                      </a>
                    </div>
                  </form>
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

export default Login;
