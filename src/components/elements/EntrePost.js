import React, { PureComponent } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import moment from 'moment';

import { theme } from '../../themes';

import {
	EntreText
} from './index';

export default class EntrePost extends React.Component {

	render() {
		const { post, onPress } = this.props;

		return (
			<View style={[styles.container]}>
				<View style={styles.header}>
					<EntreText>{post.author.name}</EntreText>
					<EntreText>{moment(post.createdAt).format('LL')}</EntreText>
				</View>
				<View style={styles.content}>
					<EntreText>{post.content}</EntreText>
				</View>
				<View style={styles.footer}>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
		borderWidth: 1,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 5,
		shadowOpacity: 1,

		padding: 10,
		margin: 10
	},

	logo: {
		width: 240, 
		height: 90
	},

	subText: {
		color: theme.textGrey
	}
});

