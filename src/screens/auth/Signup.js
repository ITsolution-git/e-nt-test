import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated, ScrollView } from "react-native";
import { connect } from "react-redux";
import flamelink from 'flamelink';
import { logo } from "./../../assests/assets";
import { theme } from '../../themes';
import EntreHeader from '../../components/layouts/EntreHeader';
import EntreButton from '../../components/elements/EntreButton';
import { Icon, Input, Button } from 'react-native-elements';
//Firebase Authentication 
import { UserDetails } from "./../../helperFunction/firebaseDocStore"
import firebase from "firebase"
import AnimatedLoader from "react-native-animated-loader";
import { Bars, } from 'react-native-loader';


// To hide logo image when user types
const IMAGE_HEIGHT = 90
const IMAGE_HEIGHT_SMALL = 0

class Signup extends PureComponent {

  state = {
    email: null,
    password: null,
    fullName: null,
    username: null,
    errorMessage: null,
    loading: false
  }

  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0); // 
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount() {
    //These are triggered on keyboard hide and show
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }


  keyboardWillShow = (event) => {
    // Animates showing of keyboard and hiding of image
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
    // Animates hiding of keyboard and showing of image 
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

  handleLogin = async () => {
    const { email, password, username, fullName } = this.state
    if (email && password && username && fullName) {
      if (this.state.errorMessage) this.setState({ errorMessage: null })
      this.setState({ loading: true })
      try {
        const intializedUserClass = new UserDetails(username)
        const usernameExsist = await intializedUserClass.checkUserNameExsist()
        if (!usernameExsist.exists) {
          await firebase.auth().createUserWithEmailAndPassword(email, password)
          const data = { fullName, email, username }
          await intializedUserClass.createNewUser(data)
          this.props.navigation.navigate('YourPhoneNumber', { username })
        } else if (usernameExsist) {
          this.setState({ errorMessage: "Username already exsist", loading: false })
        }
      } catch (error) {
        console.log(error)
        if (typeof error === 'string') this.setState({ errorMessage: error })
        else this.setState({ errorMessage: 'something went wrong' })
        if (this.state.loading) this.setState({ loading: false })
      }
    } else {
      this.setState({ errorMessage: "You have missed adding details in one of the field" })

    }
  }

  render() {
    const { email, password, fullName, username } = this.state;

    if (!this.state.loading) {

      return (
        // Animated View Component for Animations
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
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
              {this.state.errorMessage ?
                <View style={{ backgroundColor: "red", padding: 5, marginBottom: 10, borderRadius: 3 }}>
                  <Text style={{ color: "white" }}>{this.state.errorMessage} </Text>
                </View>
                : null}
              <Input
                inputStyle={[theme.font, { fontSize: 15 }]}
                placeholder='Full Name'
                errorStyle={{ color: 'red' }}
                errorMessage={''}
                value={fullName}
                onChangeText={fullName => this.setState({ fullName })}
                autoCapitalize='none'
                textContentType={'name'}
              />
              <View style={{ height: 20 }} />

              <Input
                inputStyle={[theme.font, { fontSize: 15 }]}
                placeholder='Username'
                errorStyle={{ color: 'red' }}
                errorMessage={''}
                value={username}
                onChangeText={username => this.setState({ username })}
                autoCapitalize='none'
                textContentType={'username'}
              />
              <View style={{ height: 20 }} />

              <Input
                inputStyle={[theme.font, { fontSize: 15 }]}
                placeholder='Email'
                errorStyle={{ color: 'red' }}
                errorMessage={''}
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
                errorMessage={''}
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
              <View style={{ height: 40 }} />

              <EntreButton
                btnStyle={{}}
                textStyle={{}}
                onPress={() => this.handleLogin()}
                btnType={EntreButton.TYPE_LARGE_ROUND}
                colorType={EntreButton.COLOR_BLUE}
                btnText={'Sign up'}
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
        </ScrollView>
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

export default Signup



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
  },
  loading: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});
