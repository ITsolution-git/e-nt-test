import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated } from "react-native";
import { connect } from "react-redux";

import { logo } from "./../../assests/assets";
import { theme } from '../../themes';
// import { login } from "./../../actions/loginSignup"
import EntreHeader from '../../components/layouts/EntreHeader';
import EntreButton from '../../components/elements/EntreButton';
import { Icon, Input, Button } from 'react-native-elements';


class ForgotPassword extends PureComponent {
 
  state = { 
    email: '', 
    password: '', 
    errorMessage: null 
  }

  constructor(props) {
    super(props);

    this.keyboardHeight = new Animated.Value(0);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      })
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      })
    ]).start();
  };

  render() {
    const {email, password, fullName, username} = this.state;

    return (  
      <Animated.View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
        <EntreHeader
          leftComponent={<TouchableOpacity 
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} 
            onPress={()=>this.props.navigation.goBack()}
          >
            <Icon size={30} name='chevron-left' /> 
            <Text>{'back'}</Text>
          </TouchableOpacity>}
          centerComponent={<View></View>}
          rightComponent={<View></View>}
          navigation={this.props.navigation}
        />

        <View  style={styles.container} >
          <Text style={[theme.font, styles.title]}>Recover your account</Text>
          <View style={{ height: 40 }} />

          <Input
            inputStyle={[theme.font, { fontSize: 15 }]}
            placeholder='Enter email, username or phone number '
            errorStyle={{ color: 'red' }}
            errorMessage={''}
            value={fullName}
            onChangeText={fullName => this.setState({ fullName })}
            autoCapitalize='none'
            textContentType={'name'}
          />
          <View style={{ height: 20 }} />

          <Button
            title={'Next'}
            titleStyle={[theme.pattern, { fontSize: 20, color: theme.textBlue}]}
            buttonStyle={{ borderRadius: 20, width: 100, borderWidth: 2, borderColor: theme.primaryBlue, paddingVertical: 5 }}
            type={'outline'}
          />
        </View>
      </Animated.View>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  {}
)(ForgotPassword);



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
