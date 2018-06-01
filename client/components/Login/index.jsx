import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

const _img_promo_img = require("../../images/Signup/signinPromoImg.png");
const _img_customer_icon = require("../../images/Signup/specialist-user.png");
const _img_employee_icon = require("../../images/Signup/employee.png");
const _img_contractor_icon = require("../../images/Signup/vacuum.png");

const _style_promoBannerBgImg = {
  backgroundImage: "url(" + _img_promo_img + ")"
};

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container font-avenir-roman">
          <div className="row">
            <div
              className="d-none d-lg-block col-lg-6 row-eq-height nopadding promo-section"
              style={_style_promoBannerBgImg}
            />
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="login-form-wrapper">
                <div className="row justify-content-center">
                  <h1 className="">Login to Zoklean</h1>
                </div>
                <div className="row">
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="loginForm-icon-holder">
                      <img src={_img_customer_icon} alt="" />
                    </div>
                    <p>Customer</p>
                  </div>
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="loginForm-icon-holder">
                      <img src={_img_employee_icon} alt="" />
                    </div>
                    <p>Employee</p>
                  </div>
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="loginForm-icon-holder">
                      <img src={_img_contractor_icon} alt="" />
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
                    <div className="input-group justify-content-center input-row margin-bottom-1rem">
                      <div className="col-7">
                        <button className="greenBut">LOGIN</button>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <a className="orangeTxt fp-link" href="">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="row justify-content-center signup-link-holder font-lato">
                      Don't have an account?{" "}
                      <a className="orangeTxt signup-link" href="/signup">
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
