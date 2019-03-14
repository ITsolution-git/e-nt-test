import React, { PureComponent } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from "react-redux";
import { signup } from "./../../actions/loginSignup";

class Signup extends PureComponent {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleSignUp = () => {
    this.props.signup(this.state.email, this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>ENTRE</Text>
        <Text>Sign Up</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
        />
        <View style={styles.button}>
          <Button title="Sign Up" onPress={this.handleSignUp} />
        </View>
        <View style={styles.button}>
          <Button
            title="Already have an account? Login"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    paddingLeft: 5
  },
  button: {
    marginTop: 5
  }
});

export default connect(
  {},
  { signup }
)(Signup);
