import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import style from "./style.css";

const _img_closebut = require("../../images/menu-close.png");
const _img_menu_watermark = require("../../images/menu-bg.jpg");

const _style_menu_wrapper = {
  backgroundImage: "url(" + _img_menu_watermark + ")"
};

class Menu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  closeMenu() {
    this.props.callback();
  }

  render() {
    return (
      <div>
        <div
          className={
            "menu-page-holder " +
            (this.props.dispProp ? "display-block" : "display-none")
          }
        >
          <div className="menu-wrapper violet-gradientbg-light">
            <div className="menu-wrapper-bg-img" style={_style_menu_wrapper} />
            <div className="container">
              <div className="row justify-content-center menu-content-box">
                <div className="pos-absolute close-button-holder">
                  <a
                    href="javascript:"
                    className="close-img"
                    onClick={() => this.closeMenu()}
                  >
                    <img src={_img_closebut} alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <ul>
                    <li>
                      <Link to="/team">About Us</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="javascript:">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contractor-signup">Become a contractor</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
