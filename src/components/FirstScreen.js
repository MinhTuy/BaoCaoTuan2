import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Animated, Text, ListView

} from 'react-native';
import Swiper from 'react-native-swiper'
import Dimensions from 'Dimensions';
import { Container, Content, Button, Header, Left, Body, Center, Icon, Title, Right } from 'native-base';
const { width } = Dimensions.get('window')
import iconImg from '../images/H.png';
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
        };
    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#3BBF3B' }}>
                    <Left>
                        <TouchableOpacity >
                            <Icon name="power" style={{ color: 'white' }} />
                        </TouchableOpacity>
                    </Left>
                    <Body>

                        <Image style={{ width: 50, height: 50, marginLeft: 65 }} source={iconImg} />
                    </Body>
                    <Right>
                        <TouchableOpacity

                        >
                            <Icon name="menu" style={{ color: 'white' }} />
                        </TouchableOpacity>
                    </Right>

                </Header>
                <Content >
                    <View>
                        <Swiper style={styles.wrapper} height={290}
                            dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                            activeDot={<View style={{ backgroundColor: 'black', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                            autoplay={true}>
                            <View style={styles.slide} >
                                <Image resizeMode='stretch' style={styles.image} source={require('../images/1.jpg')} >
                                    <Text style={{ color: '#5A5A5A', textAlign: 'left', paddingLeft: 5, fontWeight: 'bold', fontSize: 16, paddingTop: 180 }}>Aussie tourist dies at Bali hotel</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 5, paddingTop: 30 }}>
                                        <Text style={{ color: '#5A5A5A', flex: 0.15, fontSize: 11 }}>SPACE.com</Text>
                                        <Icon name="alarm" style={{ fontSize: 12, color: '#5A5A5A', paddingTop: 2 }} />
                                        <Text style={{ color: '#5A5A5A', flex: 0.25, fontSize: 11, paddingLeft: 5 }}>20m ago</Text>
                                        <Text style={{ color: '#5A5A5A', flex: 0.25, fontSize: 12, paddingRight: 10, textAlign: 'right' }}>SCIENCE</Text>
                                    </View>
                                </Image>
                            </View>
                            <View style={styles.slide} >
                                <Image resizeMode='stretch' style={styles.image} source={require('../images/2.jpg')} >
                                    <Text style={{ color: '#5A5A5A', textAlign: 'left', paddingLeft: 5, fontWeight: 'bold', fontSize: 16, paddingTop: 180 }}>Big lie behind Nine’s new show</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 5, paddingTop: 30 }}>
                                        <Text style={{ color: '#5A5A5A', flex: 0.15, fontSize: 11 }}>SPACE.com</Text>
                                        <Icon name="alarm" style={{ fontSize: 12, color: '#5A5A5A', paddingTop: 2 }} />
                                        <Text style={{ color: '#5A5A5A', flex: 0.25, fontSize: 11, paddingLeft: 5 }}>20m ago</Text>
                                        <Text style={{ color: '#5A5A5A', flex: 0.25, fontSize: 12, paddingRight: 10, textAlign: 'right' }}>SCIENCE</Text>
                                    </View>
                                </Image>
                            </View>
                            <View style={styles.slide} >
                                <Image resizeMode='stretch' style={styles.image} source={require('../images/3.jpg')} >
                                    <Text style={{ color: '#5A5A5A', textAlign: 'left', paddingLeft: 5, fontWeight: 'bold', fontSize: 16, paddingTop: 180 }}>Why Stone split from Garfield</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 5, paddingTop: 30 }}>
                                        <Text style={{ color: '#5A5A5A', flex: 0.15, fontSize: 11 }}>SPACE.com</Text>
                                        <Icon name="alarm" style={{ fontSize: 12, color: '#5A5A5A', paddingTop: 2 }} />
                                        <Text style={{ color: '#5A5A5A', flex: 0.25, fontSize: 11, paddingLeft: 5 }}>20m ago</Text>
                                        <Text style={{ color: '#5A5A5A', flex: 0.25, fontSize: 12, paddingRight: 10, textAlign: 'right' }}>SCIENCE</Text>
                                    </View>
                                </Image>
                            </View>
                            <View style={styles.slide}>
                                <Image resizeMode='stretch' style={styles.image} source={require('../images/4.jpg')} >
                                    <Text style={{ color: '#5A5A5A', textAlign: 'left', paddingLeft: 5, fontWeight: 'bold', fontSize: 16, paddingTop: 180 }}>Learn from Kim K to land that job</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 5, paddingTop: 30 }}>
                                        <Text style={{ color: '#5A5A5A', flex: 0.15, fontSize: 11 }}>SPACE.com</Text>
                                        <Icon name="alarm" style={{ fontSize: 12, color: '#5A5A5A', paddingTop: 2 }} />
                                        <Text style={{ color: '#5A5A5A', flex: 0.25, fontSize: 11, paddingLeft: 5 }}>20m ago</Text>
                                        <Text style={{ color: '#5A5A5A', flex: 0.25, fontSize: 12, paddingRight: 10, textAlign: 'right' }}>SCIENCE</Text>
                                    </View>
                                </Image>
                            </View>
                        </Swiper>

                        <ListView dataSource={this.state.dataSource}
                            renderRow={(row) =>
                                <TouchableOpacity >

                                    <View style={styles.columcon}>
                                        <View style={{ width: 500, height: 1, backgroundColor: '#CED9E1' }} />

                                        <Text style={styles.text1}>
                                            {row.Title}</Text>
                                        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 5, paddingTop: 30 }}>
                                            <Text style={{ color: '#6A7E7C', flex: 0.2, fontSize: 12 }}>{row.Web}</Text>
                                            <Icon name="alarm" style={{ fontSize: 13, color: '#6A7E7C', paddingTop: 2 }} />
                                            <Text style={{ color: '#6A7E7C', flex: 0.15, fontSize: 12, paddingLeft: 5 }}>{row.Time}</Text>
                                            <Text style={{ color: '#6A7E7C', flex: 0.3, fontSize: 13, paddingRight: 10, textAlign: 'right' }}>{row.Topic}</Text>
                                        </View>
                                        <View style={{ width: 500, height: 1, backgroundColor: '#CED9E1', position: 'absolute', bottom: 0 }} />

                                    </View>

                                </TouchableOpacity>
                            }
                        >
                        </ListView>
                    </View>
                </Content>
            </Container>

        );
    }

    componentDidMount() {
        var mang = [new Info("Samsung Bixby: Hands on with the AI assistant", "IT", "PCWORLD.COM", "5m ago"),
        new Info("Turkey: Opposition newspaper journalists go on trial in Istanbul", "POLITICS", "CNN.com", "2h ago"),
        new Info("The Most Important Elections You Haven’t Heard About", "ELECTIONS", "NBCNEWS.COM", "5h ago"),
        new Info("Grilled Chicken Tacos with Avocado Goat Cheese Sauce", "FOOD", "FOXNEWS.COM", "1d ago"),
        new Info("Disputes Between Germany and Turkey Threaten to Affect NATO Mission", "MILITARY", "WSJ.COM", "1w ago"),

        ];
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(mang)

        })
    }
}
function Info(title, topic, web, time) {
    this.Title = title;
    this.Topic = topic;
    this.Web = web;
    this.Time = time;
}
const styles = {
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    image: {
        width,
        flex: 1,
        backgroundColor: 'transparent',

    },
    columcon: {
        flex: 1,

        flexDirection: 'column',

    },
    text1: {
        paddingLeft: 8,
        paddingTop: 5,
        fontWeight: 'bold',



    },
    container1: {
        flex: 1,
        padding: 0,
        flexDirection: 'row',
        backgroundColor: 'white'


    },
    wrapper: {
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

}