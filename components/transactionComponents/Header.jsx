import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, onBackPress }) => {
  return (
    <View style={styles.header}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
