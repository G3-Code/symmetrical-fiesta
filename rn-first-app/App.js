import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.goalsTextInput}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  goalsTextInput: {
    borderColor: "#bbb",
    borderWidth: 1,
    width: 200,
    padding: 10
  }
});
