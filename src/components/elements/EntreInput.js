import React, { PureComponent } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Input } from 'react-native-elements';


export default class EntreButton extends React.Component {
  static TYPE_LARGE_ROUND = 1;
  static COLOR_BLUE = 1;
  static COLOR_WHITE = 2;

  render() {

    return (
      <Input ...this.props />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});

