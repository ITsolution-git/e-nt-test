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
  SceneMap 
} from 'react-native-tab-view';

import { logo } from "./../../assests/assets";
import { theme } from '../../themes';

import EntreHeader from '../../components/layouts/EntreHeader';
import {
	EntreButton,
	EntreText,
	EntrePost,
	EntreAvatar,
	EntrePersonItem,
	EntreVideo
} from '../../components/elements';

class VideoPlayScreen extends PureComponent {
 
	state = { 

	}

	constructor(props) {
		super(props);
	}
	handlePlay = (video) => {
		this.props.navigation.navigate('VideoPlayScreen');
	}

	render() {
		const { videos, video } = this.props;

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

				<EntreVideo
					video={video}
					view={'playing'}
					handlePlay={this.handlePlay}
				/>

				<View  style={styles.container}>
					<ScrollView>
						{videos.map(video=>
							<EntreVideo 
								video={video}
								view={'compact'}
								key={video.id}
								handlePlay={this.handlePlay}
							/>
						)}
					</ScrollView>
				</View>
			</View>
		);
	}
}

export default connect(state => {
	return {	
		videos: state.videos.videos,
		video: state.videos.video
	};
}, {

})(VideoPlayScreen);



const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 5,
		backgroundColor: '#F7F7F7'
	},
});
