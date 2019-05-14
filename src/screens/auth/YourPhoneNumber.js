// TODO; OTP Verification 
// TODO: Display errorMessage

import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated } from "react-native";
import { logo } from "./../../assests/assets";
import { theme } from '../../themes';
// import { login } from "./../../actions/loginSignup"
import EntreHeader from '../../components/layouts/EntreHeader';
import EntreButton from '../../components/elements/EntreButton';
import { Icon, Input, Button } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'
import { UserDetails } from "./../../helperFunction/firebaseDocStore"
import { Bars, } from 'react-native-loader';
export default class YourPhoneNumber extends PureComponent {
  constructor(props) {
    super(props)
    this.username = this.props.navigation.state.params.username
    this.keyboardHeight = new Animated.Value(0);
  }
  state = {
    errorMessage: null,
    phoneNumber: null,
    loading: false
  }

  componentWillMount() {
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

  phoneNumber = async () => {
    const number = this.phone.state.formattedNumber
    if (number && typeof number === 'number') {
      const intializeUserClass = new UserDetails(this.username)
      this.setState({ loading: true })
      try {
        await intializeUserClass.updateUserData({ phoneNumber: number })
        this.setState({ loading: false })
        this.props.navigation.navigate('onboarding')
      } catch (error) {
        console.log('Error In Phone number Method:', error)
        if (typeof error === 'string') this.setState({ errorMessage: error })
        else this.setState({ errorMessage: 'We Encountered some problem storing your phone number' })
      }
    } else {
      this.setState({ errorMessage: 'Missing Phone number or invalid phone number' })
    }
  }



  render() {
    if (!this.state.loading) {
      return (
        <Animated.View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
          <EntreHeader
            leftComponent={<TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon size={30} name='chevron-left' />
              <Text>{'back'}</Text>
            </TouchableOpacity>}
            centerComponent={<View></View>}
            rightComponent={<View></View>}
            navigation={this.props.navigation}
          />

          <View style={styles.container} >
            <Text style={[theme.font, styles.title]}>Your Phone Number</Text>
            <View style={{ height: 40 }} />

            <PhoneInput
              ref={(ref) => { this.phone = ref; }}
              onPressFlag={this.onPressFlag}
            />
            <View style={{ height: 20 }} />

            <Button
              title={'Next'}
              titleStyle={[theme.pattern, { fontSize: 20, color: theme.textBlue }]}
              buttonStyle={{ borderRadius: 20, width: 100, borderWidth: 2, borderColor: theme.primaryBlue, paddingVertical: 5 }}
              type={'outline'}
              onPress={() => { this.phoneNumber() }}
            />
          </View>
        </Animated.View>
      );
    } else if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <Bars size={20} color="#1976D2" />
        </View>
      )
    }
  }
}

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
  },
  loading: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});
