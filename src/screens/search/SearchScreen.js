import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated, Dimensions, ScrollView } from "react-native";
import { connect } from "react-redux";

import { 
  Icon, 
  Input, 
  Button,
  Overlay,
  CheckBox
} from 'react-native-elements';
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
  EntreAvatar,
  EntrePersonItem
} from '../../components/elements';

const CONTENT_TYPES = [{
  key: 'blogs', title: 'Blogs'
}, {
  key: 'videos', title: 'Videos'
}, {
  key: 'pictures', title: 'Pictures'
}, {
  key: 'all', title: 'All'
}, ];


const GENDERS = [{
  key: 'male', title: 'Male'
}, {
  key: 'female', title: 'Female'
}, {
  key: 'all', title: 'All'
}, ];

class SearchScreen extends PureComponent {
 
  state = { 
    index: 0,
    routes: [
      { key: 'content', title: 'Content' },
      { key: 'people', title: 'People' }
    ],

    showLocationFilter: false,
    showSearchFilter: false,

    filter: {
      gender: 'pictures',
      title: 0,
      location: 0,
      gender: 'male',
      industry: 0
    }
  }

  constructor(props) {
    super(props);
  }

  _renderSearchFilterOverlay = () => {
    const { index, showSearchFilter, filter } = this.state;
    const { onboarding } = this.props;

    return (
      <Overlay isVisible
        onBackdropPress={() => this.setState({ showSearchFilter: !showSearchFilter })}
        // animationType={'slide'}
        windowBackgroundColor={'#00000050'}
        containerStyle={{ }}
        overlayStyle={{ }}
        height={400}
      >
        <ScrollView>
          { index == 0 && 
            <View>
              <EntreText bold>Type</EntreText>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {CONTENT_TYPES.map(type => {
                  return (
                    <EntreButton
                      key={type.key}
                      btnStyle={[styles.filterBtn, { marginLeft: 10 } ]}
                      textStyle={{ color: type.key === filter.contentType ? theme.textWhite : theme.textBlack }}
                      onPress={()=>this.setState({ filter: {...filter, contentType: type.key }})}
                      btnType={EntreButton.TYPE_SMALL_FILTER}
                      colorType={ type.key === filter.contentType ? EntreButton.COLOR_BLUE : EntreButton.COLOR_WHITE }
                      btnText={type.title}
                    />
                  );
                })}
              </View>

              <EntreText bold>Topics</EntreText>
              <View style={{ }}>
                {onboarding.industries.map(ques => {
                  return (
                    <CheckBox
                      left
                      checkedColor={theme.textGrey}
                      uncheckedColor={theme.textGrey}
                      size={20}
                      title={ques.title}
                      checkedIcon='circle'
                      uncheckedIcon='circle-o'
                      key={ques.id}
                      containerStyle={{ backgroundColor: '#fff', margin: 0, borderWidth: 0,  paddingHorizontal: 3 }}
                      textStyle={[theme.font,  { color: '#000' }]}
                      // onIconPress={()=>, ques.id)}
                    />
                  );
                }) }
              </View>
            </View>
          }


          { index == 1 && 
            <View>
              <EntreText bold>Gender</EntreText>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {GENDERS.map(type => {
                  return (
                    <EntreButton
                      key={type.key}
                      btnStyle={[styles.filterBtn, { marginLeft: 10 } ]}
                      textStyle={{ color: type.key === filter.gender ? theme.textWhite : theme.textBlack }}
                      onPress={()=>this.setState({ filter: {...filter, gender: type.key }})}
                      btnType={EntreButton.TYPE_SMALL_FILTER}
                      colorType={ type.key === filter.gender ? EntreButton.COLOR_BLUE : EntreButton.COLOR_WHITE }
                      btnText={type.title}
                    />
                  );
                })}
              </View>

              <EntreText bold>Title</EntreText>
              <View style={{ }}>
                {onboarding.jobs.map(ques => {
                  return (
                    <CheckBox
                      left
                      checkedColor={theme.textGrey}
                      uncheckedColor={theme.textGrey}
                      size={20}
                      title={ques.title}
                      checkedIcon='circle'
                      uncheckedIcon='circle-o'
                      key={ques.id}
                      containerStyle={{ backgroundColor: '#fff', margin: 0, borderWidth: 0,  paddingHorizontal: 3 }}
                      textStyle={[theme.font,  { color: '#000' }]}
                      // onIconPress={()=>, ques.id)}
                    />
                  );
                }) }
              </View>
            </View>
          }
        </ScrollView>
      </Overlay>
    );
  }

