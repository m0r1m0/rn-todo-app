import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CheckBoxProps {
  isChecked: boolean;
  onChecked: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, onChecked }) => (
  <TouchableOpacity onPress={onChecked}>
    <View style={{ ...styles.checkbox, borderColor: isChecked ? 'green' : 'gray' }}>
      <Text style={styles.check}>{isChecked ? '✓' : ''}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'green',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    fontSize: 24,
    color: 'green',
  },
});

export default CheckBox;
