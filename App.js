import React, { Component } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";

import firebase from "react-native-firebase";
import { loginSession } from "./src/actions/loginSignup";
import AppNavigator from "./src/routes/routes";

class App extends Component {
  async componentDidMount() {
    // try {
    //   firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //       console.log(user);
    //       this.props.loginSession(user);
    //     }
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <AppNavigator />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.profile.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { loginSession }
)(App);
