import React from "react";

import {
  Button,
  View,
  StyleSheet,
  Text,
  CheckBox,
} from "react-native";

import colors from "../utils/colors";

function ListItem ({ item, removeTodo, toggleCompleted }) {
  return (
    <View style={ styles.itemContainer }>
      <CheckBox
        value={item.completed}
        onValueChange={(value) => toggleCompleted(item, value)}
      />
      <Text
        style={styles.itemText}>
        { item.value }
      </Text>
      <Button
        onPress={() => removeTodo(item.value)}
        title="Delete Me!"
      />
    </View>
  );
}

export default ListItem;

/**
 *
 * Styles for list item component.
 *
 */
const styles = StyleSheet.create({
  itemContainer: {
    //backgroundColor: "#254",
    width: 200,
  },
  itemText: {
    color: colors.text,
  }
});