  _renderLocationFilterOverlay = () => {
    const { index, showLocationFilter } = this.state;
    const { onboarding } = this.props;

    return (
      <Overlay isVisible
        onBackdropPress={() => this.setState({ showLocationFilter: !showLocationFilter })}
        // animationType={'slide'}
        windowBackgroundColor={'#00000050'}
        containerStyle={{ }}
        overlayStyle={{ }}
        height={400}
      >
        <View>
          <EntreText bold>Location</EntreText>
          <View style={{ }}>
            {onboarding.locations.map(ques => {
              return (
                <CheckBox
                  left
                  checkedColor={theme.textGrey}
                  uncheckedColor={theme.textGrey}
                  size={20}
                  title={ques.title}
                  checkedIcon='circle'
                  uncheckedIcon='circle-o'
                  key={ques.id}
                  containerStyle={{ backgroundColor: '#fff', margin: 0, borderWidth: 0,  paddingHorizontal: 3 }}
                  textStyle={[theme.font,  { color: '#000' }]}
                  // onIconPress={()=>, ques.id)}
                />
              );
            }) }
          </View>
        </View>
      </Overlay>
    );
  }

  _renderFilters = () => {
    const { index, showSearchFilter, showLocationFilter } = this.state;

    return (
      <View style={{ margin: 10, flexDirection: 'row' }}>
        <Input
          inputStyle={[theme.font, { fontSize: 13, padding: 0 }]}
          placeholder='Search'
          autoCapitalize='none'
          editable={false}
          containerStyle={[styles.filterInput, { paddingHorizontal: 0, flex: 1 }]}
          inputContainerStyle={{ paddingHorizontal: 5, borderBottomWidth: 0, height: 30 }}
          rightIcon={{ type: 'material-community', name: 'filter-variant' }}
          onTouchStart={()=>this.setState({ showSearchFilter: !showSearchFilter })}
        />

        <View style={{ width: 10 }} />

        <Input
          inputStyle={[theme.font, { fontSize: 13, padding: 0 }]}
          placeholder='Location'
          autoCapitalize='none'
          editable={false}
          containerStyle={[styles.filterInput, { paddingHorizontal: 0, flex: 1 }]}
          inputContainerStyle={{ paddingHorizontal: 5, borderBottomWidth: 0, height: 30 }}
          rightIcon={{ type: 'material-community', name: 'filter-variant' }}
          onTouchStart={()=>this.setState({ showLocationFilter: !showLocationFilter })}
        />

        {showSearchFilter && this._renderSearchFilterOverlay()}
        {showLocationFilter && this._renderLocationFilterOverlay()}
      </View>
    );
  }

  handleContentPress = (post) => {
    this.props.navigation.navigate('PostScreen');
  }

  _renderContentTab = () => {
    const { posts } = this.props;

    return (
      <ScrollView>
        <EntreText bold style={{ paddingVertical: 5 }}>Featured Posts</EntreText>
        <ScrollView horizontal>
          {posts.map(post=><View style={{width: 250, marginRight: 10}}><EntrePost post={post} key={post.id} handleContentPress={this.handleContentPress} view={'compact'}/></View>)}
        </ScrollView>

        <EntreText bold style={{ paddingVertical: 5 }}>Trending</EntreText>
        <ScrollView>
          {posts.map(post=><View style={{}}><EntrePost post={post} key={post.id} handleContentPress={this.handleContentPress} view={'compact'}/></View>)}
        </ScrollView>
      </ScrollView>
    );
  }

  _renderPeopleTab = () => {
    const { people } = this.props;

    return (
      <ScrollView>
        <EntreText bold style={{ paddingVertical: 5 }}>Featured</EntreText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {people.map(person => {
            return (
              <TouchableOpacity style={styles.horizontalPeople}>
                <EntreAvatar
                  source={{
                    uri: person.avatar
                  }}
                  rounded
                  size={50}
                />
                <View style={{width: 20}} />
                <EntreText size={14}>{person.name}</EntreText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <EntreText bold style={{ paddingVertical: 5 }}>Suggested</EntreText>
        <ScrollView>
          {people.map(person => {
            return (<EntrePersonItem person={person} key={person.id}/>);
          })}
        </ScrollView>

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

  render() {
    return (  
      <View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
        <EntreHeader
          navigation={this.props.navigation}
        />

        {this._renderFilters()}

        <View  style={styles.container}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              content: this._renderContentTab,
              people: this._renderPeopleTab,
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
    onboarding: state.onboarding,
    posts: state.posts.posts,
    people: state.people.people
  };
},
  {}
)(SearchScreen);



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
  horizontalPeople: {
    alignItems: 'center',
    padding: 5
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
  filterBtn: {
    borderColor: '#fff',

    shadowColor: '#4a4a4a',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,

    margin: 3,
  }
});
