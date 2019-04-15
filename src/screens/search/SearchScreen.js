import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated } from "react-native";
import { connect } from "react-redux";

import { logo } from "./../../assests/assets";
import { theme } from '../../themes';

import EntreHeader from '../../components/layouts/EntreHeader';
import EntreButton from '../../components/elements/EntreButton';
import { Icon, Input, Button } from 'react-native-elements';


class SearchScreen extends PureComponent {
 
  state = { 
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (  
      <View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
        <EntreHeader
          navigation={this.props.navigation}
        />

        <View  style={styles.container} >
          <Text style={[theme.font, styles.title]}>serach</Text>
        </View>
      </View>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  {}
)(SearchScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  }
});
