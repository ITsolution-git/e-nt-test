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

const CONTENT_TYPES = [{
	key: 'blogs', title: 'Blogs'
}, {
	key: 'videos', title: 'Videos'
}, {
	key: 'pictures', title: 'Pictures'
}, {
	key: 'all', title: 'All'
}, ];

class LearningScreen extends PureComponent {
 
	state = { 

		showSearchFilter: false,

		filter: {
			contentType: 'pictures'
		}
	}

	constructor(props) {
		super(props);
	}

	_renderSearchFilterOverlay = () => {
		const { index, showSearchFilter, filter } = this.state;
		const { onboarding } = this.props;

		return (
			<Overlay isVisible
				onBackdropPress={() => this.setState({ showSearchFilter: !showSearchFilter })}
				// animationType={'slide'}
				windowBackgroundColor={'#00000050'}
				containerStyle={{ }}
				overlayStyle={{ }}
				height={400}
			>
				<ScrollView> 
					<View>
						<EntreText bold>Type</EntreText>
						<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
							{CONTENT_TYPES.map(type => {
								return (
									<EntreButton
										key={type.key}
										btnStyle={[styles.filterBtn, { marginLeft: 10 } ]}
										textStyle={{ color: type.key === filter.contentType ? theme.textWhite : theme.textBlack }}
										onPress={()=>this.setState({ filter: {...filter, contentType: type.key }})}
										btnType={EntreButton.TYPE_SMALL_FILTER}
										colorType={ type.key === filter.contentType ? EntreButton.COLOR_BLUE : EntreButton.COLOR_WHITE }
										btnText={type.title}
									/>
								);
							})}
						</View>

						<EntreText bold>Topics</EntreText>
						<View style={{ }}>
							{onboarding.industries.map(ques => {
								return (
									<CheckBox
										left
										checkedColor={theme.textGrey}
										uncheckedColor={theme.textGrey}
										size={20}
										title={ques.title}
										checkedIcon='circle'
										uncheckedIcon='circle-o'
										key={ques.id}
										containerStyle={{ backgroundColor: '#fff', margin: 0, borderWidth: 0,  paddingHorizontal: 3 }}
										textStyle={[theme.font,  { color: '#000' }]}
										// onIconPress={()=>, ques.id)}
									/>
								);
							}) }
						</View>
					</View>
				</ScrollView>
			</Overlay>
		);
	}

	_renderFilters = () => {
		const { index, showSearchFilter, showLocationFilter } = this.state;

		return (
			<View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
				<Icon type={'antdesign'} name={'youtube'} color={'#FF0000'} size={30}/>
				<View style={{width: 5}} />

				<EntreText h2 bold>YouTube</EntreText>
				<View style={{width: 10}} />

				<Input
					inputStyle={[theme.font, { fontSize: 13, padding: 0 }]}
					placeholder='Search'
					autoCapitalize='none'
					editable={false}
					containerStyle={[styles.filterInput, { paddingHorizontal: 0, flex: 1 }]}
					inputContainerStyle={{ paddingHorizontal: 5, borderBottomWidth: 0, height: 30 }}
					rightIcon={{ type: 'material-community', name: 'filter-variant' }}
					onTouchStart={()=>this.setState({ showSearchFilter: !showSearchFilter })}
				/>

				{showSearchFilter && this._renderSearchFilterOverlay()}
			</View>
		);
	}

	handlePlay = (video) => {
		this.props.navigation.navigate('VideoPlayScreen');
	}

	render() {
		const { videos } = this.props;

		return (  
			<View style={{ paddingBottom: this.keyboardHeight, flex: 1 }}>
				<EntreHeader
					navigation={this.props.navigation}
				/>

				{this._renderFilters()}

				<View  style={styles.container}>
					<ScrollView>
						{videos.map(video=>
							<EntreVideo 
								video={video}
								view={'normal'}
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
		onboarding: state.onboarding,
		videos: state.videos.videos

	};
}, {

})(LearningScreen);



const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		alignSelf: 'flex-start'
	},


	filterInput: {
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 5,

		shadowColor: '#4a4a4a',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 3,
		shadowOpacity: 0.5,
		backgroundColor: '#fff',

		margin: 3,
		padding: 3
	},
	filterBtn: {
		borderColor: '#fff',

		shadowColor: '#4a4a4a',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 3,
		shadowOpacity: 0.3,

		margin: 3,
	}
});
