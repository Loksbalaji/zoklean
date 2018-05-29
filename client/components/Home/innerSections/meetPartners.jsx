import React, { Component } from "react";
import classnames from "classnames";

import meetPartners from "./meetPartners.css";

const _img_partner1 = require("../../../images/Home/bitmap_2.png");
const _img_partner2 = require("../../../images/Home/bitmap_3.png");
const _img_partner3 = require("../../../images/Home/bitmap_4.png");

class MeetOurPartners extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="meetPartners-outer-wrapper">
          <div className="container">
            <div className="row">
              <div className="mp-heading-holder">
                <h3 className="container">Meet Our Partners...</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="partnerDetailsBox">
                  <div className="parnerImgHolder">
                    <img className="img-fluid" src={_img_partner1} alt="" />
                  </div>
                  <div className="container">
                    <h4>Seth Wolfe</h4>
                    <p>
                      Business often become known today through effective
                      marketing. The marketing may be in the form of a regular
                      item or half coulmn society news in the Sunday newspaper.
                      The marketing may be in form...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="partnerDetailsBox">
                  <div className="parnerImgHolder">
                    <img className="img-fluid" src={_img_partner2} alt="" />
                  </div>
                  <div className="container">
                    <h4>Eliza Lee</h4>
                    <p>
                      Business often become known today through effective
                      marketing. The marketing may be in the form of a regular
                      item or half coulmn society news in the Sunday newspaper.
                      The marketing may be in form...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="partnerDetailsBox">
                  <div className="parnerImgHolder">
                    <img className="img-fluid" src={_img_partner3} alt="" />
                  </div>
                  <div className="container">
                    <h4>Tillie Wolfe</h4>
                    <p>
                      Business often become known today through effective
                      marketing. The marketing may be in the form of a regular
                      item or half coulmn society news in the Sunday newspaper.
                      The marketing may be in form...
                    </p>
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

export default MeetOurPartners;
