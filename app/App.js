/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import  { Banana } from './components/Banana/Banana';
import { Blink } from './components/Blink/Blink';
import { Greetings } from './components/Greetings/Greetings';
import  { HelloWorld } from './components/HelloWorld/HelloWorld';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <HelloWorld/>
        <Text style={styles.welcome}>
            <Greetings name="Tyler"/> Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
            <Blink text="To get started, edit App.js"/>
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Banana/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
