import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card: React.FC = ({ children }) => <View style={styles.card}>{children}</View>;

const styles = StyleSheet.create({
  card: {
    minHeight: 80,
    borderRadius: 6,
    backgroundColor: '#fff',
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'grey',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default Card;
