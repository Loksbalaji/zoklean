import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import PropsRoute from "../components/PropsRoute";
import * as actions from "../actions";

import Login from "../components/Login";
import Signup from "../components/Signup";
import ContractorSignup from "../components/contractorSignup";
import ContactPage from "../components/contact";

class App extends React.Component {
  //eslint-disable-line
  render() {
    return (
      <Router>
        <Switch>
          <PropsRoute exact path="/" component={Home} {...this.props} />
          <PropsRoute path="/login" component={Login} />
          <PropsRoute path="/signup" component={Signup} />
          <PropsRoute path="/contractor-signup" component={ContractorSignup} />
          <PropsRoute path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  language: state.language
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
