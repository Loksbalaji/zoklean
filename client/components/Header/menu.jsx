import React, { Component } from "react";
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
    this.props.closeMenuTab()
  }

  render() {
    return (
      <div className="menu-page-holder">
        <div className="menu-wrapper violet-gradientbg-light">
          <div className="menu-wrapper-bg-img" style={_style_menu_wrapper} />
          <div className="container">
            <div className="row justify-content-center menu-content-box">
              <div className="pos-absolute close-button-holder">
                <a
                  href="javascript:"
                  className="close-img"
                  onClick={() => {this.closeMenu()}}
                >
                  <img src={_img_closebut} alt="" />
                </a>
              </div>
              <div className="col-12">
                <ul>
                  <li>
                    <a href="/team">About Us</a>
                  </li>
                  <li>
                    <a href="/careers">Careers</a>
                  </li>
                  <li>
                    <a href="javascript:">FAQ</a>
                  </li>
                  <li>
                    <a href="javascript:">Blog</a>
                  </li>
                  <li>
                    <a href="">Become a contractor</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
