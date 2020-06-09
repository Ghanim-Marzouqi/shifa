import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TipsAndAdviceScreen() {
  return (
    <View style={styles.container}>
      <Text>Tips And Advice Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
