import React, { PureComponent } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from "react-redux";
import firebase from 'react-native-firebase'

class signup extends PureComponent {

  state = { 
    email: '', 
    password: '', 
    errorMessage: null 
  }

  handleSignUp = () => {  
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ENTRE</Text>
        <Text>Sign Up</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
        />
        <View style={styles.button}>
          <Button title="Sign Up" 
           onPress={this.handleSignUp}
          />
          
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

// export default connect(
//   {},
//   {}
// )(signup);
export default signup

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
