import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

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
            <div className="col-sm-12 col-md-5 col-lg-5 row-eq-height nopadding promo-section" />
            <div className="col-sm-12 col-md-7 col-lg-7 row-eq-height">
              <div className="signup-form-wrapper">
                <div className="row justify-content-center">
                  <h1 className="">Sign Up with Zoklean</h1>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="signupForm-icon-holder">
                      <img
                        src="https://www.icon2s.com/img256/256x256-brown-woman-people-icon.png
                        "
                        alt=""
                      />
                    </div>
                    <p>Customer</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="signupForm-icon-holder">
                      <img
                        src="https://marketplace.canva.com/MAB60QJGqGg/1/thumbnail_large/canva-man-male-avatar-person-people-icon.-vector-graphic-MAB60QJGqGg.png"
                        alt=""
                      />
                    </div>
                    <p>Employee</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="signupForm-icon-holder">
                      <img
                        src="http://www.myiconfinder.com/uploads/iconsets/256-256-c606900441e4739c7105f6df0ec0d147-engineer.png"
                        alt=""
                      />
                    </div>
                    <p>Contractor</p>
                  </div>
                </div>
                <div className="container">
                  <form name="" className="row signup-inputs-form">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="input-group input-group-lg input-row">
                        <input
                          className="form-control"
                          aria-label="Large"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="input-group input-group-lg input-row">
                        <input
                          className="form-control"
                          aria-label="Large"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="input-group input-group-lg input-row">
                        <input
                          className="form-control"
                          aria-label="Large"
                          type="text"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="input-group input-group-lg input-row">
                        <input
                          className="form-control"
                          aria-label="Large"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="input-group input-group-lg input-row">
                        <input
                          className="form-control"
                          aria-label="Large"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="input-group input-group-lg input-row">
                        <input
                          className="form-control"
                          aria-label="Large"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>

                    <div className="input-group justify-content-center input-row margin-bottom-1rem">
                      <div className="col-7">
                        <button className="greenBut">Sign Up</button>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      Have an existing account?
                      <a className="orangeTxt fp-link" href="">
                        Sign In
                      </a>
                    </div>
                    <div className="row justify-content-center signup-link-holder">
                      Don't have an accout?{" "}
                      <a className="orangeTxt signup-link" href="">
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

export default Signup;
