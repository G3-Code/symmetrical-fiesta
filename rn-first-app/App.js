import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ paddingTop: 50, height: 200 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your goal"
          style={{
            borderColor: "#bbb",
            borderWidth: 1,
            width: 350,
            height: 40
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 1
  }
});
