import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AmbulanceRequestScreen() {
  return (
    <View style={styles.container}>
      <Text>Ambulance Request Screen</Text>
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
