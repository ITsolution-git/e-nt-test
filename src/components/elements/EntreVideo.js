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

export default class EntreVideo extends PureComponent {

	componentDidMount() {
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

	render() {
		// view ['normal', 'playing', 'compact']
		const { video, handlePlay, view } = this.props;

		if (view === 'normal') {
			return (
				<View style={[styles.container]}>
					<View>
						<View style={styles.player}>
							<Image
								source={{ uri: 'https://www.arborday.org/trees/lifestages/images/figure-life-stages.jpg' }}
								style={[styles.image, { height: 150 }]}
								
							/>
							<View style={[styles.videoOverlay, { height: 150 }]}>
								<TouchableOpacity onPress={()=>handlePlay(video)}>
									<Icon 
										size={50} 
										name='play' 
										type='foundation' 
										color={'#FFF'}
									/> 
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.footer}>
							<View style={{ flex: 3 }}>
								<EntreText numberOfLines={2}>Simplifying interfaces and experiences since 2012.  Feel free to contact me for full-time or freelance work opportunities.</EntreText>
							</View>
							<View style={styles.buttonGroup}>
								<TouchableOpacity onPress={()=>{}}>
									<Icon 
										size={18} 
										name='thumbs-up' 
										type='entypo' 
										color={theme.textGrey1}
									/> 
								</TouchableOpacity>
								<View style={{width: 5}} />

								<TouchableOpacity onPress={()=>{}}>
									<Icon 
										size={18} 
										name='thumbs-down' 
										type='entypo' 
										color={theme.textGrey1}
									/> 
								</TouchableOpacity>
								<View style={{width: 5}} />


								<TouchableOpacity onPress={()=>{}}>
									<Icon 
										size={18} 
										name='share' 
										type='entypo' 
										color={theme.textGrey1}
									/> 
								</TouchableOpacity>
								<View style={{width: 5}} />

							</View>
						</View>
					</View>
				
				</View>
			);
		} else if (view === 'compact') {
			return (
				<View style={[styles.container]}>
					<View style={{flexDirection: 'row'}}>
						<View style={[styles.player, { width: 150, borderRadius: 10 }]}>
							<Image
								source={{ uri: 'https://www.arborday.org/trees/lifestages/images/figure-life-stages.jpg' }}
								style={[styles.image, { height: 100 }]}
								
							/>
							<View style={[styles.videoOverlay, { height: 100 }]}>
								<TouchableOpacity onPress={()=>handlePlay(video)}>
									<Icon 
										size={50} 
										name='play' 
										type='foundation' 
										color={'#FFF'}
									/> 
								</TouchableOpacity>
							</View>
						</View>
						<View style={[styles.footer, { flexDirection: 'column', alignItems: 'center', flex: 1 }]}>
							<View style={{ flex: 3 }}>
								<EntreText numberOfLines={2}>Simplifying interfaces and experiences since 2012.  Feel free to contact me for full-time or freelance work opportunities.</EntreText>
							</View>
							<View style={styles.buttonGroup}>
							</View>
						</View>
					</View>
				
				</View>
			);
		} else if (view === 'playing') {
			return (
				<View style={{}}>
					<View>
						<View style={[styles.player, {borderTopRightRadius: 0, borderTopLeftRadius: 0}]}>
							<Image
								source={{ uri: 'https://www.arborday.org/trees/lifestages/images/figure-life-stages.jpg' }}
								style={[styles.image, { height: 150 }]}
								
							/>
							<View style={[styles.videoOverlay, { height: 150 }]}>
								<TouchableOpacity onPress={()=>handlePlay(video)}>
									<Icon 
										size={50} 
										name='skip-previous' 
										type='material-community' 
										color={'#FFF'}
									/> 
								</TouchableOpacity>

								<TouchableOpacity onPress={()=>handlePlay(video)}>
									<Icon 
										size={50} 
										name='play' 
										type='material-community' 
										color={'#FFF'}
									/> 
								</TouchableOpacity>

								<TouchableOpacity onPress={()=>handlePlay(video)}>
									<Icon 
										size={50} 
										name='skip-next' 
										type='material-community' 
										color={'#FFF'}
									/> 
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.footer}>
							<View style={{ flex: 3 }}>
								<EntreText numberOfLines={2}>Simplifying interfaces and experiences since 2012.  Feel free to contact me for full-time or freelance work opportunities.</EntreText>
							</View>
							<View style={styles.buttonGroup}>
								<TouchableOpacity onPress={()=>{}}>
									<Icon 
										size={18} 
										name='thumbs-up' 
										type='entypo' 
										color={theme.textGrey1}
									/> 
								</TouchableOpacity>
								<View style={{width: 5}} />

								<TouchableOpacity onPress={()=>{}}>
									<Icon 
										size={18} 
										name='thumbs-down' 
										type='entypo' 
										color={theme.textGrey1}
									/> 
								</TouchableOpacity>
								<View style={{width: 5}} />


								<TouchableOpacity onPress={()=>{}}>
									<Icon 
										size={18} 
										name='share' 
										type='entypo' 
										color={theme.textGrey1}
									/> 
								</TouchableOpacity>
								<View style={{width: 5}} />

							</View>
						</View>
					</View>
				
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		padding: 0,

		borderWidth: 0,
		borderColor: '#fff',

		shadowColor: '#4a4a4a',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 5,
		shadowOpacity: 0.4,

		margin: 5,

		backgroundColor: '#fff'
	},

	player: {
		borderTopLeftRadius: 10, 
		borderTopRightRadius: 10, 
        overflow: 'hidden'
	},
	image: {
	},
	videoOverlay: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#FF0000',

		flexDirection: 'row'
	},

	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10
	},

	buttonGroup: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

