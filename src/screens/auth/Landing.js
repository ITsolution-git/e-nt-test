import React, { PureComponent } from "react";
import { Image, Text, TextInput, View, Button, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";

import { logo } from "./../../assests/assets";
import { theme } from '../../themes';
import EntreButton from '../../components/elements/EntreButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Landing extends React.Component {
 
  state = {
	}

  render() {
    return (
      <View style={styles.container}>
        <Image 
        	style={styles.logo} 
        	source={logo} 
        />
        <View style={{ height: 10 }} />

        <Text
        	style={styles.subText}
        >The hub for Entrepreneurs.</Text>
        <View style={{ height: 150 }} />

        <EntreButton
	        btnStyle={{}}
					textStyle={{}}
					onPress={()=>this.props.navigation.navigate('Login')}
					btnType={EntreButton.TYPE_LARGE_ROUND}
					colorType={EntreButton.COLOR_BLUE}
					btnText={'Log in'}
				/>

        <View style={{ height: 20 }} />
        <EntreButton
	        btnStyle={{}}
					textStyle={{}}
					onPress={()=>this.props.navigation.navigate('Signup')}
					btnType={EntreButton.TYPE_LARGE_ROUND}
					colorType={EntreButton.COLOR_WHITE}
					btnText={'Sign up'}
				/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default connect(state => {
  return {};
}, dispatch => {
  return {};
})(Landing);
