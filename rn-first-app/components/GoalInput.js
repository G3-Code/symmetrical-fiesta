import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  ShadowPropTypesIOS
} from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState();

  const inputTextHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your goal"
        style={styles.goalsTextInput}
        onChangeText={inputTextHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.buttonHandler(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;
