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
  ScrollView
} from "react-native";
import { connect } from "react-redux";

import { logo } from "./../../assests/assets";
import { theme } from '../../themes';

import EntreHeader from '../../components/layouts/EntreHeader';

import {
  EntreButton,
  EntreText,
  EntrePost,
  EntreAvatar,
  EntreReply
} from '../../components/elements';
import { 
  Icon, 
  Input, 
  Button 
} from 'react-native-elements';


class PostScreen extends PureComponent {
  state = { 
    replyMessage: ''
  }

  constructor(props) {
    super(props);
  }

  handleContentPress = (post) => {
    // Do nothing
  }

  handleSendReply = () => {

  }

  handleReplyPress = (comment) => {

  }

  _renderReplies = () => {
    const { post } = this.props;

    return post.comments.map(comment => {
      return (
        <EntreReply comment={comment} handleReplyPress={this.handleReplyPress} key={comment.id}/>
      );
    })
  }

  _renderReplyMessage = () => {
    const { replyMessage } = this.state;
    const { profile } = this.props;

    return (
      <View style={styles.replyInputContainer}>
        <EntreAvatar
          source={{
            uri: profile.avatar
          }}
        />
        <View style={{width: 10}} />
        
        <View style={{flex: 1}}>
          <Input
            inputStyle={[theme.font, { fontSize: 13, padding: 0 }]}
            placeholder='Type a comment'
            errorStyle={{ color: 'red' }}
            errorMessage={''}
            value={replyMessage}
            onChangeText={replyMessage => this.setState({ replyMessage })}
            autoCapitalize='none'
            containerStyle={[styles.replyInput, { paddingHorizontal: 0 }]}
            inputContainerStyle={{ paddingHorizontal: 5, borderBottomWidth: 0, height: 30 }}
          />
        </View>
        <View style={{width: 10}} />

        <TouchableOpacity onPress={()=>this.handleSendReply()}>
          <Icon 
            size={18} 
            name='send' 
            type='material-community' 
            color={theme.textBlack}
          /> 
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { post, profile } = this.props;

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
          rightComponent={<View></View>}
          navigation={this.props.navigation}
        />

        <ScrollView  style={styles.container} >
          <EntrePost post={post} key={post.id} handleContentPress={this.handleContentPress}
            view={'detailed'}/>

          <View style={{height: 20}} />

          {this._renderReplies()}
          <View style={{height: 20}} />
        </ScrollView>

        {this._renderReplyMessage()}
      </View>
    );
  }
}

export default connect(state => {
    return {
      post: state.posts.post,
      profile: state.profile.profileData
    };
  },
  {}
)(PostScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },

  replyInputContainer: {
    // borderTopWidth: 1,
    // borderColor: theme.grey,

    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,

    alignItems: 'center'
  },
  replyInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.grey
  },

});
