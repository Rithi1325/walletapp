import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'; // Optional, for PropTypes validation

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

// Optional: PropTypes validation (useful for larger projects)
AddToCartButton.propTypes = {
  isInCart: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10, // Adjusted for better spacing
    paddingHorizontal: 16, // Adjusted for better spacing
    borderRadius: 4,
    marginTop: 12, // Adjusted for consistent layout
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default AddToCartButton;
