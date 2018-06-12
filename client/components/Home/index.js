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
import HowItWorks from "./innerSections/howItWorks";
import Testimonial from "./innerSections/testimonial";
import Footer from "../Footer";

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Header />
        <HomeBanner />
        <ZokleanIntro />
        <HowItWorks />
        <MeetOurPartners />
        <ZokleanHighlights />
        <FindusNearyou />
        <Testimonial />
        <ClientsCorner />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
