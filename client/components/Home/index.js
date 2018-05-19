import React, { Component } from "react";
import classnames from "classnames";
import style from "./style.css";

import ZokleanIntro from "./innerSections/zokleanIntro.jsx";
import MeetOurPartners from "./innerSections/meetPartners.jsx";

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ZokleanIntro />
        <MeetOurPartners />
      </div>
    );
  }
}

export default HomePage;
