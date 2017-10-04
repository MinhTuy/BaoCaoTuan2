import React, { Component } from 'react'
import { Text, View } from 'react-native'

class DemoState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myState: 'Ví dụ co bản về state',
        }

    }
    Clickme() {
        this.setState({
            myState: 'state đã được thay đổi',
        });
    }
    render() {
        return (
            <View sytle={{alignItems:'center',justifyContent:'center'}}>
                <Text onPress={() => this.Clickme()} style={{ fontSize:30, color:'red',fontWeight:'bold'}}>
                    {this.state.myState}
                </Text>
            </View>
        );
    }
}
export default DemoState;

