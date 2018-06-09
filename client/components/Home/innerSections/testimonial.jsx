import React, { Component } from "react";
import classnames from "classnames";

import style from "./testimonial.css";

class Testimonial extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="row testimonail-wrapper">
          <div className="container">
            <div className="col-12">
              <div className="testi-title">
                <h3>See what people say about us...</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="testimonial-box-holder">
                <div className="testi-box" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
