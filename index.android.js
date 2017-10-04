/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Main from './src/components/Main';
import DemoState from './demostate.js';
export default class loginAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
        {/* <DemoState/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Login', () => loginAnimation);

