import React, { PureComponent } from "react";
import { Image, Text, TextInput, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import logo from "./../../assests/images/logo.png";
import { login } from "./../../actions/loginSignup"

class Login extends PureComponent {
 
  state = { 
  email: '', 
  password: '', 
  errorMessage: null 
}

  handleLogin = () => {
    this.props.login(this.state.email, this.state.password)
  }
  render() {
    console.log(this.props.navigation.navigate)
    return (
      <View>
        <Image style={styles.logo} source={logo} />
        <Text>Login</Text>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          value="this.state.email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <View style={styles.button}>
          <Button style={styles.button} color="white" title="Login" />
        </View>

        <View style={styles.button}>
          <Button
            color="white"
            title="Don't have an account? Sign Up"
            onPress={() => this.props.navigation.navigate("signup")}
          />
        </View>
      </View>
    );
  }
}

export default connect(
  {},
  {login}
)(Login);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: { width: 200, height: 60, margin: 20 },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 30,
    paddingLeft: 5
  },
  button: {
    borderWidth: 0.2,
    borderColor: "#309bf8",
    backgroundColor: "#309bf8",
    borderRadius: 2,
    marginTop: 5,
    height: 45,
    width: "90%"
  }
});
