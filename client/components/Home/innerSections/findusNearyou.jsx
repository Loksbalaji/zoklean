import React, { Component } from "react";
import classnames from "classnames";

import findusNearyou from "./findusNearyou.css";

class FindusNearyou extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="meetPartners-outer-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 col-md-8 col-lg-8">
                <div className="nearyou-heading-holder">
                  <h3>You can find us near you...</h3>
                </div>
              </div>
              <div className="col-sm-2 col-md-4 col-lg-4">
                <input
                  type="text"
                  className="pinCodeBox"
                  placeholder="Enter Pincode"
                />
              </div>
            </div>
            <div className="row zoklean-violet-gradientbg fus-content-wrapper">
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="container">
                  <div className="locationImageHolder">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&h=350"
                      alt=""
                    />
                  </div>
                  <h4>La Jolla</h4>
                </div>
              </div>
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="container">
                  <div className="locationImageHolder">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&h=350"
                      alt=""
                    />
                  </div>
                  <h4>Del Mar</h4>
                </div>
              </div>
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="container">
                  <div className="locationImageHolder">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&h=350"
                      alt=""
                    />
                  </div>
                  <h4>Downtown</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindusNearyou;
