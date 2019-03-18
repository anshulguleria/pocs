import React from "react";
import {
  StyleSheet,
  TextInput,
} from "react-native";

import colors from "../utils/colors";

function Input ({ inputValue, onChangeText, onDoneAddItem }) {
  return (
    <TextInput
      style={styles.input}
      value={inputValue}
      onChangeText={onChangeText}
      placeholder="Type to add note"
      multiline={true}
      autoCapitalize="sentences"
      underlineColorAndroid="transparent"
      selectionColor={"white"}
      maxLength={30}
      returnKeyType="done"
      autoCorrect={false}
      blurOnSubmit={true}
      onSubmitEditting={onDoneAddItem}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: colors.inputPlaceholder,
  }
});
