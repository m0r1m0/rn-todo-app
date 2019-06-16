import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

interface AddButtonProps {
  onPress: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => (
  <View style={{ alignItems: 'flex-end' }}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.addButton}>+</Text>
    </TouchableOpacity>
  </View>
);

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 16,
  },
});
