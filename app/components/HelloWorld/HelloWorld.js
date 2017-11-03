import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './StyleSheet';

export class HelloWorld extends Component {
    /**
     * @name render
     * @description Function to determine what the Component will show.
     * In this case it returns the text "Hello World!".
     * @returns {XML} JSX
     */
    render() {
        return (
            <Text style={styles.helloWorld}>Hello World!</Text>
        );
    }
}