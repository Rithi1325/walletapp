import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import icons from '../../constant/icons'; // Importing the icons object
import {useNavigation} from '@react-navigation/native';
const { width } = Dimensions.get('window'); // Get screen width

const TransferOptions = () => {

  const navigation = useNavigation();

  const transferOptions = [
    {
      id: 1,
      title: 'Bank Transfer',
      icon: icons.bankTransfer, // Bank Transfer icon
      onPress: () => navigation.navigate('BankTransfer'),
    },
    {
      id: 2,
      title: 'Pay Contact',
      icon: icons.payContact, // Pay Contact icon
      onPress: () => navigation.navigate('PayContact'),
    },
    {
      id: 3,
      title: 'Self Transfer',
      icon: icons.selfTransfer, // Self Transfer icon
      onPress: () => navigation.navigate('SelfTransfer'),
    },
  ];

  return (
    <View style={styles.container}>
      {transferOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionContainer}
          onPress={option.onPress}
          accessibilityLabel={option.title}
          accessibilityHint={`Navigate to ${option.title}`}
        >
          <View style={styles.iconContainer}>
            <Image source={option.icon} style={styles.icon} />
          </View>
          <Text style={styles.optionText}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#efbf04',
    width: width,
  },
  optionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 64) / 3,
    paddingVertical: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    textAlign: 'center',
  },
});

export default TransferOptions;
