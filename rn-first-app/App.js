import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your goal"
          style={{
            borderColor: "#bbb",
            borderWidth: 1,
            width: 200,
            padding: 10
          }}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
