import React, { PureComponent } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../themes';

import {
} from './index';

export default class EntreErrorMessage extends React.Component {


  render() {
    const { message, style, textStyle, ...props } = this.props;

    if (!message) {
    	return null;
    }

    return (
      <View style={{ backgroundColor: 'red', padding: 5, marginBottom: 10, borderRadius: 3, width: '100%', ...style }}>
        <Text style={{ color: 'white', ...textStyle }}>{message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});