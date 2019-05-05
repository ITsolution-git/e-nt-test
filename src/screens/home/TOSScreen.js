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

const TOS = [
  't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
  'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.']

class SupportScreen extends PureComponent {
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
          rightComponent={<View style={{width: 200}}>
            <EntreText h1 bold>Terms of Service</EntreText>
            </View>}
          navigation={this.props.navigation}
        />

        <ScrollView  style={styles.container} >
          <EntreText h3>Terms of Service</EntreText>
          <View style={{height: 20}} />
          {TOS.map((tos, index)=><EntreText key={index} h4 color={'textGrey'} style={{ paddingBottom: 10 }}>{tos}</EntreText>)}
        </ScrollView>


        <View style={styles.btnGroup}>
          <EntreButton
            btnStyle={{}}
            textStyle={{ fontWeight: 'bold' }}
            onPress={()=>{}}
            btnType={EntreButton.TYPE_SMALL_ROUND_OUTLINE}
            colorType={EntreButton.COLOR_BLUE}
            btnText={'Accept'}
          />
          <View style={{ width: 10 }} />
          <EntreButton
            btnStyle={{}}
            textStyle={{ fontWeight: 'bold' }}
            onPress={()=>{}}
            btnType={EntreButton.TYPE_SMALL_ROUND}
            colorType={EntreButton.COLOR_BLUE}
            btnText={'Decline'}
            outline
          />
        </View>
      </View>
    );
  }
}

export default connect(state => {
    return {
    };
  },
  {}
)(SupportScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },

  btnGroup: {
    justifyContent: 'center',
    marginVertical: 10,
    flexDirection: 'row'
  }
});
