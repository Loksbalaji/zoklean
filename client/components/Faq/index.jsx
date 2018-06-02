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

                  <Accordion>
                    <div data-trigger="A nifty React accordion component">
                      <p>
                        So this is an Accordion component that used the{" "}
                        <a href="https://github.com/glennflanagan/react-collapsible">
                          react-collapsible
                        </a>{" "}
                        component. How handy.
                      </p>
                    </div>

                    <div
                      data-trigger="What the difference?"
                      data-trigger-when-open="THAT is the difference!"
                    >
                      <p>
                        An Accordion is different to a Collapsible in the sense
                        that only one "tray" will be open at any one time.
                      </p>
                    </div>

                    <div data-trigger="I'm responsive and I have a little secret. Look inside.">
                      <p>
                        And this Accordion component is also completely
                        repsonsive. Hurrah for mobile users!
                      </p>
                    </div>
                  </Accordion>
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
