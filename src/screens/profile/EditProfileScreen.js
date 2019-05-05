import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated, Dimensions, ScrollView } from "react-native";
import { connect } from "react-redux";

import { 
  Icon, 
  Input, 
  Button,
  Overlay
} from 'react-native-elements';
import TagInput from 'react-native-tag-input';

import { logo } from "./../../assests/assets";
import { theme } from '../../themes';

import {
  EntreButton,
  EntreText,
  EntrePost,
  EntreAvatar,
  ProfileField
} from '../../components/elements';

class EditProfileScreen extends PureComponent {
 
  state = { 
    tags: ['UI Design', 'UI Design'],

    currentEditField: '',
    formData: this.props.person,
    errorMessage: '',

    showEditBioModal: false
  }

  constructor(props) {
    super(props);

    this.keyboardHeight = new Animated.Value(0);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      })
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      })
    ]).start();
  };

  _renderExperience = () => {
    const { showEditBioModal, formData } = this.state;
    const { person } = this.props;

    return (
      <View style={styles.experience}>
        <View style={styles.experienceSection}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <EntreText h4 bold>Bio</EntreText>

            <EntreButton
              btnStyle={{ width: 80, height: 20 }}
              textStyle={{ fontSize: 13, fontWeight: 'bold' }}
              onPress={()=>this.setState({ showEditBioModal: !showEditBioModal })}
              btnType={EntreButton.TYPE_SMALL_ROUND_OUTLINE}
              colorType={EntreButton.COLOR_BLUE}
              btnText={'Edit Bio'}
            />
          </View>
          <View style={{height: 5}} />
          <EntreText >{person.bio}</EntreText>
        </View>

        <View style={{height: 20}} />

        <View style={styles.experienceSection}>
          <EntreText h4 bold>Skills</EntreText>
          <View style={{height: 5}} />
          <TagInput
            value={formData.tags}
            onChange={(tags) => this.onChange('tags', tags)}
            labelExtractor={(tag) => tag}

            text={this.state.text}
            onChangeText={(text) => this.setState({ text })}

            tagColor={'#F3F5F9'}
            tagTextColor={'#000'}
            inputColor={'#000'}
            tagContainerStyle={{height: 'auto', borderRadius: 20, padding: 10}}
          />
        </View>
      </View>
    );
  }

  _renderFields = () => {
    const { person } = this.props;
    const { errorMessage, currentEditField, formData } = this.state;

    return (
      <View style={styles.fields}>

        <ProfileField 
          title={'Name'}
          field={'name'}
          value={formData.name}
          onChange={this.onChange}
          type={'text'}
          errorMessage={errorMessage}
          onEditField={this.onEditField}
          isEditing={currentEditField == 'name'}
          onSaveField={this.onSaveField}
          onCancelField={this.onCancelField}
        />

        <ProfileField 
          title={'Title'}
          field={'title'}
          value={formData.name}
          onChange={this.onChange}
          type={'text'}
          errorMessage={errorMessage}
          onEditField={this.onEditField}
          isEditing={currentEditField == 'title'}
          onSaveField={this.onSaveField}
          onCancelField={this.onCancelField}
        />

        <ProfileField 
          title={'Username'}
          field={'username'}
          value={formData.name}
          onChange={this.onChange}
          type={'text'}
          errorMessage={errorMessage}
          onEditField={this.onEditField}
          isEditing={currentEditField == 'username'}
          onSaveField={this.onSaveField}
          onCancelField={this.onCancelField}
        />


        <ProfileField 
          title={'email'}
          field={'email'}
          value={formData.name}
          onChange={this.onChange}
          type={'text'}
          errorMessage={errorMessage}
          onEditField={this.onEditField}
          isEditing={currentEditField == 'email'}
          onSaveField={this.onSaveField}
          onCancelField={this.onCancelField}
        />


        <ProfileField 
          title={'Location'}
          field={'location'}
          value={formData.name}
          onChange={this.onChange}
          type={'text'}
          errorMessage={errorMessage}
          onEditField={this.onEditField}
          isEditing={currentEditField == 'location'}
          onSaveField={this.onSaveField}
          onCancelField={this.onCancelField}
        />
      </View>
    );
  }

  _renderBioModal = () => {
    const { person } = this.props;
    const { errorMessage, currentEditField, formData, showEditBioModal } = this.state;

    return (
      <Overlay 
        isVisible
        onBackdropPress={() => this.setState({ showEditBioModal: !showEditBioModal })}
        animationType={'slide'}
        windowBackgroundColor={'#00000050'}
        containerStyle={{ }}
        overlayStyle={{ }}
        fullScreen
      >
        <View>
          <View style={{ marginVertical: 10, alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => this.setState({ showEditBioModal: !showEditBioModal })}>
              <Icon size={20} name='close' /> 
            </TouchableOpacity>
          </View>

          <View style={{height: 20}} />
          <EntreText h1>Tell ua a bit about yourself</EntreText>
          <View style={{height: 20}} />

          <Input
            multiline={true}
            numberOfLines={10} 
            inputStyle={[theme.font, { fontSize: 16, padding: 0 }]}
            placeholder={'Tell us more about you...'}
            errorStyle={{ color: 'red' }}
            errorMessage={errorMessage}
            value={formData.bio}
            onChangeText={(text)=>this.onChange('bio', text)}
            autoCapitalize='none'
            containerStyle={[{ paddingHorizontal: 0 }]}
            inputContainerStyle={{ paddingHorizontal: 0, borderBottomWidth: 0, height: 30 }}
          />
        </View>
      </Overlay>
    )
  }

  onChange = (field, value) => {
    this.setState({ formData: {...this.state.formData, [field]: value }});
  }

  onSaveField = (field) => {
    this.setState({ currentEditField: '' });
  }

  onCancelField = (field) => {
    this.setState({ currentEditField: '' });
  }

  onEditField = (field) => {
    this.setState({ currentEditField: field });
  }

  render() {
    const { person, closeModal } = this.props;
    const { errorMessage, currentEditField, formData, showEditBioModal } = this.state;

    const isEditable = true;

    return (
      <Animated.View style={[styles.container, { paddingBottom: this.keyboardHeight }]}>

        <View style={{ marginVertical: 10, alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={closeModal}>
            <Icon size={20} name='close' /> 
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <EntreAvatar
              source={{
                uri: person.avatar
              }}
              rounded
              size={100}
            />

            <View style={{width: 10}} />
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
              <View style={{ marginBottom: 10, backgroundColor: theme.primaryBlue, padding: 20, borderRadius: 35 }}>
                <Icon name='camera' type='simple-line-icon' size={25} color={theme.textWhite} />
              </View>
              <EntreText color={'textBlue'} h4>Change Profile Picture</EntreText>
            </TouchableOpacity>
          </View>
          {this._renderFields()}

          {this._renderExperience()}
        </ScrollView>
        {showEditBioModal && this._renderBioModal()}
      </Animated.View>
    );
  }
}

export default connect(state => {
  return {
    person: state.people.person,
  };
},
  {}
)(EditProfileScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  },

  header: {
    flexDirection: 'row',
  },

  fields: {
    paddingTop: 30,
    paddingBottom: 10,
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
