import React from 'react';
import { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	View,
	Image,
	StyleSheet,
	Dimensions
} from 'react-native';

import { theme } from '../../themes';
import { Icon, Input, Button } from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class EntreTabbar extends Component {

	constructor(props) {
		super(props);
	}

  
	// Main function to render tabbar
	renderTabBarButton(route, idx) {
		const {
			activeTintColor,
			inactiveTintColor,
			navigation,
			getLabelText,
			renderIcon,
		} = this.props;

		const currentIndex = navigation.state.index;
		const color = currentIndex === idx ? activeTintColor : inactiveTintColor;
		const label = getLabelText({ route, focused: currentIndex === idx, index: idx });

		console.log(route);
		return (
			<TouchableOpacity
				onPress={() => {
					if (currentIndex != idx) {
						if (this.isNavigateAvaliable(label)) {
							navigation.navigate(route.routeName);
						} else {
							this._onNavigationRefused(label);
						}
					}
				}}
				style={styles.tabBarButton}
				key={route.routeName}
			>
				
        <Icon
          type='antdesign'
          name='linkedin-square'
          size={30}
          color='white'
        />
				{/* renderIcon({ route, tintColor: color, focused: currentIndex === idx, index: idx }) */}
				
				{/* <Text style={[ styles.tabBarButtonText, { color }]}>
					{label}
				</Text>  */}
			</TouchableOpacity>
		);
	}

	isNavigateAvaliable(label) {
		const func = this.navigationAvaliableFuncs[label];
		if (func) {
			return func();
		}
		return true;
	}

	_onNavigationRefused(label) {
		const func = this.navigationRefusedFuncs[label];
		if (func) {
			func();
		}
	}

	render() {
		const { navigation, style } = this.props;
		const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton.bind(this));
		return (
			<View style={[styles.tabBar, style]}>
				{tabBarButtons}
			</View>
		);
	}
}


const styles = StyleSheet.create({
  tabBar: {
  	width: width,
  	height: 80,
  	borderWidth: 1,
  	flexDirection: 'row'
  },

});