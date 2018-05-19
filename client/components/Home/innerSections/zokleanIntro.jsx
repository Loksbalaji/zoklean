import React, { Component } from "react";
import classnames from "classnames";

import zokleanIntroCss from "./zokleanIntro.css";

class ZokleanIntro extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="banner2-outer-wrapper">
          <div className="container">
            <div className="row">
              <div className="baaner2-introPara">
                <div className="row justify-content-center text-xs-center">
                  <div className="col-9">
                    At Zoklean, you can schedule the best local cleaning
                    companies instantly at fixed price. We offer cleaning
                    services on demand with professionals you can trust. Don't
                    stress and leave youe mess at Zoklean!
                  </div>
                </div>
              </div>
            </div>
            <div className="row banner2-lightCols">
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="row justify-content-center imgHolder">
                  <div className="col-8 txtCenter">
                    <img
                      src="https://www.w3schools.com/bootstrap/newyork.jpg"
                      className="rounded-circle banner2-circle-img"
                      alt="Cinque Terre"
                    />
                  </div>
                </div>
                <h4 className="banner2-coltit">Honest Pricing</h4>
                <p className="banner2-colPara">
                  Get a fixed rate instantly through a modern platform
                </p>
              </div>
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="row justify-content-center imgHolder">
                  <div className="col-8 txtCenter">
                    <img
                      src="https://www.w3schools.com/bootstrap/newyork.jpg"
                      className="rounded-circle banner2-circle-img"
                      alt="Cinque Terre"
                    />
                  </div>
                </div>
                <h4 className="banner2-coltit">
                  Screened Cleaning Professionals
                </h4>
                <p className="banner2-colPara">
                  Don't worry, we investigate each cleaning company to ensure
                  that they're legit
                </p>
              </div>
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="row justify-content-center imgHolder">
                  <div className="col-8 txtCenter">
                    <img
                      src="https://www.w3schools.com/bootstrap/newyork.jpg"
                      className="rounded-circle banner2-circle-img"
                      alt="Cinque Terre"
                    />
                  </div>
                </div>
                <h4 className="banner2-coltit">Reliable Service</h4>
                <p className="banner2-colPara">
                  Feel secure knowing that your satisfaction is guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZokleanIntro;
