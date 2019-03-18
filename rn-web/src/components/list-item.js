import React from "react";

import {
  Button,
  View,
  StyleSheet,
  Text,
} from "react-native";

import colors from "../utils/colors";

function ListItem ({ item, removeTodo }) {
  return (
    <View stye={ styles.itemContainer }>
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
  },
  itemText: {
    color: colors.text,
  }
});
