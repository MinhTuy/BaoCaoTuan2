import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Text

} from 'react-native';
const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.picture}} style={styles.photo} />
    <View style={styles.columcon}>
    <Text style={styles.text}>
      {props.title}
    </Text>
    <Text style={styles.text}>
      
    </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({

    container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    },
    columcon: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    },
	text: {
        fontWeight : 'bold'
	
	},
     photo: {
    height: 80,
    width: 40}

});
