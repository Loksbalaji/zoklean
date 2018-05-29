import React, { Component } from "react";
import classnames from "classnames";

import style from "./style.css";

import Header from "../Header";
import Footer from "../Footer";

const _img_promobanner = require("../../images/Team/team-banner.png");
const _img_tm1 = require("../../images/Team/team-member1.jpg");
const _img_tm2 = require("../../images/Team/team-member2.jpg");
const _img_tm3 = require("../../images/Team/team-member3.jpg");

class MyTeam extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="team-page-wrapper">
          <div className="row justify-content-center">
            <div className="banner-img">
              <img src={_img_promobanner} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row team-content-holder justify-content-center">
                <div className="col-12">
                  <h1 className="team-tit font-avenir-roman">Meet the team</h1>
                </div>
                <div className="row team-members">
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="row justify-content-center imgHolder">
                      <div className="col-8 txtCenter disp-vertical-bottom">
                        <img
                          src={_img_tm1}
                          className="rounded-circle banner2-circle-img"
                          alt="Shane Holloway"
                        />
                      </div>
                    </div>
                    <h4 className="banner2-coltit">Shane Holloway</h4>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="row justify-content-center imgHolder">
                      <div className="col-8 txtCenter disp-vertical-bottom">
                        <img
                          src={_img_tm2}
                          className="rounded-circle banner2-circle-img"
                          alt="Jason Adams"
                        />
                      </div>
                    </div>
                    <h4 className="banner2-coltit">Jason Adams</h4>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="row justify-content-center imgHolder">
                      <div className="col-8 txtCenter disp-vertical-bottom">
                        <img
                          src={_img_tm3}
                          className="rounded-circle banner2-circle-img"
                          alt="Roxie Clark"
                        />
                      </div>
                    </div>
                    <h4 className="banner2-coltit">Roxie Clark</h4>
                  </div>
                </div>

                <div className="col-12">
                  <h2 className="team-tit font-avenir-roman">About Us</h2>
                </div>
                <div className="aboutus-content">
                  <div className="row">
                    <div className="container">
                      <div className="col-12 font-avenir-roman">
                        <p className="para">
                          We’re a team of people who believe in a simpler way to
                          find a cleaning service. We were sick of the norm when
                          it came to finding a professional cleaner - spotty
                          pricing, spotty service and spotty reliability. After
                          all, how in the world was finding a cleaning service
                          more of a chore than the one we were trying to get off
                          our plate? That’s why we created a network of
                          established cleaning professionals who are upfront
                          about what they charge, experts on how to clean and
                          committed to customer service.
                        </p>
                        <p className="para">
                          Zoklean is the premiere platform for booking your next
                          residential or commercial cleaning. We vet each
                          company to ensure that they have top-notch cleaning
                          professionals with an average customer rating of 4.75
                          or above. Our extensive screening process means that
                          each cleaning business must be licensed, have over 3
                          years of experience with positive references, and pass
                          stringent criminal background checks for each
                          employee. We do all of the hard work to ensure that
                          you get reliable services with cleaners you can trust.
                          Feel pleased knowing your space is cleaned by the best
                          with satisfaction guaranteed and no hidden fees.
                        </p>
                        <p className="para">
                          With Zoklean, the process of finding a cleaning
                          service is easy. With a swipe of your finger, you can
                          book and schedule recurring appointments on demand. We
                          make it simple through honest pricing, open
                          communication, and technological ease. You can even
                          get to know your cleaner through facial recognition.
                          Questions or concerns? We are here 24/7 to provide
                          support to both our customers and our cleaners. Unlike
                          competitors, we provide back-end management tools to
                          help our cleaning companies succeed. With such
                          unparalleled support, consumers and business owners
                          alike can place their trust in Zoklean.
                        </p>
                        <p className="para">
                          Through our partnership with water.org, Zoklean helps
                          provide clean water to people around the world. We
                          donate $1 for every cleaning that gets completed
                          through our platform. As a purpose driven company, we
                          believe in giving back. Zoklean is cleaning for the
                          modern age.
                        </p>
                      </div>
                    </div>
                    <div className="row-submit-cta row justify-content-center">
                      <a href="javascript:" className="green-cta" title="">
                        Book a Cleaning
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyTeam;
