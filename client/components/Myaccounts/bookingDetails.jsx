import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as FontAwesome from "react-icons/lib/fa";

import style from "./style.css";

class BookingDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="booking-details-box">
          <div className="row">
            <div className="col-12">
              <div className="title-box">
                <div className="d-flex">
                  <div className="">My Booking Details</div>
                </div>
                <div className="ml-auto">
                  <button className="green-butt" type="button">
                    Book a Cleaning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingDetails;
