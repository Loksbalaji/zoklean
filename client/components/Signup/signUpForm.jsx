import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

const _img_white_successtick = require("../../images/white-tick.png");

class SignUpForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
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
              <button
                type="button"
                className="greenBut"
                onClick={this.handleShow}
              >
                Sign Up
              </button>
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

        <div className={this.state.show ? "" : "hidden-content"}>
          <div className="pop-overlay">
            <a href="javascript:" onClick={this.handleClose} />
          </div>
          <div className="pop-box">
            <div className="pop-content-holder">
              <div className="success-head row justify-content-center">
                <div className="img-indicator-icon">
                  <img src={_img_white_successtick} alt="" />
                </div>
              </div>
              <div className="body-message-holder row justify-content-center ss-content">
                <p>
                  You have successfully signed up with <br />Zoklean
                </p>
                <p>Check your email for more details</p>
              </div>
              <div className="option-button-holder" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
