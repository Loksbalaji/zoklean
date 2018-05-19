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
              <div className="col-sm-2 col-md-6 col-lg-6">
                <img
                  src="https://image1.masterfile.com/getImage/698-07813174em-low-section-of-girl-cleaning-floor-with-vacuum-cleaner-at-home-stock.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-2 col-md-6 col-lg-6">
                <img
                  src="https://image1.masterfile.com/getImage/698-07813174em-low-section-of-girl-cleaning-floor-with-vacuum-cleaner-at-home-stock.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZokleanHighlights;
