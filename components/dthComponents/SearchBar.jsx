import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import icons from '../../constant/icons'; // Ensure this is the correct import for your icon

const SearchBar = ({ onSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Image source={icons.SearchIcon} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search for Providers..."
          placeholderTextColor="#6B7280"
          onChangeText={onSearch} // Calling the onSearch function from parent on input change
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#F1EEE9',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
});

export default SearchBar;
