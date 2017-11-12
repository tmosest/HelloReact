import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import Sketch from 'react-native-sketch';
// Required for file upload!
var RNFS = require('react-native-fs');


export class MyCanvas extends Component {
    clear = () => {
        this.sketch.clear();
    };

    save = () => {
        this.sketch.save().then(({ path }) => {

            var uploadURL = 'http://localhost:3000/upload';  //'https://requestb.in/pzt2rppz';

            console.log('Hitting Server ' + uploadURL + ' with: ' + path);

            var files = [
                {
                    name: 'image',
                    filename: 'image.png',
                    filepath: path,
                    filetype: 'image/png'
                }
            ];

            var uploadBegin = (response) => {
                var jobId = response.jobId;
                console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
            };

            var uploadProgress = (response) => {
                var percentage = Math.floor((response.totalBytesSent/response.totalBytesExpectedToSend) * 100);
                console.log('UPLOAD IS ' + percentage + '% DONE!');
            };

            // upload files
            RNFS.uploadFiles({
                toUrl: uploadURL,
                files: files,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                fields: {
                    name: 'image',
                    type: 'file',
                },
                begin: uploadBegin,
                progress: uploadProgress
            }).promise.then((response) => {
                if (response.statusCode == 200) {
                    console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
                } else {
                    console.log('SERVER ERROR');
                }
            }).catch((err) => {
                if(err.description === "cancelled") {
                    // cancelled by user
                }
                console.log(err);
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