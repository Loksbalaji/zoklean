import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as FontAwesome from "react-icons/lib/fa";

import style from "./style.css";

class BookingDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getVendorDetails() {
    return (
      <div>
        <div className="verndor-details-holder">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="booking-status">
                  Your Booking has been Schedueled
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="vendor-details-txt">Vendor Details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getBookingDetailsList() {
    return (
      <div className="booking-details-list">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date of Booking</th>
                <th>Date of Cleaning</th>
                <th>Time</th>
                <th>Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>872-324-6769</td>
                <td>13 Aug 2018</td>
                <td>28 Aug 2018</td>
                <td>07:30AM</td>
                <td>$117</td>
                <td className="text-color-orange">Yet to Confirm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="booking-details-box">
          <div className="row">
            <div className="col-12 nopadding">
              <div className="title-box">
                <div className="d-flex">
                  <div className="title">My Booking Details</div>

                  <div className="ml-auto">
                    <button className="zk-green-but" type="button">
                      Book a Cleaning
                    </button>
                  </div>
                </div>
              </div>
              <div className="booking-details-list-holder">
                {this.getBookingDetailsList()}
                {this.getBookingDetailsList()}
                {this.getBookingDetailsList()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingDetails;
