import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const ProviderCard = ({ provider, onSelect }) => {
  return (
    <TouchableOpacity style={styles.providerCard} onPress={() => onSelect(provider)}>
      <View style={[styles.iconContainer, { backgroundColor: provider.color }]}>
        <Image
          source={provider.image}
          style={styles.providerImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.providerName}>{provider.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  providerCard: {
    width: '33.33%',
    padding: 8,
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,     // Increased from 64 to 100
    height: 100,    // Increased from 64 to 100
    borderRadius: 20, // Increased slightly for proportion
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'white',
  },
  providerImage: {
    width: 60,      // Increased from 40 to 60
    height: 60,     // Increased from 40 to 60
  },
  providerName: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});

export default ProviderCard;