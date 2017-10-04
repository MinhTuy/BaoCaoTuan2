import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/logof.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				{/* <Image source={logoImg} style={styles.image} /> */}
				<Image
					source={{
						uri:
						'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'
					}}
					style={{ width: 200, height: 200 }}
				/>


				<Text style={styles.text}>APP FRUIT</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 85,
		height: 85,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 30,
	}
});
