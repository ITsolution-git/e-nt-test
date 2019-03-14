/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import app from "./src/config/flamelink.js";
import { connect } from "react-redux";
import Myroutes from "./src/routes/routes";
import firebase from "react-native-firebase";
import { loginSession } from "./src/actions/loginSignup";
import { View } from "react-native";

class App extends Component {
  async componentDidMount() {
    try {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
          this.props.loginSession(user);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.props.IsUserAuthenticated);
    return (
      <View>
        <Myroutes />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    IsUserAuthenticated: state.profileInfo.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { loginSession }
)(App);
