import React, { Component } from "react";
import classnames from "classnames";

import meetPartners from "./meetPartners.css";

class MeetOurPartners extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="meetPartners-outer-wrapper">
          <div className="container">
            <div className="row">
              <div className="mp-heading-holder">
                <h3>Meet Our Partners...</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="container partnerDetailsBox">
                  <div className="parnerImgHolder">
                    <img
                      className="img-fluid"
                      src="https://secure.gravatar.com/avatar/9dccc00c2ba4c7c6f8b3ea5dde3f68a9?s=400&d=mm&r=g"
                      alt=""
                    />
                  </div>
                  <h4>Seth Wolfe</h4>
                  <p>
                    Business often become known today through effective
                    marketing. The marketing may be in the form of a regular
                    item or half coulmn society news in the Sunday newspaper.
                    The marketing may be in form...
                  </p>
                </div>
              </div>
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="container partnerDetailsBox">
                  <div className="parnerImgHolder">
                    <img
                      className="img-fluid"
                      src="https://secure.gravatar.com/avatar/9dccc00c2ba4c7c6f8b3ea5dde3f68a9?s=400&d=mm&r=g"
                      alt=""
                    />
                  </div>
                  <h4>Eliza Lee</h4>
                  <p>
                    Business often become known today through effective
                    marketing. The marketing may be in the form of a regular
                    item or half coulmn society news in the Sunday newspaper.
                    The marketing may be in form...
                  </p>
                </div>
              </div>
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="container partnerDetailsBox">
                  <div className="parnerImgHolder">
                    <img
                      className="img-fluid"
                      src="https://secure.gravatar.com/avatar/4e5a2d787343e3a1ccf075c7c115f7c7?s=400&d=mm&r=g"
                      alt=""
                    />
                  </div>
                  <h4>Tillie Wolfe</h4>
                  <p>
                    Business often become known today through effective
                    marketing. The marketing may be in the form of a regular
                    item or half coulmn society news in the Sunday newspaper.
                    The marketing may be in form...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetOurPartners;
