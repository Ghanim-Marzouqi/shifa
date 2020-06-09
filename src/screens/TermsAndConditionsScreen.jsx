import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TermsAndConditionsScreen() {
  return (
    <View style={styles.container}>
      <Text>Terms And Conditions Screen</Text>
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
