import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";
import DomesticBooking from "./DomesticBooking";
import ComercialBooking from "./ComercialBooking";

const _img_domestic_icon = require("../../images/home.png");
const _img_comercial_icon = require("../../images/cleaning/office.png");

class BookCleaning extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      bookingType: "domestic"
    };
  }

  hanldeBookingType = event => {
    this.setState({
      bookingType: event.target.id
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="book-cleaning-wrapper font-avenir-roman">
          <div className="container-1200">
            <div className="row bc-sections-container">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="cleaning-selection-box">
                  <div className="sec-title">
                    <h2>Book a Cleaning</h2>
                  </div>

                  <div className="toggle-booking-type-holder">
                    <div className="row justify-content-center">
                      <div className="icon-holder">
                        <a
                          onClick={this.hanldeBookingType}
                          className={
                            this.state.bookingType == "domestic"
                              ? "tab-link active"
                              : "tab-link"
                          }
                          href="javascript:"
                          title=""
                        >
                          <img id="domestic" src={_img_domestic_icon} alt="" />
                        </a>
                        <p className="type-txt">Domestic</p>
                      </div>
                      <div className="icon-holder">
                        <a
                          href="javascript:"
                          title=""
                          onClick={this.hanldeBookingType}
                          className={
                            this.state.bookingType == "comercial"
                              ? "tab-link active"
                              : "tab-link"
                          }
                        >
                          <img
                            id="comercial"
                            src={_img_comercial_icon}
                            alt=""
                          />
                        </a>
                        <p className="type-txt">Comercial</p>
                      </div>
                    </div>
                  </div>

                  <div className="booking-form-holder">
                    {this.state.bookingType == "domestic" ? (
                      <DomesticBooking />
                    ) : (
                      <ComercialBooking />
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="billing-details-box col-12 row">
                  <div className="sec-title">
                    <h2>Billing Details</h2>
                  </div>
                  <div className="details-sec-wrapper">
                    <div className="sec-list col-12">
                      <div
                        className="cleaning-type-title-holder row"
                        style={{ paddingBottom: "0.95rem" }}
                      >
                        <span className="sec-list-tit col-12 nopadding">
                          Cleaning Type
                        </span>
                        <span
                          className="col-12 nopadding"
                          style={{
                            fontSize: "1.2rem"
                          }}
                        >
                          Standard (Just This Once)
                        </span>
                      </div>

                      <div className="disp-info-row d-flex">
                        <span>Bedroom</span>
                        <span className="ml-auto">1</span>
                      </div>
                      <div className="disp-info-row d-flex">
                        <span>Bathroom</span>
                        <span className="ml-auto">1</span>
                      </div>
                    </div>

                    <div className="sec-list col-12">
                      <div className="cleaning-type-title-holder row">
                        <span className="sec-list-tit col-12 nopadding">
                          Add On Services
                        </span>
                      </div>

                      <div className="disp-info-row d-flex">
                        <span>Blinds</span>
                        <span className="ml-auto">-</span>
                      </div>
                      <div className="disp-info-row d-flex">
                        <span>Fridge</span>
                        <span className="ml-auto">-</span>
                      </div>
                      <div className="disp-info-row d-flex">
                        <span>Ovan</span>
                        <span className="ml-auto">-</span>
                      </div>
                      <div className="disp-info-row d-flex">
                        <span>Walls</span>
                        <span className="ml-auto">-</span>
                      </div>
                      <div className="disp-info-row d-flex">
                        <span>Window</span>
                        <span className="ml-auto">-</span>
                      </div>
                    </div>

                    <div className="sec-list col-12 row coupon-code-holder">
                      <div className="cleaning-type-title-holder col-12 row nopadding">
                        <span className="sec-list-tit">Apply Coupon</span>
                      </div>
                      <div className="col-12 col-sm-1 col-md-12 col-lg-7 nopadding">
                        <input
                          className="input-coupon-text"
                          type="text"
                          placeholder="Coupon Code"
                          name="coupon-code"
                        />
                      </div>
                      <div className="col-12 col-sm-1 col-md-12 col-lg-5 noPaddingRight">
                        <button className="zk-green-but">Apply</button>
                      </div>
                    </div>

                    <div className="sec-list col-12 billing-info-holder">
                      <div className="cleaning-type-title-holder row">
                        <span className="sec-list-tit col-12 nopadding">
                          Billing Amount
                        </span>
                      </div>
                      <div className="disp-info-row d-flex">
                        <span className="label-total-txt">Total</span>
                        <span className="ml-auto orangeTxt">$ 117</span>
                      </div>
                    </div>

                    <div className="sec-list col-12 submit-form-cta">
                      <div className="disp-info-row d-flex col-12">
                        <button className="zk-green-but">Continue</button>
                      </div>
                    </div>
                  </div>
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

export default BookCleaning;
