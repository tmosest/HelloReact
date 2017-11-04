import React, { Component } from 'react';
import { Text } from 'react-native';

/**
 * An example of how to use dynamic properties in elements
 * <Greeting name='Tyler' />
 */
export class Greetings extends Component {
    render() {
        return (
            <Text>Hello {this.props.name} !</Text>
        );
    }
}