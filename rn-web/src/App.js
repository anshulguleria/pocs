import React, { Component } from 'react';
import './App.css';
import {
  View,
  StyleSheet,
  StatusBar,
} from "react-native";

import Header from "./components/header";
import List from "./components/list";
import AddItem from "./components/add-item";
import colors from "./utils/colors";

class App extends Component {
  state = {
    inputValue: "",
    todoList: [{ value: "default item", completed: false, }],
  }

  updateInputValue = (value) => {
    this.setState({
      inputValue: value,
    });
  }

  addTodo = (todo) => {
    this.setState({
      todoList: [
        // Append our item
        todo,
        ...this.state.todoList,
      ],
    });
  }

  removeTodo = (todoValue) => {
    const newList = this.state.todoList.filter((item) => {
      return item.value !== todoValue;
    });

    this.setState({
      todoList: newList,
    });
  }

  render () {
    let headerTitle = "To Do";
    const { todoList } = this.state;
    return (
      <View style={ styles.container }>
        <StatusBar barStyle="light-content"/>
        <View style={ styles.centered } >
          <Header title={ headerTitle }/>
        </View>

        <AddItem
          addTodo={this.addTodo}
        />

      <List
        list={todoList}
        removeTodo={this.removeTodo} />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.appBackground,
  },
  centered: {
    alignItems: "center",
  },
});
