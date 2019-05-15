import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated, Dimensions, ScrollView } from "react-native";
import { connect } from "react-redux";

import { 
  Icon, 
  Input, 
  Button,
} from 'react-native-elements';
import TagInput from 'react-native-tag-input';

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

class FollowersScreen extends PureComponent {
 
  state = { 
  }

  constructor(props) {
    super(props);
  }


  render() {
    const { people } = this.props;

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

        <View  style={styles.container}>
          <ScrollView>
            <View style={{ height: 10 }} />

            <EntreText bold h1>Followers</EntreText>
            <EntreText bold color={'textGrey'}>125 people are following you</EntreText>

            {people.map(person => {
              return (<EntrePersonItem person={person} key={person.id}/>);
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default connect(state => {
  return {
    people: state.people.people,
  };
},
  {}
)(FollowersScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
});
