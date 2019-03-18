import React from "react";

import {
  View,
  ScrollView,
  StyleSheet,
} from "react-native";

import ListItem from "./list-item";


function List ({ list, removeTodo, toggleCompleted, }) {
  return (
    <ScrollView>
      {
        list.map((item) => (
            <View style={styles.itemContainer}>
              <ListItem
                removeTodo={removeTodo}
                toggleCompleted={toggleCompleted}
                item={item} />
            </View>
        ))
      }
    </ScrollView>
  );
}

export default List;

const styles = StyleSheet.create({
  itemContainer: {
  }
});
