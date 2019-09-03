import React, { PureComponent } from "react";
import { Image, Text, TextInput, View, Button, StyleSheet, Dimensions, ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { updateProfile } from '../../actions/profile';

import Swiper from 'react-native-swiper';


import { onboarding_logo, logo } from "./../../assests/assets";
import { theme } from '../../themes';
import EntreButton from '../../components/elements/EntreButton';
import { CheckBox } from 'react-native-elements';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SLIDER_COUNT = 4;

class WelcomeScreen extends React.Component {
 
  state = {
    currentIndex: 0,
    jobs: [],
    industries: [],
    lookingFors: [],
    loading: false
  }

  renderSelectSlider(title, questions, backColor, onPress, sliderData) {
    return (
      <View style={[theme.centerAll, { marginHorizontal: 15, marginVertical: 10 }]}>
        <View style={{ height: 10 }} />
        <Text style={[theme.font, {fontSize: 15, color: theme.textWhite}]}>{title}</Text>
        <View style={{ height: 10 }} />

        <Text style={[theme.font, {fontSize: 13, color: theme.textWhite, opacity: 0.5}]}>
          Select up to 3 options
        </Text>

        <ScrollView style={{ flex: 1, marginHorizontal: 5 }}>
          {questions.map(ques => {
            return (
              <CheckBox
                checked={sliderData.indexOf(ques.title) !== -1}
                left
                checkedColor={'#fff'}
                uncheckedColor={'#fff'}
                size={20}
                title={ques.title}
                checkedIcon='circle-o'
                uncheckedIcon='circle'
                key={ques.id}
                containerStyle={{ backgroundColor: backColor, margin: 0, borderWidth: 0,  paddingHorizontal: 3 }}
                textStyle={[theme.font,  { color: '#fff' }]}
                onPress={()=>onPress(questions, ques)}
              />
            );
          }) }
        </ScrollView>
      </View>
    );
  }

  renderWelcomeSlider() {
    return (
      <View style={theme.centerAll}>
        <Image
          style={{ width: 200, height: 200 }}
          source={onboarding_logo}
        />

        <Text style={[theme.font, {fontSize: 35, color: theme.textWhite}]}>Welcome</Text>

        <View style={{ height: 40 }} />
        <Text style={[theme.font, {fontSize: 13, color: theme.textWhite, marginHorizontal: 30, textAlign: 'center'}]}>
          Thank you for joining. We are so happy to have you in our community. Reach out to our support if you have any questions or need help.  
        </Text>
        <View style={{ height: 20 }} />
        
      </View>
    );
  }

  _onCheckboxPress = (sliderId) => {
    return (questions, question) => {
      const slider = this.state[sliderId];
      const index = slider.indexOf(question.title);
      if (index === -1) {
        this.setState({
          [sliderId]: slider.concat(question.title)
        });
      } else {
        this.setState({
          [sliderId]: slider.filter(s => s !== question.title)
        })
      }
    }
  }

  _goto = async (direction) => {
    const { currentIndex } = this.state;

    if (direction == 'next') {
      if (currentIndex == SLIDER_COUNT - 1) {
        this.setState({ loading: true });
        try {
          await this.props.updateProfile({
            jobs: this.state.jobs,
            lookingFors: this.state.lookingFors,
            industries: this.state.industries,
          });
        } catch(err) {

        }
        this.setState({ loading: false });
        this.props.navigation.navigate('drawer');
      } else {
        this.swiper.scrollBy(1);
        this.setState({ currentIndex: currentIndex + 1 });
      }
    } else if (direction == 'prev') {
      if (currentIndex == 0) {
        // do nothing
      } else {
        this.swiper.scrollBy(-1);
        this.setState({ currentIndex: currentIndex - 1 });
      }
    }

  }

  _swiperRef = (swiper)=>{this.swiper=swiper}

  render() {
    const { currentIndex, jobs, industries, lookingFors, loading } = this.state;
    const { onboarding } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ height: 40 }} />
        <Image 
          style={styles.logo} 
          source={logo} 
        />
        <View style={{ height: 20 }} />

        
        <Swiper 
          style={styles.wrapper} 
          showsButtons={false}
          width={width - 80}
          loop={false}
          scrollEnabled={false}
          paginationStyle={{
            bottom: -23,
          }}
          ref={this._swiperRef}
        >
          <View style={[styles.slide, styles.slide1]}>
            {this.renderWelcomeSlider()}
          </View>

          <View style={[styles.slide, styles.slide1, {backgroundColor: '#3497FD'}]}>
            {this.renderSelectSlider('How would you best describe yourself currently?', onboarding.jobs, '#3497FD', this._onCheckboxPress('jobs'), jobs)}
          </View>

          <View style={[styles.slide, styles.slide2, {backgroundColor: '#3085BA'}]}>
            {this.renderSelectSlider('What Industry are you in?', onboarding.industries, '#3085BA', this._onCheckboxPress('industries'), industries)}
          </View>

          <View style={[styles.slide, styles.slide2, {backgroundColor: '#0A4E95'}]}>
            {this.renderSelectSlider('What are you looking for?', onboarding.lookingFors, '#0A4E95', this._onCheckboxPress('lookingFors'), lookingFors)}
          </View>
        </Swiper>

        <View style={{ height: 40 }} />

        <View style={styles.btnGroup}>
          <EntreButton
            btnStyle={{}}
            textStyle={{}}
            onPress={()=>this._goto('prev')}
            btnType={EntreButton.TYPE_WELCOME_ROUND}
            colorType={EntreButton.COLOR_GREY}
            btnText={'Back'}
          />
          <View style={{ width: 10 }} />
          <EntreButton
            btnStyle={{}}
            textStyle={{}}
            onPress={()=>this._goto('next')}
            btnType={EntreButton.TYPE_WELCOME_ROUND}
            colorType={EntreButton.COLOR_BLUE}
            btnText={'Next'}
            loading={loading}
          />
        </View>
        <View style={{ height: 20 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 120, 
    height: 50
  },


  wrapper: {
  },
  slide: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide1: {
    margin: 5,
    backgroundColor: '#00C4FF',
    // borderWidth: 1,
    borderColor: '#707070',

    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 5,
    shadowOpacity: 0.2  
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  btnGroup: {
    marginHorizontal: 20,
    flexDirection: 'row'
  }
});


const mapStateToProps = state => {
  return {
    onboarding: state.onboarding
  }
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      updateProfile
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen);
