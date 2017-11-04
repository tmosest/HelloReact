import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import Sketch from 'react-native-sketch';

export class MyCanvas extends Component {
    clear = () => {
        this.sketch.clear();
    };

    save = () => {
        this.sketch.save().then(({ path }) => {
            console.log('Hitting Server with: ' + path);
            fetch('http://localhost:3000/params', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    path: path,
                })
            }).then((response) => response.json())
                .then(function(response) {
                    Alert.alert(JSON.stringify(response));
                })
                .catch(function(error) {
                   Alert.alert('Error: ' + error);
                });

        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Sketch
                    ref={sketch => {
                        this.sketch = sketch;
                    }}
                />
                <View style={styles.actionsBar}>
                    <Button color="#EA212E" onPress={this.clear} title="❌ Clear" />
                    <Button color="#1DBD21" onPress={this.save} title="Save  ✅" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 20,
    },
    actionsBar: {
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
});