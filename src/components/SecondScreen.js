import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated, Navigator,
	ListView,
	Easing
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import { Container, Content, Button, Text, Header, Left, Body, Center, Icon, Title, Right } from 'native-base';
import arrowImg from '../images/left-arrow.png';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import iconImg from '../images/H.png';
import { SideMenu } from 'react-native-elements'
import SideBar from './SiderBar';
const SIZE = 50;

export default class SecondScreen extends Component {
	constructor() {
		super();

		this.state = {
			isOpen: false,
			selectedItem: 'About',
			isLoading: false,
			dataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}),
		};

		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
		this.toggleSideMenu = this.toggleSideMenu.bind(this)
	}
	onSideMenuChange(isOpen: boolean) {
		this.setState({
			isOpen: isOpen
		})
	}

	toggleSideMenu() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	opensider() {
		this.setState({
			isOpen: true
		})
	}
	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });

		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 300,
				easing: Easing.linear,
			}
		).start();

		setTimeout(() => {
			Actions.pop();
		}, 500);
	}

	ILVonPress(textimage, texttitle, textid) {

		Actions.detail({ image: textimage, title: texttitle, id: textid });
		console.log("ExbbbbbA");
		//Actions.firstScreen();

	}
	ILVonPress1() {

		//Actions.detail({image: textimage, title:texttitle,id:textid});
		Actions.firstScreen();

	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});
		return (
			<SideMenu
				isOpen={this.state.isOpen}
				onChange={this.onSideMenuChange.bind(this)}
				menu={<SideBar />}>
				<Container >
					<Header style={{ backgroundColor: '#48CC4D' }}>
						<Left>
							<TouchableOpacity onPress={(this._onPress)}>
								<Image style={styles.image} source={arrowImg} />
							</TouchableOpacity>
						</Left>
						<Body>
							<TouchableOpacity onPress={(this.ILVonPress1)}>
								<Image style={{ width: 50, height: 50, marginLeft: 65 }} source={iconImg} />
							</TouchableOpacity>
						</Body>
						<Right>
							<TouchableOpacity
								onPress={() => { this.opensider() }}
							>
								<Icon name="menu" style={{ color: 'white' }} />
							</TouchableOpacity>
						</Right>

					</Header>
					<Content >
						
						<Calendar
							// Initially visible month. Default = Date()

							markedDates={{
								'2017-07-20': [{ textColor: 'blue' }],
								'2017-07-22': [{ startingDay: true, color: 'red' }],
								'2017-07-23': [{ endingDay: true, color: 'red', textColor: 'gray' }],
								'2017-07-04': [{ startingDay: true, color: 'green' }, { endingDay: true, color: 'green' }]
							}}
							markingType={'interactive'}

							// Handler which gets executed on day press. Default = undefined
							onDayPress={(day) => { console.log('selected day', day) }}
							// Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
							monthFormat={'yyyy MM'}
							// Handler which gets executed when visible month changes in calendar. Default = undefined
							onMonthChange={(month) => { console.log('month changed', month) }}
							// Hide month navigation arrows. Default = false
							hideArrows={false}
							hideExtraDays={true}
							disableMonthChange={true}
							// If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
							firstDay={1}
							style={{
								borderWidth: 1,
								borderColor: '#CED9E1',
								height: 380
							}} />

						<ListView dataSource={this.state.dataSource}

							renderRow={(row) =>
								<TouchableOpacity onPress={() => this.ILVonPress(row.Image, row.Title, row.Id)/* (this.ILVonPress1)*/}>
									<View style={styles.container1}>

										<Image source-={{ uri: row.Image }} style={styles.photo} />
										<View style={styles.columcon}>
											<View style={{ width: 500, height: 1, backgroundColor: '#CED9E1' }} />
											<Text style={styles.text1}>{row.Title}</Text>
											<Text style={styles.text2}> {row.Descript}</Text>
											<View style={{ width: 500, height: 1, backgroundColor: '#CED9E1', position: 'absolute', bottom: 0 }} />
										</View>

									</View>
									
								</TouchableOpacity>}>
						</ListView>
						<View style={styles.container} />

					</Content>

				</Container>
			</SideMenu>


		);

	}

	componentDidMount() {
		var mang = [new News("Day one", "http://www.cookforyourlife.org/wp-content/uploads/2015/08/iStock_000023687386_Medium-min-min-1200x799.jpg", "Dâu", 1),
		new News("Day two", "http://mumcentral.com.au/wp-content/uploads/2015/12/Fruit-Juice-696x464.jpg", "Cam", 2),
		new News("Day three", "http://nebadonia.hr/wp-content/uploads/2016/05/Green-Smoothie-with-Avocado-Kiwi-and-Cucumber-300x261.jpg", "Bơ", 3),
		new News("Day four", "https://i2.read01.com/uploads/0GQPwxgWAc.jpg", "Chuối", 4),
		new News("Day five", "http://media.doisongphapluat.com/416/2015/4/2/tuyet-chieu-lam-nuoc-ep-nho-thanh-nhiet-ngay-he%20(1).jpg", "Nho", 5),

		];
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(mang)

		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 0,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#F035E0',
	},
	image: {
		width: 24,
		height: 24,
	},
	container1: {
		flex: 1,
		padding: 0,
		flexDirection: 'row',
		backgroundColor: 'white'


	},
	columcon: {
		flex: 1,

		flexDirection: 'column',

	},
	text1: {
		paddingLeft: 8,
		paddingTop: 5,
		fontWeight: 'bold'


	},
	text2: {

		marginTop: 40,
		textAlign: 'right'


	},
	photo: {
		height: 90,
		width: 110
	}
});

function News(title, image, descript, id) {
	this.Title = title;
	this.Image = image;
	this.Descript = descript;
	this.Id = id;
}
/*export const SiderMenu = DrawerNavigator({
	Tabbar:{
		screen: SecondScreen
	},
},
	{
	  drawerWidth: 300,
	drawerPosition: 'left',
	contentComponent: props =><SiderBar {...props} />
	}

);*/