// TODO; OTP Verification 
// TODO: Display errorMessage
// TODO: Check if phone number already exsist in database

import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated } from "react-native";
import { logo } from "./../../assests/assets";
import { theme } from '../../themes';


import EntreHeader from '../../components/layouts/EntreHeader';
import {
  EntreButton,
  EntreErrorMessage
} from '../../components/elements';
import { Icon, Input, Button } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'
import { Bars, } from 'react-native-loader';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFBUser, updatePhoneNumber } from '../../actions/profile';

class YourPhoneNumber extends PureComponent {
  constructor(props) {
    super(props)
    this.keyboardHeight = new Animated.Value(0);
  }
  state = {
    errorMessage: null,
    phoneNumber: '123',
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

  submitPhoneNumber = async () => {
    const number = this.phone.state.formattedNumber;
    
    if (number) {
      this.setState({ loading: true });

      try {
        // await this.props.updatePhoneNumber(number);

        this.setState({ loading: false });
        this.props.navigation.navigate('onboarding');
      } catch (error) {
        if (typeof error === 'string') {
          this.setState({ errorMessage: error });
        } else {
          this.setState({ errorMessage: 'We Encountered some problem storing your phone number' });
        }
        this.setState({ loading: false })
      }
    } else {
      this.setState({ errorMessage: 'Missing Phone number or invalid phone number' })
    }
  }



  render() {
    const { loading, errorMessage } = this.state;
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

          <EntreErrorMessage message={errorMessage} />
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
            onPress={() => { this.submitPhoneNumber() }}
            loading={loading}
          />
        </View>
      </Animated.View>
    );
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


const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      updateFBUser,
      updatePhoneNumber
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourPhoneNumber);

