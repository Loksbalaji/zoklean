import React, { Component } from "react";
import classnames from "classnames";

import zokleanIntroCss from "./zokleanIntro.css";
import { Animated } from "react-animated-css";

const _img_pricing = require("../../../images/pricing.png");
const _img_professional = require("../../../images/professionals.png");
const _img_service = require("../../../images/service.png");

class ZokleanIntro extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showAnimation: false
    };
  }

  componentDidMount() {
    var offsetSectionHeight = parseInt(this.refs.banner2OuterWrapper.offsetTop);
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
    if (scrollPos > heightDiff - 150) {
      this.setState({
        showAnimation: true
      });
    } else {
      this.setState({});
    }
  }

  render() {
    return (
      <div>
        <div className="banner2-outer-wrapper" ref="banner2OuterWrapper">
          <div className="container">
            <div className="row">
              <div className="baaner2-introPara">
                <div className="row justify-content-center text-xs-center">
                  <div className="col-11">
                    At Zoklean, you can schedule the best local cleaning
                    companies instantly at fixed price. We offer cleaning
                    services on demand with professionals you can trust. Don't
                    stress and leave youe mess at Zoklean!
                  </div>
                </div>
              </div>
            </div>
            <div className="row banner2-lightCols">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="row justify-content-center imgHolder">
                  <div className="col-8 txtCenter disp-vertical-bottom">
                    {this.state.showAnimation ? (
                      <Animated
                        animationIn="zoomIn"
                        animationOut="fadeOut"
                        isVisible={true}
                      >
                        <img
                          src={_img_pricing}
                          className="rounded-circle banner2-circle-img"
                          alt="Cinque Terre"
                        />
                      </Animated>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <h4 className="banner2-coltit">Honest Pricing</h4>
                <p className="width-80 banner2-colPara">
                  Get a fixed rate instantly through a modern platform
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="row justify-content-center imgHolder">
                  <div className="col-8 txtCenter disp-vertical-bottom">
                    {this.state.showAnimation ? (
                      <Animated
                        animationIn="zoomIn"
                        animationOut="fadeOut"
                        isVisible={true}
                      >
                        <img
                          src={_img_professional}
                          className="rounded-circle banner2-circle-img"
                          alt="Cinque Terre"
                        />
                      </Animated>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <h4 className="banner2-coltit">
                  Screened Cleaning Professionals
                </h4>
                <p className="banner2-colPara">
                  Don't worry, we investigate each cleaning company to ensure
                  that they're legit
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="row justify-content-center imgHolder">
                  <div className="col-8 txtCenter disp-vertical-bottom">
                    {this.state.showAnimation ? (
                      <Animated
                        animationIn="zoomIn"
                        animationOut="fadeOut"
                        isVisible={true}
                      >
                        <img
                          src={_img_service}
                          className="rounded-circle banner2-circle-img"
                          alt="Cinque Terre"
                        />
                      </Animated>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <h4 className="banner2-coltit">Reliable Service</h4>
                <p className="width-80 banner2-colPara">
                  Feel secure knowing that your satisfaction is guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZokleanIntro;
