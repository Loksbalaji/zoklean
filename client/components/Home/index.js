import React, { Component } from "react";
import classnames from "classnames";
import style from "./style.css";

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={classnames(style.banner2)}>
        <div>
          At Zoklean, you can schedule the best local cleaning companies
          instantly at fixed price. We offer cleaning services on demand with
          professionals you can trust. Don't stress and leave youe mess at
          Zoklean!
        </div>
      </div>
    );
  }
}

export default HomePage;
