import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated, Dimensions, ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getFollowers, getMyPosts } from '../../actions/profile';

import { 
  Icon, 
  Input, 
  Button,
  Overlay
} from 'react-native-elements';
import TagInput from 'react-native-tag-input';
import { 
  TabView, 
  SceneMap ,
  TabBar
} from 'react-native-tab-view';

import { logo } from "./../../assests/assets";
import { theme } from '../../themes';

import EntreHeader from '../../components/layouts/EntreHeader';
import {
  EntreButton,
  EntreText,
  EntrePost,
  EntreAvatar
} from '../../components/elements';
import EditProfileScreen from './EditProfileScreen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class ActivityScreen extends PureComponent {
 
  state = { 
    text: '',

    index: 0,
    routes: [
      { key: 'experience', title: 'Experience' },
      { key: 'posts', title: 'Posts' }
    ],
    showEditModal: false,
    followers: []
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const [followers, myPosts] = await Promise.all([
      this.props.getFollowers(),
      this.props.getMyPosts()
    ]);
    this.setState({ followers });
  }

  _renderPostsTab = () => {
    const { posts } = this.props;

    return (
      <ScrollView>
        {posts.map(post=><EntrePost post={post} key={post.id} handleContentPress={this.handleContentPress} view={'compact'}/>)}
      </ScrollView>
    );
  }

  _renderExperienceTab = () => {
    const { profile } = this.props;

    return (
      <ScrollView style={styles.experience}>
        <View style={styles.experienceSection}>
          <EntreText h4 bold>Bio</EntreText>
          <View style={{height: 5}} />
          <EntreText >{profile.bio}</EntreText>
        </View>

        <View style={{height: 20}} />

        <View style={styles.experienceSection}>
          <EntreText h4 bold>Skills</EntreText>
          <View style={{height: 5}} />
          <TagInput
            value={profile.skills}
            labelExtractor={(tag) => tag}
            onChange={(tags) => this.setState({ tags })}
            onChangeText={(text) => this.setState({ text })}
            text={this.state.text}
            editable={false}

            tagColor={'#F3F5F9'}
            tagTextColor={'#000'}
            inputColor={'#000'}
            tagContainerStyle={{height: 'auto', borderRadius: 20, padding: 10}}
            inputProps={{ style: { width: 0} }}
          />
        </View>
      </ScrollView>
    );
  }


  _renderTabbar = props => {
    return (
      <TabBar
        {...props}

        activeColor={'#FFF'}
        inactiveColor={'#000'}
        indicatorStyle={{ backgroundColor: theme.primaryBlue }}
        style={{ backgroundColor: 'white' }}
      />
    );
  }

  render() {
    const { profile } = this.props;

    const { showEditModal, followers } = this.state;
    const isEditable = true;

    return (  
      <View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
        <EntreHeader
          navigation={this.props.navigation}
        />

        <View  style={styles.container}>
          <View style={styles.header}>
            <EntreAvatar
              source={{
                uri: profile.avatar
              }}
              rounded
              size={100}
            />

            <View style={{width: 10}} />
            <View style={{flex: 1, justifyContent: 'space-between'}}> 
              <View>
                <EntreText h2 bold>{profile.full_name}</EntreText>
                <View style={{height: 10}} />
                <EntreText h4 color={'textGrey'}>{profile.title}</EntreText>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                {isEditable && 
                  <EntreButton
                    btnStyle={{ width: 100 }}
                    textStyle={{ fontWeight: 'bold' }}
                    onPress={()=>this.setState({ showEditModal: !showEditModal })}
                    btnType={EntreButton.TYPE_SMALL_ROUND_OUTLINE}
                    colorType={EntreButton.COLOR_BLUE}
                    btnText={'Edit Profile'}
                  />
                }
                {!isEditable &&
                  <EntreButton
                    btnStyle={{ }}
                    textStyle={{ fontWeight: 'bold' }}
                    onPress={()=>{}}
                    btnType={EntreButton.TYPE_SMALL_ROUND_OUTLINE}
                    colorType={EntreButton.COLOR_BLUE}
                    btnText={'Accept'}
                  />
                }
                {!isEditable &&
                  <EntreButton
                    btnStyle={{ }}
                    textStyle={{ fontWeight: 'bold' }}
                    onPress={()=>{}}
                    btnType={EntreButton.TYPE_SMALL_ROUND_OUTLINE}
                    colorType={EntreButton.COLOR_BLUE}
                    btnText={'Accept'}
                  />
                }
              </View>
            </View>
          </View>


          <View style={styles.numbers}>
            <View style={[styles.numberSection, { borderRightWidth: 0.5 }]}>
              <EntreText h1 bold>{profile.level}</EntreText>
              <View style={{height: 5}} />
              <EntreText h4 color={'textGrey'}>LEVEL</EntreText>
            </View>
            <View style={[styles.numberSection, { borderRightWidth: 0.5 }]}>
              <EntreText h1 bold>{profile.points}</EntreText>
              <View style={{height: 5}} />
              <EntreText h4 color={'textGrey'}>POINTS</EntreText>
            </View>
            <TouchableOpacity 
              style={[styles.numberSection, { borderRightWidth: 0 }]}
              onPress={()=>this.props.navigation.navigate('FollowersScreen')}
            >
              <EntreText h1 bold>{followers.length}</EntreText>
              <View style={{height: 5}} />
              <EntreText h4 color={'textGrey'}>FOLLOWERS</EntreText>
            </TouchableOpacity>
          </View>
          <View style={{height: 10}} />
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              experience: this._renderExperienceTab,
              posts: this._renderPostsTab,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={
              props => {
                return (
                  <TabBar
                    {...props}

                    activeColor={'#FFF'}
                    inactiveColor={'#000'}
                    indicatorStyle={{ backgroundColor: '#FFF' }}
                    style={{ backgroundColor: '#FFF',  height: 50, }}
                    renderLabel={({ route, focused, color }) => (
                      <View style={{ backgroundColor: focused ? theme.primaryBlue : '#fff', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderBottomRightRadius: 10,  width: (width - 40)/2, borderColor: '#353A50', padding: 0, margin: 0}}>
                        <Text style={{ color, fontSize: 18 }}>{route.title}</Text>
                      </View>
                    )}
                    tabStyle={{ padding: 0, height: 50 }}
                  />
                );
              }
            }
          />
        </View>
        {showEditModal &&
          <Overlay 
            isVisible
            onBackdropPress={() => this.setState({ showEditModal: !showEditModal })}
            animationType={'slide'}
            windowBackgroundColor={'#00000050'}
            containerStyle={{ }}
            overlayStyle={{ }}
            fullScreen
          >
            <EditProfileScreen 
              closeModal={()=>this.setState({ showEditModal: false })}
            />
          </Overlay>
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    person: state.people.person,
    posts: state.posts.posts,
    profile: state.profile.profile,
    myPosts: state.profile.posts
  }
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getFollowers,
      getMyPosts
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  header: {
    flexDirection: 'row',
  },

  numbers: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#707070'
  },
  numberSection: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0,
    borderColor: '#707070',
    flex: 1
  },

  experience: {
    paddingVertical: 10,
  },
  experienceSection: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,

    shadowColor: '#7364F8',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    backgroundColor: '#fff',

    margin: 5,
    padding: 10
  }
});
