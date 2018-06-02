import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as FontAwesome from "react-icons/lib/fa";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";
import BookingDetails from "./bookingDetails";

const _img_profPic = require("../../images/editprof-usersample.png");

class Myaccounts extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="myaccounts-outer-wrapper">
          <div className="row">
            <div className="container font-avenir-roman">
              <div className="user-data-box">
                <div className="green-bar-title">
                  <div className="col-12">
                    <div className="d-flex">
                      <div>My Account</div>
                      <div className="ml-auto">{<FontAwesome.FaCog />}</div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row content-box">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                      <div className="row user-dp-holder justify-content-center">
                        <div className="img-holder">
                          <img src={_img_profPic} alt="" />
                        </div>
                        <a
                          className="photo-update-link"
                          href="javascript:"
                          title=""
                        >
                          Change Photo
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                      <div className="disp-content">
                        <div className="row">
                          <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-right text-label">
                            Name
                          </div>
                          <div className="col-12 col-sm-8 col-md-8 col-lg-8 text-value">
                            Lida Alvarado
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-right text-label">
                            Address
                          </div>
                          <div className="col-12 col-sm-8 col-md-8 col-lg-8 text-value">
                            1562 E Main, El Cajon, CA
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-right text-label">
                            Zip code
                          </div>
                          <div className="col-12 col-sm-8 col-md-8 col-lg-8 text-value">
                            92021
                          </div>
                        </div>
                        <p />
                        <div className="row">
                          <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-right text-label">
                            Phone Number
                          </div>
                          <div className="col-12 col-sm-8 col-md-8 col-lg-8 text-value">
                            825-545-4816
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-right text-label">
                            Address
                          </div>
                          <div className="col-12 col-sm-8 col-md-8 col-lg-8 text-value">
                            Lida_Alvarado@hotmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <BookingDetails />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Myaccounts;
