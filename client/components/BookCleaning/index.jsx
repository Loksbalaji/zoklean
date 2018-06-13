import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

const _img_domestic_icon = require("../../images/home.png");

class BookCleaning extends React.Component {
  constructor() {
    super();
  }

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
                      <a
                        className="tab-link active"
                        href="javascript:"
                        title=""
                      >
                        <div className="icon-holder">
                          <img src={_img_domestic_icon} alt="" />
                        </div>
                        <span className="row type-txt">Domestic</span>
                      </a>
                      <a className="tab-link" href="javascript:" title="">
                        <div className="icon-holder">
                          <img src={_img_domestic_icon} alt="" />
                        </div>
                        <span className="row type-txt">Comercial</span>
                      </a>
                    </div>
                  </div>

                  <div className="booking-form-holder">
                    {/* <DomesticBooking />
                    <ComercialBooking /> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="billing-details-box">
                  <div className="sec-title">
                    <h2>Billing Details</h2>
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
