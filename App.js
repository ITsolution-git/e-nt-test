import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import AppNavigator from './src/routes/routes';

class App extends Component {
  async componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <AppNavigator />
      </View>
    );
  }
}

export default App;
