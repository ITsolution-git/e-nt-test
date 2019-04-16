import React from "react";
import { StyleSheet } from 'react-native';

import { Text } from "react-native-elements";
import { theme } from '../../themes';

export default class EntreText extends React.Component {

  render() {
    const { bold, style, children, size, ...other} = this.props;
    let extended = {
      fontSize: 13
    };

    if (bold) {
      extended.fontWeight = 'bold';
    }

    if (theme[this.props.color]) {
      extended.color = theme[this.props.color];
    } else if(this.props.color) {
      extended.color = this.props.color;
    }

    if (size) {
      extended.fontSize = size;
    }
    return (
      <Text 
        style={[theme.font, extended, style]} {...other} 
        h1Style={{fontSize: 25}}
        h2Style={{fontSize: 20}}
        h3Style={{fontSize: 18}}
        h4Style={{fontSize: 15}}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  
});

