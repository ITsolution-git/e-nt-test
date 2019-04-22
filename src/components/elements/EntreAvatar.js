import React, { PureComponent } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from '../../themes';

import {
} from './index';
import {
  Avatar,
} from 'react-native-elements';

import { kFormatter } from '../../utils';

export default class EntreAvatar extends React.Component {


  render() {
    const { size, ...props } = this.props;
    return (
      <Avatar
        source={{
          uri: this.props.source.uri
        }}
        size={this.props.size || 35}
        avatarStyle={{ borderRadius: 12 }}
        overlayContainerStyle={{ borderRadius: 12 }}
        {...this.props}
        />
    );
  }
}

const styles = StyleSheet.create({
});

