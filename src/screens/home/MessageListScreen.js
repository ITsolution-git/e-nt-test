import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated, Dimensions, ScrollView } from "react-native";
import { connect } from "react-redux";

import { 
  Icon, 
  Input, 
  Button,
} from 'react-native-elements';
import { logo } from "./../../assests/assets";
import { theme } from '../../themes';

import EntreHeader from '../../components/layouts/EntreHeader';
import {
  EntreButton,
  EntreText,
  EntrePost,
  EntreAvatar
} from '../../components/elements';
import { 
  TabView, 
  SceneMap ,
  TabBar
} from 'react-native-tab-view';

class MessageListScreen extends PureComponent {
 
  state = { 
    index: 0,
    routes: [
      { key: 'chats', title: 'Chats' },
      { key: 'group', title: 'Group' }
    ],
    searchKey: ''
  }

  constructor(props) {
    super(props);
  }

  _renderMessage = (message) => {

    return (
      <TouchableOpacity style={[styles.messageContainer]} key={message.id}>

        <View style={styles.leftSection}>
          <EntreAvatar
            source={{
              uri: message.user.avatar
            }}
            rounded
            size={50}
          />
          <View style={{width: 20}} />

          <View>
            <EntreText color={'textBlack'}>{message.user.name}</EntreText>
            <View style={{width: 10}} />
            <EntreText color={'textBlack'}>{message.content}</EntreText>
          </View>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <EntreText color={'textGrey'}>09:10 AM</EntreText>
          <View style={{width: 5}} />
          {message.unread && <View style={styles.unreadBox}></View>}
        </View>
      </TouchableOpacity>
    );
  }

  _renderChatsTab = () => {
    const { messages } = this.props;

    return (
      <ScrollView>
        {messages.map(this._renderMessage)}
      </ScrollView>
    );
  }

  _renderChatsTab = () => {
    const { messages } = this.props;

    return (
      <ScrollView>
        {messages.map(this._renderMessage)}
      </ScrollView>
    );
  }

  _renderGroupTab = () => {
    const { messages } = this.props;

    return (
      <ScrollView>
        {messages.map(this._renderMessage)}
      </ScrollView>
    );
  }
  

  _renderTabbar = props => {
    return (
      <TabBar
      {...props}

        activeColor={'#000'}
        inactiveColor={'#000'}
      indicatorStyle={{ backgroundColor: theme.primaryBlue }}
      style={{ backgroundColor: 'white' }}
      />
    );
  }

  renderSearchField = () => {
    const { searchKey } = this.state;

    return (
      <View style={{ height: 40, paddingHorizontal: 10}}>
        <Input
          inputStyle={[theme.font, { fontSize: 13, padding: 0 }]}
          placeholder='Search'
          errorStyle={{ color: 'red' }}
          errorMessage={''}
          value={searchKey}
          onChangeText={searchKey => this.setState({ searchKey })}
          autoCapitalize='none'
          containerStyle={[styles.filterInput, { paddingHorizontal: 0, flex: 1 }]}
          inputContainerStyle={{ paddingHorizontal: 5, borderBottomWidth: 0, height: 30 }}
        />
      </View>
    );
  }

  render() {
    const {messages} = this.props;

    return (  
      <View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
        <EntreHeader
          navigation={this.props.navigation}
        />
          
        {this.renderSearchField()}

        <View  style={styles.container}>

          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              chats: this._renderChatsTab,
              group: this._renderGroupTab,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={this._renderTabbar}
          />
        </View>
      </View>
    );
  }
}

export default connect(state => {
  return {
    messages: state.messages.messages,
  };
},
  {}
)(MessageListScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  messageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  filterInput: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,

    shadowColor: '#4a4a4a',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    backgroundColor: '#fff',

    margin: 3,
    padding: 3
  },
  unreadBox: {
    width: 8,
    height: 8,
    backgroundColor: theme.primaryBlue,
    borderRadius: 4
  }
});
