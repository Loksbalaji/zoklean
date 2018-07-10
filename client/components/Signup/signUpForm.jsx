import React, { Component } from "react";
import classnames from "classnames";
import { FormGroup, FormControl } from "react-bootstrap";

import style from "./style.css";

const _img_white_successtick = require("../../images/white-tick.png");

class SignUpForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  validateForm = () => {
    return (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.phoneNumber.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.confirmPassword.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
  };

  render() {
    return (
      <div>
        <form
          name=""
          className="row signup-inputs-form font-avenir-roman"
          onSubmit={this.handleSubmit}
        >
          <div className="col-sm-12 col-md-6 col-lg-6">
            <FormGroup controlId="firstName" bsSize="large">
              <FormControl
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <FormGroup controlId="lastName" bsSize="large">
              <FormControl
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <FormGroup controlId="phoneNumber" bsSize="large">
              <FormControl
                type="text"
                placeholder="Phone Number"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <FormGroup controlId="email" bsSize="large">
              <FormControl
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <FormGroup controlId="password" bsSize="large">
              <FormControl
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <FormGroup controlId="confirmPassword" bsSize="large">
              <FormControl
                type="password"
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>

          <div className="input-group justify-content-center input-row margin-bottom-1rem">
            <div className="col-7">
              <button
                type="submit"
                className="greenBut"
                disabled={!this.validateForm()}
                //onClick={this.handleShow}
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
