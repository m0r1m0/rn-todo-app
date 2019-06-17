import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Flex from './src/components/Flex';
import TodoInput from './src/components/TodoInput';
import Card from './src/components/Card';
import TodoItem from './src/components/TodoItem';

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

function getNextId(todos: Todo[]) {
  const currentMaxId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) : 0;
  return currentMaxId + 1;
}

export default function App() {
  const [newTodoText, changeTodoText] = useState('');
  const [todos, setTodo] = useState<Todo[]>([]);

  const handleAddClick = () => {
    if (newTodoText.length > 0) {
      setTodo(state =>
        state.concat({
          id: getNextId(state),
          text: newTodoText,
          isCompleted: false,
        })
      );
      changeTodoText('');
    }
  };

  const handleTodoClick = (id: number) => {
    const index = todos.findIndex(t => t.id === id);

    if (index > -1) {
      setTodo(state => [
        ...state.slice(0, index),
        {
          ...state[index],
          isCompleted: !state[index].isCompleted,
        },
        ...state.slice(index + 1),
      ]);
    }
  };

  return (
    <Flex flex={1}>
      <Header />
      <Flex flex={1} style={styles.contentContainer}>
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <TodoInput addTodo={handleAddClick} changeTodoText={changeTodoText} newTodoText={newTodoText} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={todos}
            contentContainerStyle={{
              paddingTop: 16,
            }}
            renderItem={({ item }) => <TodoItem item={item} onChecked={handleTodoClick} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 16,
  },
  listContainer: {
    flex: 1,
    paddingTop: 8,
  },
  item: {
    fontSize: 24,
    padding: 8,
  },
});
