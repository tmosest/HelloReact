import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        width: 34,
        height: 34,
        borderRadius: 34 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// Our custom component we want as a button in the nav bar
export const TextButton = ({ text }) =>
    <TouchableOpacity
        style={[styles.button, { backgroundColor: 'tomato' }]}
        onPress={() => console.log('pressed me!')}
    >
        <View style={styles.button}>
            <Text style={{ color: 'white' }}>
                {text}
            </Text>
        </View>
    </TouchableOpacity>;