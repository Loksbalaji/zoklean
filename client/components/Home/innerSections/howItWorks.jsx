import React, { Component } from "react";
import classnames from "classnames";

import style from "./howItWorks.css";

const _img_price = require("../../../images/Home/pricing.png");
const _img_quote = require("../../../images/Home/quote.png");
const _img_relax = require("../../../images/Home/relax.png");
const _img_book = require("../../../images/Home/book.png");

class HowItWorks extends Component {
  constructor(props, context) {
    super(props, context);
  }

  myFunction(timeline_line, length, offsetTopOfHIWSec) {
    let scrollpercent = offsetTopOfHIWSec / window.scrollY;

    let draw = length * scrollpercent;
    timeline_line.style.strokeDasharray = [length - draw, length];
  }

  componentDidMount() {
    let timeline_line = document.getElementById("drawline");
    var length = timeline_line.getTotalLength();
    let offsetTopOfHIWSec = parseInt(this.refs.timelineWrap.offsetHeight);
    window.addEventListener(
      "scroll",
      this.myFunction.bind(this, timeline_line, length, offsetTopOfHIWSec)
    );
  }

  render() {
    return (
      <div>
        <section
          className="timeline-wrap"
          ref="timelineWrap"
          style={{ display: "block" }}
        >
          <div className="container font-avenir-roman">
            <div className="animation-block" style={{ position: "relative" }}>
              <div className="col-12 nopadding">
                <div className="row main-title">
                  <h3>How it works</h3>
                </div>
              </div>
              <div className="col-12 nopadding">
                <div className="row timeline-content-holder">
                  <div className="timeline-bar" />
                  <div className="svg-back" id="svgBack">
                    <svg
                      className="d-none d-lg-block"
                      width="100%"
                      height="1020"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke="#dbdbdb"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 400 10 
					V173 A 20 20, 0, 0, 0, 420 193H780 A 20 20, 0, 0, 1, 800 213
									V441 A 20 20, 0, 0, 1, 780 461H30 A 20 20, 0, 0, 0, 10 481
									V709 A 20 20, 0, 0, 0, 30 729H780 A 20 20, 0, 0, 1, 800 749
							V 900"
                      />
                      <path
                        fill="none"
                        stroke="#E01F26"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 400 10 
					V173 A 20 20, 0, 0, 0, 420 193H780 A 20 20, 0, 0, 1, 800 213
									V441 A 20 20, 0, 0, 1, 780 461H30 A 20 20, 0, 0, 0, 10 481
									V709 A 20 20, 0, 0, 0, 30 729H780 A 20 20, 0, 0, 1, 800 749
							V 900"
                        id="drawline"
                        // style={{ strokeDasharray: "2047.87, 2066.36" }}
                      />
                    </svg>
                  </div>

                  <div className="timeline-row quote-section row1">
                    <div className="sec-para">
                      <p className="title">Step 1:</p>
                      <p className="text">
                        Simply enter your address and the number of rooms for an
                        instant quote with no hidden fees.
                      </p>
                    </div>
                    <div className="iconic-img">
                      <div className="row justify-content-center">
                        <div className="img-holder col-12">
                          <img src={_img_quote} alt="" />
                        </div>
                        <p className="timeline-blockTxt">Quote</p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-row quote-section row2">
                    <div className="sec-para">
                      <p className="title">Step 2:</p>
                      <p className="text">
                        Schedule a cleaning service from top-notch local
                        professionals.
                      </p>
                    </div>
                    <div className="iconic-img">
                      <div className="row justify-content-center">
                        <div className="img-holder col-12">
                          <img src={_img_book} alt="" />
                        </div>
                        <p className="timeline-blockTxt">Book</p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-row quote-section row3">
                    <div className="iconic-img">
                      <div className="row justify-content-center">
                        <div className="img-holder col-12">
                          <img
                            style={{ maxWidth: "108px" }}
                            src={_img_price}
                            alt=""
                          />
                        </div>
                        <p className="timeline-blockTxt">Pay</p>
                      </div>
                    </div>
                    <div className="sec-para">
                      <p className="title">Step 3:</p>
                      <p className="text">
                        Pay for your residential or commercial cleaning in-app
                        with satisfaction guaranteed.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-row quote-section row4">
                    <div className="sec-para">
                      <p className="title">Step 4:</p>
                      <p className="text">
                        Chill out while your space gets cleaned.
                      </p>
                    </div>
                    <div className="iconic-img">
                      <div className="row justify-content-center">
                        <div className="img-holder col-12">
                          <img src={_img_relax} alt="" />
                        </div>
                        <p className="timeline-blockTxt">Relax</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HowItWorks;
