import React, { PureComponent } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Input } from 'react-native-elements';


export default class EntreButton extends React.Component {
  render() {

    return (
      <Input />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});

