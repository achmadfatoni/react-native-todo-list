import React, { Component } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            data: []
        }
    }

    _renderItem = ({item}) => (
        <TodoItem
            id={item.id}
            title={item.title}
        />
    );

    _onChangeText = (value) => this.setState({ inputValue: value });
    _onSubmit = () => {
        const { inputValue, data } = this.state;
        if (inputValue === '') {
            return Alert.alert('Todo cannot be empty');
        }

        let todos = data;
        console.log(todos);
        todos.push({ key: Math.random(), title: inputValue });
        console.log(todos);
        this.setState({ inputValue: '', data: todos});
    };

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
        console.log(this.state);
        return (
            <View>
                <Header title="Todo App"/>
                <TodoForm
                    onChangeText={this._onChangeText.bind(this)}
                    onSubmit={this._onSubmit.bind(this)}
                    value={this.state.inputValue}
                />
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    extraData={this.state}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});
