import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddToCartButton = ({ isInCart = false, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isInCart ? '#EC994B' : '#15133C' }]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center', // Ensure the text is centered properly
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default AddToCartButton;
