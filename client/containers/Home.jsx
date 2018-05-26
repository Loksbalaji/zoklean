import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import "./HomeStyles.css";

import HomePage from "../components/Home/index";

const Home = ({ switchLanguage }) => (
  <div>
    Zoklean Home App
  </div>
);

Home.propTypes = {
  switchLanguage: PropTypes.func.isRequired
};

export default Home;
