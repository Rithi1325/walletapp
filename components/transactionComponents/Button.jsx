import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, filled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, filled ? styles.filled : styles.outline]}
      onPress={onPress}
    >
      <Text style={filled ? styles.filledText : styles.outlineText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#15133C',
    backgroundColor: 'transparent',
  },
  outlineText: {
    color: '#15133C',
  },
  filled: {
    backgroundColor: '#15133C',
  },
  filledText: {
    color: '#FFF',
  },
});

export default Button;
