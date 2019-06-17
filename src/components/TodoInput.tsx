import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AddButton from './AddButton';

interface TodoInputProps {
  addTodo: () => void;
  changeTodoText: (text: string) => void;
  newTodoText: string;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo, changeTodoText, newTodoText }) => (
  <View style={styles.inputArea}>
    <TextInput
      style={styles.input}
      placeholder={'TODOを入力してください'}
      value={newTodoText}
      onChangeText={changeTodoText}
    />
    <AddButton onPress={addTodo} />
  </View>
);

const styles = StyleSheet.create({
  inputArea: {
    width: '100%',
    marginBottom: 16,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  input: {
    flex: 5,
    fontSize: 24,
    height: 40,
    marginLeft: 16,
  },
});

export default TodoInput;
