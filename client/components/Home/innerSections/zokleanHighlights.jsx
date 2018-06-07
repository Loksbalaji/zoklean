import React, { Component } from "react";
import classnames from "classnames";

import zokleanHighlightsCSS from "./zokleanHighlights.css";
import { Animated } from "react-animated-css";

const _img_cleanProfessional = require("../../../images/Home/cleaner-prof.png");
const _img_violetTick = require("../../../images/violetHighlightBullet.png");

class ZokleanHighlights extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      zkHightlightAnimation: false
    };
  }

  componentDidMount() {
    var offsetSectionHeight = parseInt(
      this.refs.zkHighlightSectionOuterWrapper.offsetTop
    );
    window.addEventListener(
      "scroll",
      this._calcScroll.bind(this, offsetSectionHeight)
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._calcScroll);
  }

  _calcScroll(offsetSectionHeight) {
    var _window = window;
    var heightDiff = parseInt(offsetSectionHeight);
    var scrollPos = _window.scrollY;
    if (scrollPos > heightDiff) {
      this.setState({
        zkHightlightAnimation: true
      });
    } else {
      this.setState({});
    }
  }

  render() {
    return (
      <div ref="zkHighlightSectionOuterWrapper">
        <div className="zkHighlightSectionOuterWrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 nopadding row-eq-height disp-vertical-center">
                <img src={_img_cleanProfessional} alt="" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 nopadding row-eq-height highlights-content-holder">
                <div className="container">
                  <div className="bullet-points">
                    <ul>
                      <li>
                        <i className="hl-buttet-icon">
                          <img src={_img_violetTick} alt="" />
                        </i>
                        {this.state.zkHightlightAnimation ? (
                          <Animated
                            animationIn="fadeInRight"
                            animationOut="fadeOut"
                            isVisible={true}
                            animationInDelay={20}
                          >
                            Join for Free
                          </Animated>
                        ) : (
                          ""
                        )}
                      </li>
                      <li>
                        <i className="hl-buttet-icon">
                          <img src={_img_violetTick} alt="" />
                        </i>
                        {this.state.zkHightlightAnimation ? (
                          <Animated
                            animationIn="fadeInRight"
                            animationOut="fadeOut"
                            isVisible={true}
                            animationInDelay={600}
                          >
                            Gain customers
                          </Animated>
                        ) : (
                          ""
                        )}
                      </li>
                      <li>
                        <i className="hl-buttet-icon">
                          <img src={_img_violetTick} alt="" />
                        </i>
                        {this.state.zkHightlightAnimation ? (
                          <Animated
                            animationIn="fadeInRight"
                            animationOut="fadeOut"
                            isVisible={true}
                            animationInDelay={1200}
                          >
                            Optimize Booking
                          </Animated>
                        ) : (
                          ""
                        )}
                      </li>
                    </ul>
                    {this.state.zkHightlightAnimation ? (
                      <Animated
                        animationIn="bounceIn"
                        animationOut="fadeOut"
                        isVisible={true}
                        animationInDelay={2000}
                      >
                        <button className="zkgreen-cta-butt">
                          Become a contractor
                        </button>
                      </Animated>
                    ) : (
                      ""
                    )}
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
