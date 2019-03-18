import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import colors from "../utils/colors";

function Header ({ title }) {
  return (
    <View style={ styles.headerContainer }>
      <Text style={ styles.headerText }>
        { title.toUpperCase() }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
  },

  headerText: {
    color: colors.textColor,
    fontSize: 22,
    fontWeight: '550',
  },
});

export default Header;
