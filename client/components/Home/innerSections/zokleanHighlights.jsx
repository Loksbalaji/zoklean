import React, { Component } from "react";
import classnames from "classnames";

import zokleanHighlightsCSS from "./zokleanHighlights.css";

class ZokleanHighlights extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="zkHighlightSectionOuterWrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 col-md-7 col-lg-7 nopadding">
                <img
                  src="http://easybreezyclean.com/assets/asset-1454628881237.png?v=0.7574441405013204"
                  alt=""
                />
              </div>
              <div className="col-sm-3 col-md-5 col-lg-5 nopadding">
                <div className="highlights-content-holder">
                  <div className="container">
                    <div className="bullet-points">
                      <ul>
                        <li>
                          <i className="" />
                          Join for Free
                        </li>
                        <li>
                          <i className="" />
                          Gain customers
                        </li>
                        <li>
                          <i className="" />
                          Optimize Booking
                        </li>
                      </ul>
                      <button className="zkgreen-cta-butt">
                        Become a contractor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZokleanHighlights;
