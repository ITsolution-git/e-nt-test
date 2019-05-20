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
  EntrePost
} from '../../components/elements';
import { 
  Icon, 
  Input, 
  Button 
} from 'react-native-elements';


class HomeScreen extends PureComponent {
  state = { 
    searchKey: ''
  }

  constructor(props) {
    super(props);
  }

  renderSearchField = () => {
    const { searchKey } = this.state;

    return (
      <Input
        inputStyle={[theme.font, { fontSize: 13, padding: 0 }]}
        placeholder='Share your story, ask questions, post interesting things, etc...'
        errorStyle={{ color: 'red' }}
        errorMessage={''}
        value={searchKey}
        onChangeText={searchKey => this.setState({ searchKey })}
        autoCapitalize='none'
        containerStyle={[styles.search, { paddingHorizontal: 0 }]}
        inputContainerStyle={{ paddingHorizontal: 5, borderBottomWidth: 0, height: 30 }}
      />
    );
  }

  handleContentPress = (post) => {
    this.props.navigation.navigate('PostScreen', { postId: post.id});
  }

  render() {
    const { posts } = this.props;

    return (  
      <View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
        <EntreHeader
          navigation={this.props.navigation}
        />

        <View style={{ marginHorizontal: 20 }}>
          <EntreText h3 bold>What's on your mind?</EntreText>
          <View style={{height: 10}} />
          {this.renderSearchField()}
        </View>

        <ScrollView  style={styles.container} >

          <View style={{height: 10}} />
          {posts.map(post=><EntrePost post={post} key={post.id} handleContentPress={this.handleContentPress} view={'normal'}/>)}

        </ScrollView>
      </View>
    );
  }
}

export default connect(state => {
    return {
      posts: state.posts.posts
    };
  },
  {}
)(HomeScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },

  search: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,

    shadowColor: '#4a4a4a',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    backgroundColor: '#fff',

    margin: 3,
    padding: 3
  }
});
