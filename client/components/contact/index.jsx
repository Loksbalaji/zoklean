import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

const _img_promobanner = require("../../images/contact/adult-business-chair.png");
const _img_worldmap = require("../../images/contact/worldmap.jpg");

class ContactPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="contact-page-wrapper">
          <div className="row justify-content-center">
            <div className="banner-img">
              <img src={_img_promobanner} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row contact-content-holder justify-content-center">
                <div className="contact-tit">
                  <h1>Contact Us</h1>
                </div>
                <div className="worldmap-image">
                  <img src={_img_worldmap} alt="" />
                </div>
                <div className="contact-inquiry-form-wrapper">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <input
                        type="text"
                        className=""
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <input type="text" className="" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <input
                        type="text"
                        className=""
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <input type="text" className="" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <textarea />
                    </div>
                  </div>
                  <div className="row">
                    <button>Submit</button>
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

export default ContactPage;
