import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";
import SignUpForm from "./signUpForm.jsx";

import Header from "../Header";
import Footer from "../Footer";

const _img_promo_img = require("../../images/Signup/signupPromoImg.png");
const _img_customer_icon = require("../../images/Signup/specialist-user.png");
const _img_employee_icon = require("../../images/Signup/employee.png");
const _img_contractor_icon = require("../../images/Signup/vacuum.png");

const _style_promoBannerBgImg = {
  backgroundImage: "url(" + _img_promo_img + ")"
};

class Signup extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 col-md-5 col-lg-5 row-eq-height nopadding promo-section"
              style={_style_promoBannerBgImg}
            />
            <div className="col-sm-12 col-md-7 col-lg-7 row-eq-height">
              <div className="signup-form-wrapper">
                <div className="row justify-content-center">
                  <h1 className="">Sign Up with Zoklean</h1>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="signupForm-icon-holder">
                      <img src={_img_customer_icon} alt="" />
                    </div>
                    <p>Customer</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="signupForm-icon-holder">
                      <img src={_img_employee_icon} alt="" />
                    </div>
                    <p>Employee</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="signupForm-icon-holder">
                      <img src={_img_contractor_icon} alt="" />
                    </div>
                    <p>Contractor</p>
                  </div>
                </div>
                <div className="container">
                  <SignUpForm />
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

export default Signup;
