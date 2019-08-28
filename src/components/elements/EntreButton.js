import React, { PureComponent } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { logo } from './../../assests/assets';
import { theme } from '../../themes';


export default class EntreButton extends React.Component {
  static TYPE_LARGE_ROUND = 1;
  static TYPE_SMALL_ROUND_OUTLINE = 2;
  static TYPE_SMALL_ROUND = 3;
  static TYPE_SMALL_FILTER = 4;
  
  static COLOR_BLUE = 1;
  static COLOR_WHITE = 2;

  render() {
    const { btnStyle, textStyle, onPress, btnType, btnText, colorType, loading } = this.props;

    let subStyle = {
      width: 300,
      height: 50,
      borderRadius: 20,
      backgroundColor:  theme.primaryBlue
    };
    let textSubStyle = {
      color: theme.primaryWhite
    }

    if (btnType == EntreButton.TYPE_LARGE_ROUND) {
      subStyle = {
        width: 300,
        height: 50,
        borderRadius: 30  
      };
      textSubStyle.fontSize = 20;
      textSubStyle.fontWeight = 'bold';
    } else if (btnType == EntreButton.TYPE_WELCOME_ROUND) {
      subStyle = {
        width: 150,
        height: 50,
        borderRadius: 15  
      };
      textSubStyle.fontSize = 15;
    } else if (btnType == EntreButton.TYPE_SMALL_ROUND) {
      subStyle = {
        width: 80,
        height: 30,
        borderRadius: 15
      };
      textSubStyle.fontSize = 15;

    } else if (btnType == EntreButton.TYPE_SMALL_ROUND_OUTLINE) {
      
      subStyle = {
        width: 80,
        height: 30,
        borderRadius: 15
      };
      textSubStyle.fontSize = 15;
    } else if (btnType == EntreButton.TYPE_SMALL_FILTER) {

      subStyle = {
        width: 80,
        height: 30,
        borderRadius: 5
      };
      textSubStyle.fontSize = 14;
    }

    if (colorType == EntreButton.COLOR_BLUE) {
      textSubStyle.color = theme.primaryWhite;
      subStyle.backgroundColor = theme.primaryBlue;
      if (this.props.outline) {
        textSubStyle.color = theme.primaryBlue;
        subStyle.backgroundColor = theme.primaryWhite;
        subStyle.borderWidth = 2;
        subStyle.borderColor = theme.primaryBlue;
      }
    } else if (colorType == EntreButton.COLOR_WHITE) {
      textSubStyle.color = theme.primaryBlue;
      subStyle = {
        ...subStyle,
        backgroundColor: theme.primaryWhite,
        borderWidth: 2,
        borderColor: '#707070'
      }
    } else if (colorType == EntreButton.COLOR_GREY) {
      textSubStyle.color = theme.textGrey1;
      subStyle.backgroundColor = '#E9EBEF';
    }

    return (
      <TouchableOpacity style={[styles.container, subStyle, btnStyle]} onPress={onPress}>
        { loading 
          ? <ActivityIndicator color={textSubStyle.color}/>
          : <Text style={[textSubStyle, textStyle]}>{btnText}</Text>
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
  	width: 240, 
  	height: 90
  },

  subText: {
  	color: theme.textGrey
  }
});

