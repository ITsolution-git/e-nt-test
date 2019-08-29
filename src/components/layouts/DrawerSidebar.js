import React, { Component } from 'react';
import { NavigationActions, SafeAreaView } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { 
  Icon,
  Avatar,
  Image
} from 'react-native-elements';

import { profile_border } from './../../assests/assets';
import { theme } from '../../themes';

import {
  EntreText,
  EntreAvatar
} from '../elements/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/profile';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const menuFields = [
  { value: 'HomeDrawer', label: 'Home', icon: 'home', type: 'material-community', iconColor: theme.textBlue},
  { value: 'HomeDrawer', label: 'Entre Pro', icon: 'calendar-text', type: 'material-community', iconColor: theme.textBlue },
  { value: 'HomeDrawer', label: 'Enter Builder', icon: 'money', type: 'font-awesome', iconColor: theme.textBlue, iconSize: 20 },
  { value: 'SupportScreen', label: 'Support', icon: 'account', type: 'material-community', iconColor: theme.textBlue },
  { value: 'SettingsScreen', label: 'Settings', icon: 'information-outline', type: 'material-community', iconColor: theme.textGrey },
  { value: 'TOSScreen', label: 'Privacy', icon: 'security', type: 'material-community', iconColor: theme.textGrey },
];

const bottomMenuFields = [
  { value: 'Landing', label: 'Log out', icon: 'logout', type: 'material-community', iconColor: theme.textGrey }
];

export class DrawerSidebar extends Component {
  renderItem = (item) => {
    return (
      <TouchableOpacity key={item.value} style={styles.menuItem} key={item.label} 
          onPress={this.navigateToScreen(item)}>

    <Icon
      type={item.type}
      name={item.icon}
      size={item.iconSize || 24}
      color={item.iconColor}
    />
    <View style={{width: 10}} />
        <Text
          style={styles.menuItemText}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  }

  renderMenuFields = () => {
    return (
      <View style={styles.menuContainer}>
        <View>{menuFields.map((item) => this.renderItem(item))}</View>
      </View>
    )
  };

  navigateToScreen = (item) => () => {
    if (item.label == 'Log out') {
      this.props.logout();
      return;
    }
    const navigateAction = NavigationActions.navigate({
      routeName: item.value
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  render () {
    const { profile } = this.props;

    return (
      <SafeAreaView  style={{ flex: 1 }}>
        {!!profile && 
          <View style={styles.header}>
            <Avatar
              rounded
              source={{ uri: profile.avatar }}
              size={100}
            />
            <View style={{height: 20}} />

            <EntreText color='textWhite' size={30}>{profile.full_name}</EntreText>
            <View style={{height: 10}} />
            <EntreText color='#6C6F7D' size={14}>{profile.username}</EntreText>
          </View>
        }
        <Image
          source={profile_border}
          style={{height: 5, width: '100%'}}
        />
        <ScrollView>
          <View style={styles.menuContainer}>
            <View>{menuFields.map((item) => this.renderItem(item))}</View>
            <View style={{height: 100}} />
            <View>{bottomMenuFields.map((item) => this.renderItem(item))}</View>
          </View>
        </ScrollView>

        {/*<View style={styles.menuContainer}>
          <View>{bottomMenuFields.map((item) => this.renderItem(item))}</View>
        </View>*/}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#FFF',
    borderBottomWidth: 0
  },

  header: {
    backgroundColor: '#2A2E43',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },

  menuContainer: {
    marginHorizontal: 20,
    marginVertical: 30
  },

  menuItem: {
    height: 70,
    flexDirection: 'row'
  },
  menuItemText: {
    ...theme.font,
    fontSize: 18
  }
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      logout
    },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerSidebar);

