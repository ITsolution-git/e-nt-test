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

export default class Entrecomment extends React.Component {

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

	_renderImage = (comment) => {
		const { view } = this.props;
		if (view == 'detailed') {
			return (
				<Image
					source={{ uri: comment.image }}
					style={[styles.image, { height: 400 }]}
					resizeMode="contain"
				/>
			);
		} else {

			return (
				<Image
					source={{ uri: comment.image }}
					style={styles.image}
				/>
			);
		}
	}

	render() {
		// view ['detailed']
		const { comment, handleReplyPress } = this.props;

		return (
			<View style={[styles.container]} key={comment.id}>
				<View style={styles.header}>
					<View>
						<EntreAvatar
							source={{
						    uri: comment.author.avatar
						  }}
					  />
					</View>

					<View style={{ width: 10 }} />

					<View style={{ flex: 1 }}>
						<EntreText h4>{comment.author.name}</EntreText>
						<View style={{ height: 5 }}/>

							<EntreText color='textGrey' >{comment.content}</EntreText>
						<View style={{ height: 5 }}/>

						<View style={styles.footer}>
							<TouchableOpacity style={styles.footerContent} onPress={()=>this.handleComment(comment)}>
								<Icon 
									size={18} 
									name='reply' 
									type='entypo' 
									color={theme.textGrey1}
								/> 
								<View style={{width: 5}} />
								<EntreText color='textGrey1' size={14}>Reply</EntreText>
							</TouchableOpacity>

							<View style={styles.footerContent} >
								<Icon 
									size={18} 
									name='ios-calendar'
									type='ionicon' 
									color={theme.textGrey1}
								/> 
								<View style={{width: 5}} />
								<EntreText color='textGrey1' size={14}>1 minute ago</EntreText>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',	
		flex: 1
	},

	content: {
		flex: 1
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

