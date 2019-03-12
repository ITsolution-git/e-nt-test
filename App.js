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
import Myroutes from "./src/routes/routes";
import firebase from 'react-native-firebase'

export default class App extends Component {

componentWillMount() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {

    }
  })
}

  render() {
    return (
    <Myroutes />
    )
  }
}
