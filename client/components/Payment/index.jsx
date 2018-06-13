import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as FontAwesome from "react-icons/lib/fa";

import style from "./style.css";

const _img_cardicons = require("../../images/cardIcons.jpg");

class PaymentComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="billing-content-holder">
          <div className="row font-avenir-roman">
            <div className="container">
              <div className="col-12">
                <div className="title">Payment Info</div>
              </div>
              <div className="payment-form-holder col-12">
                <div className="input-row row flex-container">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    <span className="label-txt">Card Number</span>
                    <input type="text" placeholder="Enter Card Number" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                    <img src={_img_cardicons} alt="" />
                  </div>
                </div>

                <div className="input-row row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <span className="label-txt">Valid Till</span>
                    <select>
                      <option value="" disabled selected>
                        Month
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <span className="label-txt">&nbsp;</span>
                    <select>
                      <option value="" disabled selected>
                        Year
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <span className="label-txt">CVV</span>
                    <input type="text" />
                  </div>
                </div>

                <div className="input-row row data-submit-line">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <button className="zk-green-but payment-but-confirm">
                      Confirm Booking
                    </button>
                    <p className="small-txt-grey" style={{ marginBottom: 0 }}>
                      By clicking "Confirm Booking" you agree to the{" "}
                      <a href="javascript:">Terms and Conditions</a>
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <p className="small-txt-grey margin-top-1em">
                      Do you want to cancel your booking?{" "}
                      <span className="small-txt-linkblue">
                        Click on{" "}
                        <a className="cancel-booking" href="javascript:">
                          CANCEL BOOKING
                        </a>
                      </span>
                    </p>
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

export default PaymentComponent;
