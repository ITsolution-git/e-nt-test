import React, { PureComponent } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import moment from 'moment';

import { theme } from '../../themes';

import {
	EntreText,
	EntreAvatar,
	EntreButton
} from './index';
import {
	Iconx
} from 'react-native-elements';

export default class EntrePersonItem extends React.Component {

	componentDidMount() {
		}

	handlePress = () => {
		
	}

	handleFollow = () => {
		
	}

	render() {
		const { person } = this.props;

		return (
			<View style={[styles.container]}>

				<View style={styles.leftSection}>
					<EntreAvatar
						source={{
							uri: person.avatar
						}}
						rounded
						size={50}
					/>
					<View style={{width: 20}} />
					<EntreText h3>{person.name}</EntreText>
				</View>

				<View>
					<EntreButton
						btnStyle={{ borderColor: theme.primaryBlue }}
						textStyle={{ fontWeight: 'bold' }}
						onPress={()=>{}}
						btnType={EntreButton.TYPE_SMALL_ROUND_OUTLINE}
						colorType={EntreButton.COLOR_WHITE}
						btnText={person.following ? 'Unfollow' : 'Follow'}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
	},

	leftSection: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

