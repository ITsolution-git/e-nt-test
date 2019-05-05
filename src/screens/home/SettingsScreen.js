import React, { PureComponent, Fragment } from "react";
import {
  Image, 
  Text, 
  TextInput, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Keyboard, 
  Animated,
  ScrollView,
  Switch
} from "react-native";
import { connect } from "react-redux";

import { logo } from "./../../assests/assets";
import { theme } from '../../themes';

import EntreHeader from '../../components/layouts/EntreHeader';

import {
  EntreButton,
  EntreText,
} from '../../components/elements';
import { 
  Icon, 
  Input, 
  Button 
} from 'react-native-elements';


class SettingsScreen extends PureComponent {
  state = { 
  }

  render() {
    const { faqs } = this.props;

    return (  
      <View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
        <EntreHeader
          leftComponent={<TouchableOpacity 
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} 
            onPress={()=>this.props.navigation.goBack()}
          >
            <Icon size={30} name='chevron-left' /> 
            <Text>{'back'}</Text>
          </TouchableOpacity>}
          centerComponent={<View></View>}
          rightComponent={<View style={{width: 100}}>
            <EntreText h1 bold>Settings</EntreText>
            </View>}
          navigation={this.props.navigation}
        />

        <ScrollView  style={styles.container} >
          <View style={styles.settingContainer}>
            <View style={styles.settingItem}>
              <EntreText h4 bold>Login with Touch ID</EntreText>
              <View>
                <Switch 
                  onValueChange={()=>{}} 
                  onTintColor={'#FFD64E'} 
                  value={true}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.settingItem} onPress={()=>{}}>
              <EntreText h4 bold>Deactivate account</EntreText>
              <View>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={24}
                  color={theme.textGrey}
                />
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.settingItem} onPress={()=>this.props.navigation.navigate('TOSScreen')}>
              <EntreText h4 bold>Terms of Service</EntreText>
              <View>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={24}
                  color={theme.textGrey}
                />
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.settingItem} onPress={()=>this.props.navigation.navigate('PrivacyPolicyScreen')}>
              <EntreText h4 bold>Privacy Policy</EntreText>
              <View>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={24}
                  color={theme.textGrey}
                />
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.settingItem} onPress={()=>{}}>
              <EntreText h4 bold>About</EntreText>
              <View>
                <Icon
                  type='material-community'
                  name='chevron-right'
                  size={24}
                  color={theme.textGrey}
                />
              </View>
            </TouchableOpacity>


          </View>
          <View style={{height: 20}} />
          <View style={styles.settingContainer}>

            <View style={styles.settingItem}>
              <EntreText h4 bold>Make my account private</EntreText>
              <View>
                <Switch 
                  onValueChange={()=>{}} 
                  onTintColor={'#FFD64E'} 
                  value={true}
                />
              </View>
            </View>


            <View style={styles.settingItem}>
              <EntreText h4 bold>Enable 2FA</EntreText>
              <View>
                <Switch 
                  onValueChange={()=>{}} 
                  onTintColor={'#FFD64E'} 
                  value={true}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(state => {
    return {
    };
  },
  {}
)(SettingsScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },

  settingContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',

    shadowColor: '#4a4a4a',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,

    padding: 10,
    margin: 3,

    backgroundColor: '#fff',

    marginBottom: 20,
  },

  settingItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  }
});
