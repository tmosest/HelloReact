import React, { Component } from 'react';
import { Image } from 'react-native';

/**
 * An example of how to use variables are properties for componenets.
 */
export class Banana extends Component {
    render() {
        let pic = {
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        );
    }
}