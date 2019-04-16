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
} from '../../components/elements';
import { 
  Icon, 
  Input, 
  Button 
} from 'react-native-elements';


class SupportScreen extends PureComponent {
  state = { 
  }

  _renderFaqs = () => {
    const { faqs } = this.props;

    return faqs.map(faq => {
      return (
        <View style={styles.faqContainer} key={faq.title}>
          <EntreText h4 color='textBlue'>{faq.title}</EntreText>
          <View style={{height: 20}} />
          <EntreText color='textGrey'>{faq.content}</EntreText>
        </View>
      );
    })
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
          rightComponent={<View>
            <EntreText h1 bold>FAQs</EntreText>
            </View>}
          navigation={this.props.navigation}
        />

        <ScrollView  style={styles.container} >
          <EntreText h3>Frequently Asked Questions</EntreText>
          <View style={{height: 20}} />
          {this._renderFaqs()}
        </ScrollView>
      </View>
    );
  }
}

export default connect(state => {
    return {
      faqs: state.statics.faqs,
    };
  },
  {}
)(SupportScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },

  faqContainer: {
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
  }
});
