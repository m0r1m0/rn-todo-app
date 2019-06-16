import React from 'react';
import Card from './Card';
import CheckBox from './CheckBox';
import { Text, StyleSheet, View, Alert } from 'react-native';
import { Todo } from '../App';

interface TodoItemProps {
  item: Todo;
  onChecked: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onChecked }) => (
  <Card>
    <View style={styles.itemContainer}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 8,
        }}
      >
        <CheckBox isChecked={item.isCompleted} onChecked={() => onChecked(item.id)} />
      </View>
      <View
        style={{
          flex: 5,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Text style={item.isCompleted ? styles.completedItem : styles.item}>{item.text}</Text>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
  },
  completedItem: {
    fontSize: 24,
    textDecorationLine: 'line-through',
  },
  itemContainer: {
    flexDirection: 'row',
  },
});

export default TodoItem;
