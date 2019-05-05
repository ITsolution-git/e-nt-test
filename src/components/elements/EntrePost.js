import React, { PureComponent } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import moment from 'moment';

import { theme } from '../../themes';

import {
	EntreText,
	EntreAvatar
} from './index';
import {
	Avatar,
	Icon,
	Divider,
	Image
} from 'react-native-elements';

import { kFormatter } from '../../utils';

export default class EntrePost extends React.Component {

	componentDidMount() {
		// Todo: get scalable image size.
		// Image.getSize(this.props.imageUrl, (width, height) => {
		//   // calculate image width and height 
		//   const screenWidth = Dimensions.get('window').width
		//   const scaleFactor = width / screenWidth
		//   const imageHeight = height / scaleFactor
		//   this.setState({imgWidth: screenWidth, imgHeight: imageHeight})
		// })
	}

	_renderImage = (post) => {
		const { view } = this.props;
		if (view == 'detailed') {
			return (
				<Image
					source={{ uri: post.image }}
					style={[styles.image, { height: 400 }]}
					resizeMode="contain"
				/>
			);
		} else {

			return (
				<Image
					source={{ uri: post.image }}
					style={styles.image}
				/>
			);
		}
	}

	_renderFooter = () => {
		const { view, post } = this.props;

		if (view == 'compact' || view == 'trending')
			return null;

		return (
			<View style={styles.footer}>
				<Divider />

				<View>
					<TouchableOpacity onPress={()=>this.handleShare(post)}>
						<Icon 
							size={18} 
							name='sharealt' 
							type='antdesign' 
							color={theme.textGrey1}
						/> 
					</TouchableOpacity>
				</View>

				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity style={styles.footerContent} onPress={()=>this.handleComment(post)}>
						<EntreText color='textGrey1' size={14}>{kFormatter(post.commentCount)}</EntreText>
						<View style={{width: 5}} />
						<Icon 
							size={18} 
							name='comment' 
							type='evilicon' 
							color={theme.textGrey1}
						/> 
					</TouchableOpacity>

					<View style={{width: 20}} />

					<TouchableOpacity style={styles.footerContent} onPress={()=>this.handleFav(post)}>
						<EntreText color='textGrey1' size={14}>{kFormatter(post.favCount)}</EntreText>
						<View style={{width: 5}} />
						<Icon 
							size={18} 
							name='heart' 
							type='evilicon' 
							color={theme.textGrey1}
						/> 
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	_renderContent = () => {
		const { post, handleContentPress, view } = this.props;

		return (
			<TouchableOpacity style={styles.content} onPress={()=>handleContentPress(post)}>
				<EntreText 
					color='textGrey1' 
					size={14}
					numberOfLines={ view === 'compact' ? 1 : null }
				>{post.content}</EntreText>
				
				<View style={{ height: 10 }} />

				{this._renderImage(post)}
			</TouchableOpacity>
		);
	}

	handleFav = (post) => {

	}

	handleComment = (post) => {
		
	}

	handleShare = (post) => {
		
	}

	render() {
		// view ['detailed', 'compact', 'normal', 'trending']
		const { post, handleContentPress, view } = this.props;

		return (
			<View style={[styles.container]} key={post.id}>
				<View style={styles.header}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View>
							<EntreAvatar
								source={{
									uri: post.author.avatar
								}}
							/>
						</View>

						<View style={{ width: 10 }} />

						<View>
							<EntreText h4>{post.author.name}</EntreText>
							<EntreText color='textGrey' >{moment(post.createdAt).format('LL')}</EntreText>
						</View>
					</View>

					<TouchableOpacity>
						<Icon size={20} name='chevron-down' type='material-community' /> 
					</TouchableOpacity>
				</View>

				{this._renderContent()}
				
				{this._renderFooter()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 20,
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

		backgroundColor: '#fff'
	},

	logo: {
		width: 240, 
		height: 90
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	content: {
		paddingVertical: 10
	},

	image: {
		height: 150,
		borderRadius: 20
	},

	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10
	},
	footerContent: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

