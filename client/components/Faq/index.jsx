import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Accordion from "react-responsive-accordion";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

const _img_customer_icon = require("../../images/Signup/specialist-user.png");
const _img_contractor_icon = require("../../images/Signup/vacuum.png");
const _img_promobanner = require("../../images/faq_banner.png");

class FAQPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="faq-page-wrapper">
          <div className="row justify-content-center">
            <div className="banner-img">
              <img src={_img_promobanner} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="container font-avenir-roman">
              <div className="faq-qa-box">
                <div className="col-12">
                  <h1>Frequently Asked Questions</h1>
                </div>
                <div className="col-12">
                  <div className="tab-holder">
                    <div className="customer-tab">
                      <a href="javascript:">
                        <p className="icon-holder">
                          <img src={_img_customer_icon} alt="" />
                        </p>
                        <p>Customer</p>
                      </a>
                    </div>
                    <div className="contractor-tab">
                      <a href="javascript:">
                        <p className="icon-holder">
                          <img src={_img_contractor_icon} alt="" />
                        </p>
                        <p>Contractor</p>
                      </a>
                    </div>
                  </div>

                  <div className="faq-accordion-content-holder">
                  <Accordion>
                    <div data-trigger="1. What kinds of cleaning services do you offer?">
                      <p>
                      Zoklean is a digital booking platform for all your cleaning needs. We currently offer home cleaning services in specific areas but plan to
expand quickly, keep your eyes out!
                      </p>
                    </div>

                    <div
                      data-trigger="2. Does it cost money to join Zoklean?">
                      <p>
                      Zoklean is a digital booking platform for all your cleaning needs. We currently offer home cleaning services in specific areas but plan to
expand quickly, keep your eyes out!
                      </p>
                    </div>

                    <div data-trigger="3. How much does a cleaning cost?">
                      <p>
                      Zoklean is a digital booking platform for all your cleaning needs. We currently offer home cleaning services in specific areas but plan to
expand quickly, keep your eyes out!
                      </p>
                    </div>

                    <div data-trigger="4. Is my credit card information safe?">
                      <p>
                      Zoklean is a digital booking platform for all your cleaning needs. We currently offer home cleaning services in specific areas but plan to
expand quickly, keep your eyes out!
                      </p>
                    </div>
                    <div data-trigger="5. Can I order recurring cleanings?">
                      <p>
                      Zoklean is a digital booking platform for all your cleaning needs. We currently offer home cleaning services in specific areas but plan to
expand quickly, keep your eyes out!
                      </p>
                    </div>

                    <div data-trigger="6. I want biweekly cleanings. How often will I be charged?">
                      <p>
                      Zoklean is a digital booking platform for all your cleaning needs. We currently offer home cleaning services in specific areas but plan to
expand quickly, keep your eyes out!
                      </p>
                    </div>
                  </Accordion>
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

export default FAQPage;
