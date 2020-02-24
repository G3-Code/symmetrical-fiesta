import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState();
  const [courseGoals, setCourseGoals] = useState([]);

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
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
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
