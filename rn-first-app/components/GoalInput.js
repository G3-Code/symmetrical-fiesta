import React from "react";
import { View, StyleSheet } from "react-native";

const GoalInput = () => {
  const [enteredGoal, setEnteredGoal] = useState();

  const inputTextHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addButtonHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your goal"
        style={styles.goalsTextInput}
        onChangeText={inputTextHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={addButtonHandler} />
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
