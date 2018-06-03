import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as FontAwesome from "react-icons/lib/fa";

import style from "./style.css";

class BillingInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="billing-content-holder">
          <div className="row font-avenir-roman">
            <div className="container">
              <div className="col-12">
                <div className="title">Billing Info</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BillingInfo;
