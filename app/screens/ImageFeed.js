import React, { Component } from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import {Banana} from '../components/Banana/Banana';

export class ImageFeed extends Component {
    render() {
        return(
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Banana/><Banana/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Banana/><Banana/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Banana/><Banana/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Banana/><Banana/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Banana/><Banana/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Banana/><Banana/>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Banana/><Banana/>
                </View>
            </ScrollView>
        );
    }
}