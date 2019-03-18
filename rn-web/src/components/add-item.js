import React, { Fragment, Component } from "react";
import {
  Button,
} from "react-native";


import Input from "./input";

class AddItem extends Component {
  state = {
    inputValue: "",
  }

  updateInputValue = (value) => {
    this.setState({
      inputValue: value,
    });
  }

  addTodo = () => {
    this.props.addTodo({
      value: this.state.inputValue,
      completed: false,
    });

    // Clear text after addition
    this.setState({
      inputValue: "",
    });
  }

  render () {
    const { inputValue } = this.state;
    return (
      <Fragment>
        <Input
          inputValue={inputValue}
          onChangeText={this.updateInputValue}
        />

      <Button
        onPress={this.addTodo}
        title="Add Todo"
      />
    </Fragment>
    );
  }
}

export default AddItem;
