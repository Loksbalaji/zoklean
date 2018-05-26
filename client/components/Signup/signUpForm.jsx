import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

class SignUpForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
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

        <div className="col-12">
          <div className="row justify-content-center">
            Have an existing account?{" "}
            <a className="orangeTxt signin-link" href="./login">
              Sign In
            </a>
          </div>
        </div>

        <div className="col-12">
          <div className="row justify-content-center tos-link">
            By clicking sign up you agree to our{" "}
            <a className="orangeTxt signup-link" href="">
              terms of service
            </a>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
