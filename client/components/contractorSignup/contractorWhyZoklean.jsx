import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

const _img_violerBullet = require("../../images/violetHighlightBullet.png");

class ContractorWhyZokleanSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contractor-signup-hightlights-wrapper">
        <div className="container">
          <div className="row contractor-signup-hightlights">
            <div className="col-12">
              <h1>Why Zoklean?</h1>
              <p className="para">
                Zoklean is th premiere app for cleaning professionals to market,
                manage and expand their business. It's our job to make your
                cleaning business thrive. With Zoklean's extensive cleaning
                process, you will be joining an exclusive network comprised of
                cleaners who:{" "}
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="contractor-signup-highlights">
                <ul>
                  <li>
                    <i>
                      <img src={_img_violerBullet} alt="" />
                      Established in the cleaning business for 3+ years
                    </i>
                  </li>
                  <li>
                    <i>
                      <img src={_img_violerBullet} alt="" />
                      Average 4.75 out of 5 star customer rating
                    </i>
                  </li>
                  <li>
                    <i>
                      <img src={_img_violerBullet} alt="" />
                      Pass a background check
                    </i>
                  </li>
                  <li>
                    <i>
                      <img src={_img_violerBullet} alt="" />
                      Have a history of providing high quality service
                    </i>
                  </li>
                  <li>
                    <i>
                      <img src={_img_violerBullet} alt="" />
                      Insured and bonded
                    </i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="row justify-content-center">
                <p className="para">
                  Sounds like you? Well, then its time to stop the discounts and
                  throw away those flyers because Zoklean offers the high
                  quality cleaners the highest return on investment for your
                  marketing dollars. We value your time, which is why we only
                  allow qualified leads or jobs on our platform. Many competing
                  sites have hidden fees and charge you with no gauratee of
                  booking. In contrast we believe in honest pricing, which is
                  why we only collect a small fee when you book clients. By
                  charging market rates we make sure that you get paid fairly,
                  while leveraging technology to reach new customers.
                </p>
                <p className="para">
                  Unlike, competitors, zoklean offers cleaning professionals
                  acess to cleaning proprietary business management software.
                  With these unique tools, we help you manage bookings, identify
                  opportunities and optimize results - all in one place. The
                  software, exclusively available to cleaners in the zoklean
                  network, takes care of things like:{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContractorWhyZokleanSection;
