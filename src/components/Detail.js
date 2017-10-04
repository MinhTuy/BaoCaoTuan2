import React, { Component } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
const { width } = Dimensions.get('window')
import arrowImg from '../images/left-arrow.png';
import iconImg from '../images/H.png';
import Dimensions from 'Dimensions';
const DEVICE_HEIGHT = Dimensions.get('window').height;
import { Container, Content, Button, Header, Left,Body ,Center,Icon,Title,Right} from 'native-base';
export default class Main extends Component {

	 constructor() {
		super();
		
		
		
	}
	onPress() {
		Actions.pop();
	}
  render() {
	var a = 'none'
	  if(this.props.id===1)
	  {
	 	var a = 'Nước dâu không những mang đến cảm giác mát mẻ, sảng khoái cho những ngày hè mà còn có nhiều tác dụng chữa bệnh'
	  }else if(this.props.id===2)
	  {
	 	var a = 'Cam là một trong những loại trái cây được sử dụng nhiều nhất trên thế giới. Không chỉ bổ dưỡng, cam còn có nhiều công dụng kỳ diệu khác nếu biết sử dụng nó đúng cách'
	  }
	  else if(this.props.id===3)
	  {
	 	var a = 'Giàu vitamin và khoáng chất, bơ là một trong những loại quả cung cấp nhiều chất dinh dưỡng cho cơ thể nhất. Đặc biệt, bơ còn có tác dụng làm đẹp da, rất thích cho cánh chị em. Món tráng miệng với nước bơ ép sữa tươi sẽ khiến bạn yêu thích'
	  }
	  else if(this.props.id===4)
	  {
	 	var a = 'Mỗi ngày, bạn uống 1 ly nước chuối ép chính là cách bảo vệ cơ thể và sức khỏe của mình một cách tự nhiên và an toàn nhất.'
	  }
	  else if(this.props.id===5)
	  {
	 	var a = 'Mỗi ngày thưởng thức một ly nước ép nho tươi ngon sẽ giúp da bạn trắng sáng, ngăn ngừa lão hóa và giữ dáng cực tốt. Ngày 8/3 sắp đến, hãy chú ý chăm sóc bản thân mình bằng việc uống nước ép nho tươi để chào đón ngày này nhé!'
	  }
	 

		
	  return (
	   <Container>
				<Header style={{ backgroundColor:'#48CC4D'}}>
					<Left>
						<TouchableOpacity  onPress={(this.onPress)} >
							<Image style={styles.image} source={arrowImg} />					
						</TouchableOpacity>
					</Left>
					<Body>
						<Image style={{width:50,height:50,marginLeft:65}} source={iconImg} />	
					</Body>
					<Right>
						<TouchableOpacity >
							<Icon name="menu" style={{ color: 'white'}} />
						</TouchableOpacity>
					</Right>
					
				</Header>
				<Content style={{backgroundColor:'#E7F1F0', height:DEVICE_HEIGHT}}>							
					
					<Image style={styles.photo} source={{uri:this.props.image}}/>
					<View style={styles.container1}>						
						<Text style={{ color:'#6A7E7C',flex:0.15,fontSize :11}}>SPACE.com</Text>
						<Icon name="alarm" style={{fontSize: 12, color: '#6A7E7C',paddingTop:2}}/>
						<Text style={{ color:'#6A7E7C',flex:0.25,fontSize :11,paddingLeft:5}}>20m ago</Text>
						<Text style={{ color:'#6A7E7C',flex:0.25,fontSize :12,paddingRight:10,textAlign:'right'}}>SCIENCE</Text>
					</View>
					<Text style = {styles.text}>{this.props.title}</Text>
					<Text style = {styles.text1}>{a}</Text>
					
				</Content>
			
			</Container>
	  );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	 photo: {
    height : 320,
    width},
	image: {
		width :24,
		height: 24,
	},
	text:{
		fontWeight:'bold',
		fontSize: 16,
		paddingLeft:10,
	
		color:'#6A7E7C'
	}
	,
	text1:{
		
		fontSize: 15,
		paddingLeft:10,
	
		color:'black'
	}
	,

	 container1: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',


    
    }
  
});
