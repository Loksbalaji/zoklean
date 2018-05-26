import React, { Component } from "react";
import classnames from "classnames";
import style from "./style.css";

import Header from "../Header";
import HomeBanner from "./innerSections/homeBanner.jsx";
import ZokleanIntro from "./innerSections/zokleanIntro.jsx";
import MeetOurPartners from "./innerSections/meetPartners.jsx";
import ZokleanHighlights from "./innerSections/zokleanHighlights.jsx";
import FindusNearyou from "./innerSections/findusNearyou.jsx";
import ClientsCorner from "./innerSections/clientsCorner.jsx";
import Footer from "../Footer";

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <HomeBanner />
        <ZokleanIntro />
        <MeetOurPartners />
        <ZokleanHighlights />
        <FindusNearyou />
        <ClientsCorner />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
