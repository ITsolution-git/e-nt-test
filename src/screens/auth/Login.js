import React, { PureComponent, Fragment } from 'react';
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated } from 'react-native';
import { connect } from 'react-redux';

import { logo } from './../../assests/assets';
import { theme } from '../../themes';
// import { login } from './../../actions/loginSignup'
import EntreHeader from '../../components/layouts/EntreHeader';
import {
  EntreButton,
  EntreErrorMessage
} from '../../components/elements';
import { Icon, Input, Button } from 'react-native-elements';
import firebase from 'react-native-firebase'


const IMAGE_HEIGHT = 90;
const IMAGE_HEIGHT_SMALL = 0;

class Login extends PureComponent {

  state = {
    email: 'test1@gmail.com',
    password: '123password',
    errorMessage: null,
    loading: false,
    errors: {}
  }

  constructor(props) {
    super(props);

    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
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
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT_SMALL,
      }),
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT,
      }),
    ]).start();
  };

  collectError = (field) => {
    if (Array.isArray(this.state.errors[field]) && this.state.errors[field].length > 0) {
      return this.state.errors[field][0];
    } else {
      return '';
    }
  }

  validate = async () => {
    let valid = true;
    let errors = {};
    const { email, password } = this.state

    if (!email) {
      errors['email'] = ['Email is required'];
      valid = false;
    }
    if (!password) {
      errors['password'] = ['Password is required'];
      valid = false;
    }
    // TODO: check id duplication status
    this.setState({ valid, errors });
    return valid;
  }


  handleLogin = async () => {
    const { email, password } = this.state;

    if (!await this.validate()) {
      return ;
    }

    try {
      this.setState({ loading: true });
      const firebaseLogin = await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({ loading: false });
    } catch (error) {
      if (typeof error === 'string') {
        this.setState({ errorMessage: error });
      } else if (error.message) {
        this.setState({ errorMessage: error.message });
      } else {
        this.setState({ errorMessage: 'Something went wrong' });
      }
      this.setState({ loading: false })
    }

  }

  render() {
    const { email, password, errorMessage, loading } = this.state;

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
          <Animated.Image style={[styles.logo, { height: this.imageHeight }]} source={logo} />
          <View style={{ height: 20 }} />

          <EntreErrorMessage message={errorMessage} />
          <Input
            inputStyle={[theme.font, { fontSize: 15 }]}
            placeholder='Email'
            errorStyle={{ color: 'red' }}
            errorMessage={this.collectError('email')}
            value={email}
            onChangeText={email => this.setState({ email })}
            autoCapitalize='none'
            textContentType={'emailAddress'}
          />
          <View style={{ height: 20 }} />

          <Input
            inputStyle={[theme.font, { fontSize: 15 }]}
            placeholder='Password'
            errorStyle={{ color: 'red' }}
            errorMessage={this.collectError('password')}
            value={password}
            onChangeText={password => this.setState({ password })}
            autoCapitalize='none'
            rightIcon={
              <Icon
                type='material-community'
                name='eye'
                size={24}
                color='black'
              />
            }
            textContentType={'password'}
            secureTextEntry={true}
          />
          <View style={{ height: 10 }} />

          <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')} style={{ alignSelf: 'flex-end' }}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{ height: 40 }} />

          <EntreButton
            btnStyle={{}}
            textStyle={{}}
            onPress={() => this.handleLogin()}
            btnType={EntreButton.TYPE_LARGE_ROUND}
            colorType={EntreButton.COLOR_BLUE}
            btnText={'Log in'}
            loading={loading}
          />
          <View style={{ height: 20 }} />

          <Button
            icon={
              <Icon
                type='antdesign'
                name='linkedin-square'
                size={30}
                color='white'
              />
            }
            title={'Sign in with Linkedin'}
            titleStyle={[theme.pattern, { fontSize: 15, paddingLeft: 10 }]}
            buttonStyle={{ borderRadius: 6 }}
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
)(Login);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  logo: {
    width: 240,
    height: IMAGE_HEIGHT
  },
  forgotPassword: {
    color: theme.textBlue
  }
});
