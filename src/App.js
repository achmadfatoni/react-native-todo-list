import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { key: 1, title: 'Todo 1'}, {key: 2, title: 'Todo 2'}
            ]
        }
    }

    _renderItem = ({item}) => (
        <TodoItem
            id={item.id}
            title={item.title}
        />
    );

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "#CED0CE",
                }}
            />
        );
    };

    render() {
        return (
            <View>
                <Header title="Todo App"/>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});
