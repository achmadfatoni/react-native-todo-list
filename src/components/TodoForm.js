import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.props.value}
                    style={styles.input}/>
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    input: {
        height: 40,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#CED0CE'
    },
    buttonContainer: {
        backgroundColor:'#2980b9',
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }
});