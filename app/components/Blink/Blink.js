import React, { Component } from 'react';
import { Text } from 'react-native';

/**
 * This component is an example of how states can work.
 * Here we use the state to make the component blink.
 * Usually the state would be data driven (and probably by Redux).
 */
export class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}