import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

const _img_promobanner = require("../../images/faq_banner.png");

class FAQPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="career-page-wrapper">
          <div className="row justify-content-center">
            <div className="banner-img">
              <img src={_img_promobanner} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="container font-avenir-roman" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FAQPage;
