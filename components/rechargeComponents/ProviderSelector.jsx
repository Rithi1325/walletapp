// ProviderSelector.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ProviderSelector = ({ selectedProvider, onSelect }) => (
  <TouchableOpacity style={styles.providerSelector} onPress={onSelect}>
    <Text style={styles.providerText}>
      {selectedProvider ? `${selectedProvider.icon} ${selectedProvider.name}` : 'Select Provider'}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  providerSelector: {
    backgroundColor: '#15133C',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  providerText: {
    color: 'white',
  },
});

export default ProviderSelector;
