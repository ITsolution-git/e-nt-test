import React, { Component } from 'react';
import { NavigationActions, SafeAreaView } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { connect } from "react-redux";
import { Icon } from 'react-native-elements';

import { theme } from '../../themes';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const menuFields = [
	{ value: 'HomeDrawer', label: 'Home1', icon: 'home', type: 'material-community', iconColor: theme.textBlue},
	{ value: 'HomeDrawer', label: 'Home2', icon: 'home', type: 'material-community', iconColor: theme.textBlue },
	{ value: 'HomeDrawer', label: 'Home3', icon: 'home', type: 'material-community', iconColor: theme.textBlue },
	{ value: 'HomeDrawer', label: 'Home4', icon: 'logout', type: 'material-community', iconColor: theme.textBlue },
];

const bottomMenuFields = [
	{ value: 'Landing', label: 'Log out', icon: 'logout', type: 'material-community', iconColor: theme.textBlue }
];

export class DrawerSidebar extends Component {
	renderItem = (item) => {
		return (
			<TouchableOpacity key={item.value} style={styles.menuItem} key={item.label} 
					onPress={this.navigateToScreen(item)}>

        <Icon
          type={item.type}
          name={item.icon}
          size={24}
          color={item.iconColor}
        />
				<Text
					style={styles.menuItemText}
				>
					{item.label}
				</Text>
			</TouchableOpacity>
		);
	}

	renderMenuFields = () => {
		return (
			<View style={styles.menuContainer}>
				<View>{menuFields.map((item) => this.renderItem(item))}</View>
			</View>
		)
	};

	navigateToScreen = (item) => () => {
		if (item.label == 'Log out') {
			this.props.navigation.navigate('Landing');
			return;
		}
		const navigateAction = NavigationActions.navigate({
			routeName: item.value
		});
		this.props.navigation.dispatch(navigateAction);
		this.props.navigation.dispatch(DrawerActions.closeDrawer());
	};

	render () {
		return (
			<SafeAreaView  style={{ flex: 1 }}>
				<View>
					<Text>Header</Text>
				</View>	
				<ScrollView>
					<View style={styles.menuContainer}>
						<View>{menuFields.map((item) => this.renderItem(item))}</View>
					</View>
				</ScrollView>

				<View style={styles.menuContainer}>
					<View>{bottomMenuFields.map((item) => this.renderItem(item))}</View>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 70,
		backgroundColor: '#FFF',
		borderBottomWidth: 0
	},

	menuContainer: {
		marginHorizontal: 20,
		marginVertical: 10
	},

	menuItem: {
		height: 70,
		flexDirection: 'row'
	},
	menuItemText: {
		...theme.font,
		fontSize: 18
	}
});

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DrawerSidebar);

