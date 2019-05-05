import React, { PureComponent } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Input } from 'react-native-elements';

import {
	EntreText
} from './index';
import { theme } from '../../themes';

export default class ProfileField extends React.Component {
  render() {
  	const {
  		title,
			value,
			field,
			onChange,
			type,
			errorMessage,
			onEditField,
			isEditing,
			onSaveField,
			onCancelField
  	} = this.props;

  	if (isEditing && type == 'text') {
  		return (
  			<View style={[styles.container, {flexDirection: 'column'}]}>
	      	<EntreText h3 color='textGrey' style={{ flex: 1 }}>{title}</EntreText>
	      	<Input
		        inputStyle={[theme.font, { fontSize: 16, padding: 0 }]}
		        placeholder={title}
		        errorStyle={{ color: 'red' }}
		        errorMessage={errorMessage}
		        value={value}
		        onChangeText={(text)=>onChange(field, text)}
		        autoCapitalize='none'
		        containerStyle={[{ paddingHorizontal: 0 }]}
		        inputContainerStyle={{ paddingHorizontal: 0, borderBottomWidth: 0, height: 30 }}
		      />
		      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
		      	<TouchableOpacity onPress={()=>onSaveField(field)} >
		      		<EntreText h4 color='textBlue' >Save</EntreText>
		      	</TouchableOpacity>
		      	<View style={{width: 10}} />
		      	<TouchableOpacity onPress={()=>onCancelField(field)} >
		      		<EntreText h4 color='textBlue' >Cancel</EntreText>
		      	</TouchableOpacity>
		      </View>
	      </View>
	    );
  	}

    return (
    	<View style={styles.container}>
      	<EntreText h3 color='textGrey' style={{ flex: 2 }}>{title}</EntreText>
      	<EntreText h3 style={{ flex: 4 }}>{value}</EntreText>
      	<TouchableOpacity onPress={()=>onEditField(field)}>
      		<EntreText h4 color='textBlue' style={{ flex: 1 }}>Edit</EntreText>
      	</TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flexDirection: 'row',
  	paddingVertical: 5
  },
});

