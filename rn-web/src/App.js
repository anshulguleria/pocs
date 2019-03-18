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

let demoTodoList = [
  {
    value: "first",
    completed: false,
  },
  {
    value: "second",
    completed: false,
  },
  {
    value: "third",
    completed: false,
  },
  {
    value: "fourth",
    completed: false,
  }
];

class App extends Component {
  state = {
    inputValue: "",
    todoList: demoTodoList,
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

  toggleCompleted = (item, newValue) => {
    this.setState({
      todoList: this.state.todoList.map((todoItem) => {
        if(item.value === todoItem.value) {
          return {
            ...todoItem,
            completed: newValue,
          };
        }

        return todoItem;
      }),
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
          addTodo={this.addTodo} />

      <List
        list={todoList}
        toggleCompleted={this.toggleCompleted}
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
    margin: 40,
  },
  centered: {
    alignItems: "center",
  },
});
