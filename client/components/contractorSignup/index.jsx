import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";
import SignUpForm from "../Signup/signUpForm.jsx";

import Header from "../Header";
import Footer from "../Footer";
import ContractorWhyZokleanSection from "./contractorWhyZoklean.jsx";

const _img_promo_img = require("../../images/Signup/cleaningHighlights.jpg");

const _style_promoBannerBgImg = {
  backgroundImage: "url(" + _img_promo_img + ")"
};

class ContractorSignup extends React.Component {
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
                  <h1 className="">Sign up to become a contractor</h1>
                </div>
                <div className="container">
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContractorWhyZokleanSection />

        <Footer />
      </div>
    );
  }
}

export default ContractorSignup;
