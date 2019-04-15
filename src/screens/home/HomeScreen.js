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
        containerStyle={{ paddingHorizontal: 0 }}
        inputContainerStyle={{ paddingHorizontal: 0}}
      />
    );
  }
  render() {
    const { posts } = this.props;

    return (  
      <View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
        <EntreHeader
          navigation={this.props.navigation}
        />

        <ScrollView  style={styles.container} >
          <EntreText h3 bold>What's on your mind?</EntreText>
          {this.renderSearchField()}

          <View style={{height: 10}} />
          {posts.map(post=><EntrePost post={post} />)}

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
  }
});
