import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert, AsyncStorage } from 'react-native';
import Header from './src/components/Header';
import Flex from './src/components/Flex';
import TodoInput from './src/components/TodoInput';
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

async function getData(setTodo: React.Dispatch<React.SetStateAction<Todo[]>>) {
  try {
    const todosString = await AsyncStorage.getItem('@TodoItems');
    const todos: Todo[] | null = JSON.parse(todosString);
    if (todos) {
      setTodo(todos);
    }
  } catch (error) {
    console.error(error);
  }
}

async function saveData(todos: Todo[], setTodo: React.Dispatch<React.SetStateAction<Todo[]>>) {
  try {
    setTodo(todos);
    await AsyncStorage.setItem('@TodoItems', JSON.stringify(todos));
  } catch (error) {}
}

export default function App() {
  const [newTodoText, changeTodoText] = useState('');
  const [todos, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    getData(setTodo);
    return () => {
      Alert.alert('unmounted');
    };
  }, []);

  const handleAddClick = () => {
    if (newTodoText.length > 0) {
      const newTodos = todos.concat({
        id: getNextId(todos),
        text: newTodoText,
        isCompleted: false,
      });
      saveData(newTodos, setTodo);
      changeTodoText('');
    }
  };

  const handleTodoClick = (id: number) => {
    const index = todos.findIndex(t => t.id === id);

    if (index > -1) {
      saveData(
        [
          ...todos.slice(0, index),
          {
            ...todos[index],
            isCompleted: !todos[index].isCompleted,
          },
          ...todos.slice(index + 1),
        ],
        setTodo
      );
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
