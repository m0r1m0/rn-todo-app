import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

interface FlexProps {
  flex: number;
  style?: ViewStyle;
}

const Flex: React.FC<FlexProps> = ({ style, flex, children }) => {
  return (
    <View
      style={{
        flex,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Flex;
