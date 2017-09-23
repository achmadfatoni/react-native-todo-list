import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Header title="Todo App"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});
