import React, { PureComponent } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from "react-redux";

class signup extends PureComponent {
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
          <Button title="Sign Up" />
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

export default connect(
  {},
  {}
)(signup);

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
