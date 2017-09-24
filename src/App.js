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
            item={item}
            onPressItem={this._onPressItem}
        />
    );

    _onChangeText = (value) => this.setState({ inputValue: value });
    _onDeleteItem = (item) => {
      let todos = this.state.data;
      todos = todos.filter((todo) => {
          return todo.key !== item.key;
      });

      this.setState({ data: todos});
    };
    _onPressItem = (item) => {
        Alert.alert('Action', 'Choose your action', [
            { text: 'Cancel', onPress: () => console.log('cancel pressed'), style: 'cancel' },
            { text: 'Edit', onPress: () => console.log('edit button pressed') },
            { text: 'Delete', onPress: () => this._onDeleteItem(item) },
        ]);
    };
    _onSubmit = () => {
        const { inputValue, data } = this.state;
        if (inputValue === '') {
            return Alert.alert('Error', 'Todo cannot be empty');
        }

        let todos = data;
        todos.push({ key: Math.random(), title: inputValue });
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

    _renderList = () => {
        if (this.state.data.length > 0) {
            return (
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    extraData={this.state}
                />
            )
        }

        return <Text style={styles.noTodoStyle}>No Todos</Text>
    };

    render() {
        return (
            <View>
                <Header title="Todo App"/>
                <TodoForm
                    onChangeText={this._onChangeText.bind(this)}
                    onSubmit={this._onSubmit.bind(this)}
                    value={this.state.inputValue}
                />
                { this._renderList() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    noTodoStyle: {
        fontSize: 16,
        marginLeft: 12,
        paddingBottom: 10,
        paddingTop: 10
    }
});
