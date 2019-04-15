import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'

export default class ProfileScreen extends React.Component {

  render() {
   
    return (
      <View style={styles.container}>
        <Text>
          Hi 
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
