import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import style from "./style.css";

const _img_footer_infinity = require("../../images/waterorg.png");
const _img_footer_fb = require("../../images/facebook-logo-button.png");
const _img_footer_twitter = require("../../images/twitter-logo-button.png");
const _img_footer_insta = require("../../images/instagram-logo.png");

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
                      <Link to="/careers" title="">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="/team" title="">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:" title="">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:" title="">
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Footer column 2 */}
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <ul>
                    <li>
                      <Link to="javascript:" title="">
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:" title="">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:" title="">
                        Cancellation Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" title="">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Footer column 3 */}
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <ul>
                    <li>
                      <Link to="javascript:" title="">
                        Bedroom Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:" title="">
                        Bathroom Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:" title="">
                        Kitchen Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:" title="">
                        Commercial Cleaning
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Footer column 4 */}
                <div className="col-sm-12 col-md-6 col-lg-4 disp-vertical-center">
                  <div className="row social-links-holder">
                    <span className="col-sm-12 col-md-12 col-lg-5 disp-vertical-center nopadding">
                      Follow Us
                    </span>
                    <div className="col-sm-12 col-md-12 col-lg-7 social-links nopadding">
                      <a target="_blank" href="javascript:">
                        <i className="">
                          <img src={_img_footer_fb} alt="" />
                        </i>
                      </a>
                      <a target="_blank" href="javascript:">
                        <i className="">
                          <img src={_img_footer_twitter} alt="" />
                        </i>
                      </a>
                      <a target="_blank" href="javascript:">
                        <i className="">
                          <img src={_img_footer_insta} alt="" />
                        </i>
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
