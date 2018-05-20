import React, { Component } from "react";
import classnames from "classnames";

import clientscorner from "./clientsCorner.css";

class ClientsCorner extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="clients-corner-outer-wrapper">
          <div className="row">
            <div className="container">
              <div className="col-12">
                <h3 className="title-holder">
                  Trusted by some of the world's smartest companies...
                </h3>
              </div>
              <div className="row client-logos-wrapper">
                <div className="col-sm-12 col-md-6 col-lg-3 disp-vertical-center">
                  <img
                    src="http://domains.whoswho/sites/default/files/images/ww-logo-excellence-v2-OG.png"
                    alt=""
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 disp-vertical-center">
                  <img
                    src="https://greensock.com/wp-content/uploads/2014/02/logo-youtube.png"
                    alt=""
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 disp-vertical-center">
                  <img
                    src="https://marketing.dcassetcdn.com/blog/2016/January/top-company-logos-one-color/17_Nestle_400.png"
                    alt=""
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 disp-vertical-center">
                  <img
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/press/brand-identity-design/apple-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientsCorner;
