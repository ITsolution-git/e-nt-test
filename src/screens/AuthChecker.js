
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFBUser, getProfile, setToken } from '../actions/profile';

class AuthChecker extends React.Component {
  constructor() {
    super()

  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(async (user) => {
    	if (user) {
    		this.props.setFBUser(user);
    		const token = await user.getIdToken();
    		this.props.setToken(token);
        await Promise.all([
          this.props.getProfile()
        ])
    	}
    	if (user) {
    		// if (!user.phoneNumber) {		
    		// 	this.props.navigation.navigate('YourPhoneNumber');
    		// } else {
    			this.props.navigation.navigate('drawer');
    		// }
    	} else {
      	this.props.navigation.navigate('Landing');
    	}
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
  return {
    isAuthenticated: state.profile.isAuthenticated,
  }
};

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
    {
    	setFBUser,
    	getProfile,
    	setToken
    },
    dispatch,
  ),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthChecker);
