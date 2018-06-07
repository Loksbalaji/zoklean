import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as FontAwesome from "react-icons/lib/fa";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";
import BillingInfo from "../BillingInfo";
import PaymentComponent from "../Payment";

const _img_homeIconImg = require("../../images/home.png");

class OrderSummary extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="order-summary-wrapper">
          <div className="row">
            <div className="container font-avenir">
              <div className="order-summary-box">
                <div className="green-bar-title">
                  <div className="col-12">
                    <div className="d-flex">
                      <div className="font-avenir" style={{ width: "100%" }}>
                        Order Summary
                      </div>
                      <div className="ml-auto">{<FontAwesome.FaEdit />}</div>
                    </div>
                  </div>
                </div>
                <div className="order-details-holder">
                  <div className="col-12">
                    <div className="row flex-container">
                      <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                        <div className="order-type-icon row justify-content-center">
                          <img src={_img_homeIconImg} alt="" />
                        </div>
                        <div className="row justify-content-center">
                          <p>Domestic</p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                        <div className="row">
                          <div className="d-flex">
                            <div className="label-txt">Zip Code</div>
                            <div className="ml-auto">
                              <div className="value-txt">92021</div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="d-flex">
                            <div className="label-txt">Cleaning Type</div>
                            <div className="ml-auto">
                              <div className="value-txt">
                                Standard (Just This Once)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                        <div className="grey-txt">Booking Date</div>
                        <div className="date">23/07/2018</div>
                        <div className="time">
                          10.30 <span> </span>AM
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="area-name">1500 Square Footage</div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="area-name">Bedroom 1</div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="area-name">Bathroom 1</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="row">
                          <div className="col-12">
                            <div className="grey-txt">Billing Amount</div>
                            <div className="price">$ 117</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="billing-info-box">
                <BillingInfo />
              </div>

              <div className="payment-info-box">
                <PaymentComponent />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OrderSummary;
