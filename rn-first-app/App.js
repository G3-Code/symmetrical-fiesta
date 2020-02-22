import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState();
  const [courseGoals, setCourseGoals] = useState([]);

  const inputTextHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addButtonHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(enteredGoal => [...courseGoals, enteredGoal]);
    console.log(enteredGoal);
    console.log("============================" + courseGoals);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.goalsTextInput}
          onChangeText={inputTextHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addButtonHandler} />
      </View>
      <View>
        <Text>Course Goals</Text>
      </View>
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
