import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        marginLeft: 12,
        paddingBottom: 10,
        paddingTop: 10
    },
});