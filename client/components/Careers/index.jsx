import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

const _img_promobanner = require("../../images/careers/careers-banner.jpg");

class Careers extends React.Component {
  constructor() {
    super();
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
            <div className="container font-avenir-roman">
              <div className="row career-content-holder justify-content-center">
                <div className="career-tit">
                  <h1>Build Together, Grow Together</h1>
                  <p>Solve big problems that make the world clean</p>
                  <h2 className="title-openroles">Open Roles</h2>
                </div>
                <div className="openings-list-holder">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Role</th>
                        <th scope="col">Team</th>
                        <th scope="col">City</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Brand Marketing Manager, Trust &amp; Safety</td>
                        <td>Product Marketing</td>
                        <td>San Diego, Del Mar</td>
                      </tr>
                      <tr>
                        <td>Head of Product Design</td>
                        <td>Product Management</td>
                        <td>San Diego, Del Mar</td>
                      </tr>
                      <tr>
                        <td>Product Manager</td>
                        <td>Product</td>
                        <td>San Diego, Del Mar</td>
                      </tr>
                      <tr>
                        <td>Senior Product Manager</td>
                        <td>Product</td>
                        <td>San Diego, Del Mar</td>
                      </tr>
                      <tr>
                        <td>UX Manager</td>
                        <td>Product</td>
                        <td>San Diego, Del Mar</td>
                      </tr>
                      <tr>
                        <td>Sr. Director / Director, Consumer Products</td>
                        <td>Legal</td>
                        <td>San Diego, Del Mar</td>
                      </tr>
                    </tbody>
                  </table>
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

export default Careers;
