import React, { PureComponent, Fragment } from "react";
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Keyboard, Animated, Dimensions, ScrollView } from "react-native";
import { connect } from "react-redux";

import { 
	Icon, 
	Input, 
	Button,
} from 'react-native-elements';
import { logo } from "./../../assests/assets";
import { theme } from '../../themes';

import EntreHeader from '../../components/layouts/EntreHeader';
import {
	EntreButton,
	EntreText,
	EntrePost,
	EntreAvatar
} from '../../components/elements';

class ActivityScreen extends PureComponent {
 
	state = { 
	}

	constructor(props) {
		super(props);
	}

	_renderActivity = (activity) => {

		let actionType = null;
		let actionDescription = '';
		if (activity.activityType == 'follow_request') {
			actionType = <EntreButton
				btnStyle={{ }}
				textStyle={{ fontWeight: 'bold' }}
				onPress={()=>{}}
				btnType={EntreButton.TYPE_SMALL_ROUND_OUTLINE}
				colorType={EntreButton.COLOR_BLUE}
				btnText={'Accept'}
			/>;
			actionDescription = `${activity.user.name} started to follow you`;
		} else if (activity.activityType == 'liked_post') {
			actionType = <EntreAvatar
				source={{
					uri: activity.post.image
				}}
				size={50}
			/>;
			actionDescription = `${activity.user.name} liked your post`;
		}

		return (
			<View style={[styles.activityContainer]} key={activity.id}>

				<View style={styles.leftSection}>
					<EntreAvatar
						source={{
							uri: activity.user.avatar
						}}
						rounded
						size={50}
					/>
					<View style={{width: 20}} />

					<EntreText color={'textGrey'}>{actionDescription}</EntreText>
				</View>

				<View>

					{actionType}
				</View>
			</View>
		);
	}

	render() {
		const {activities} = this.props;

		return (  
			<View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
				<EntreHeader
					navigation={this.props.navigation}
				/>

				<View style={styles.container}>
					<ScrollView>
						<View style={{ height: 20 }} />

						<EntreText bold h1>Activity</EntreText>
						<EntreText bold color={'textGrey'}>125 people are following you</EntreText>

						{activities.map(this._renderActivity)}
					</ScrollView>
				</View>
			</View>
		);
	}
}

export default connect(state => {
	return {
		activities: state.activities.activities,
	};
},
	{}
)(ActivityScreen);



const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20
	},
	activityContainer: {
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
