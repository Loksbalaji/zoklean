import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as FontAwesome from "react-icons/lib/fa";

import style from "./style.css";

class BillingInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="billing-content-holder">
          <div className="row font-avenir-roman">
            <div className="container">
              <div className="col-12 d-sm-nopadding">
                <div className="title">Billing Info</div>
                <div className="billing-form-holder col-12">
                  <div className="input-row row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                      <input type="text" placeholder="First Name*" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                      <input type="text" placeholder="Last Name*" />
                    </div>
                  </div>
                  <div className="input-row row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <input type="text" placeholder="Address*" />
                    </div>
                  </div>
                  <div className="input-row row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                      <input type="text" placeholder="City*" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                      <input type="text" placeholder="State*" />
                    </div>
                  </div>
                  <div className="input-row row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                      <input type="text" placeholder="Phone Numbergit add *" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                      <input type="text" placeholder="Email Address*" />
                    </div>
                  </div>
                  <div className="input-row row">
                    <div className="col-12">
                      <span className="checkbox-holder">
                        <input type="checkbox" name="saveBillingInfo" />
                      </span>
                      <span className="savebilling-txt">
                        Save the billing info
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

export default BillingInfo;
