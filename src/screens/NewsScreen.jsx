import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
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
