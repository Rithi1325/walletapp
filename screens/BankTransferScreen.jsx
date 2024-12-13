import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Button from '../components/transactionComponents/Button';

const BankTransferScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Bank Account Number</Text>
        <TextInput style={styles.input} placeholder="Enter account number" />

        <Text style={styles.label}>Amount</Text>
        <TextInput style={styles.input} placeholder="Enter amount" keyboardType="numeric" />

        <Button title="Transfer" filled onPress={() => alert('Transfer initiated')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default BankTransferScreen;
