import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PersonalInfoScreen() {
  return (
    <View style={styles.container}>
      <Text>Personal Info Screen</Text>
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
