import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/waterbillComponents/SearchBar'; // Ensure the path is correct
import InputField from '../components/waterbillComponents/InputField'; // Ensure the path is correct
import CustomButton from '../components/waterbillComponents/CustomButton'; // Ensure the path is correct

const WaterBill = () => {
  const [searchText, setSearchText] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    if (!customerId || !amount) {
      alert('Please fill in all the fields.');
      return;
    }
    alert(`Payment of ₹${amount} for Customer ID: ${customerId} is processed.`);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Customer ID or Services"
        value={searchText}
        onChangeText={setSearchText}
      />

      <Text style={styles.heading}>Water Bill Payment</Text>

      <InputField
        label="Customer ID"
        placeholder="Enter Customer ID"
        value={customerId}
        onChangeText={setCustomerId}
      />

      <InputField
        label="Amount"
        placeholder="Enter Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <CustomButton title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default WaterBill;
