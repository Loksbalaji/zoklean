import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

const _img_footer_infinity = require("../../images/waterorg.png");

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="footer-outer-wrapper">
          <div className="sub-footer-links zoklean-violet-gradientbg">
            <div className="container">
              <div className="row">
                {/* Footer column 1 */}
                <div className="col-sm-12 col-md-6 col-lg-2">
                  <ul>
                    <li>
                      <a href="javascript:" title="">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" title="">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" title="">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" title="">
                        Support
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Footer column 2 */}
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <ul>
                    <li>
                      <a href="javascript:" title="">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" title="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" title="">
                        Cancellation Policy
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" title="">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Footer column 3 */}
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <ul>
                    <li>
                      <a href="javascript:" title="">
                        Bedroom Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" title="">
                        Bathroom Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" title="">
                        Kitchen Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" title="">
                        Commercial Cleaning
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Footer column 4 */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="social-links-holder">
                    <span className="col-sm-12 col-md-12 col-lg-4">
                      Follow Us
                    </span>
                    <div className="col-4">
                      <a target="_blank" href="javascript:">
                        <i className="" />
                      </a>
                    </div>
                    <div className="col-4">
                      <a target="_blank" href="javascript:">
                        <i className="" />
                      </a>
                    </div>
                    <div className="col-4">
                      <a target="_blank" href="javascript:">
                        <i className="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 donation-info justify-content-right">
                  <p>
                    <img
                      className="waterOrgLogo"
                      src={_img_footer_infinity}
                      alt=""
                    />{" "}
                    <span className="donateTxt">
                      $1 donated for each cleaning
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer balck */}
          <div className="blackbg-footer">
            <div className="col-12">
              <div className="container">
                <div className="row justify-content-center">
                  &copy; {" 2017 Zoklean. All rights reserved."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
