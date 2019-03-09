/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import app from "./src/config/flamelink.js";
import Myroutes from "./src/routes/routes";

export default class App extends Component {
  componentDidMount() {
    const products = await app.content.get('products');
    console.log('All of your products:', products);
  }
  
  render() {
    return <Myroutes />;
  }
}
