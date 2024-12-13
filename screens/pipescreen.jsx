import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import SearchBar from '../components/pipedGasComponents/SearchBar'; // Update path if needed
import InputField from '../components/pipedGasComponents/InputField'; // Update path if needed
import CustomButton from '../components/pipedGasComponents/CustomButton'; // Update path if needed

const PipedGas = () => {
  const [searchText, setSearchText] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  // Additional state for calculating payment breakdown
  const [taxRate] = useState(0.18); // 18% tax
  const [discountRate] = useState(0.05); // 5% discount

  // Calculate tax, discount, and final payable amount
  const calculateTax = (amount) => parseFloat(amount) * taxRate;
  const calculateDiscount = (amount) => parseFloat(amount) * discountRate;
  const calculateTotalAmount = (amount) => {
    const tax = calculateTax(amount);
    const discount = calculateDiscount(amount);
    return parseFloat(amount) + tax - discount;
  };

  const handlePayment = () => {
    if (!customerId || !amount) {
      alert('Please fill in all the fields.');
      return;
    }
    setShowModal(true); // Show confirmation modal before payment
  };

  const confirmPayment = () => {
    setShowModal(false);
    alert(`Payment of ₹${amount} for Customer ID: ${customerId} is processed.`);
  };

  const cancelPayment = () => {
    setShowModal(false);
  };

  const totalAmount = calculateTotalAmount(amount); // Total amount after tax and discount

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <SearchBar
        placeholder="Search Customer ID or Services"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Heading */}
      <Text style={styles.heading}>Piped Gas Payment</Text>

      {/* Customer ID Input */}
      <InputField
        label="Customer ID"
        placeholder="Enter Customer ID"
        value={customerId}
        onChangeText={setCustomerId}
      />

      {/* Amount Input */}
      <InputField
        label="Amount"
        placeholder="Enter Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      {/* Bill Summary */}
      <View style={styles.billSummary}>
        <Text style={styles.billText}>Amount: ₹{amount}</Text>
        <Text style={styles.billText}>Tax (18%): ₹{calculateTax(amount).toFixed(2)}</Text>
        <Text style={styles.billText}>Discount (5%): -₹{calculateDiscount(amount).toFixed(2)}</Text>
        <Text style={styles.billText}>Total Due: ₹{totalAmount.toFixed(2)}</Text>
        <Text style={styles.billText}>Last Payment: ₹0 (No payments yet)</Text>
      </View>

      {/* Payment Button */}
      <CustomButton title="Pay Now" onPress={handlePayment} />

      {/* Modal for Payment Confirmation */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={cancelPayment}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirm Payment</Text>
            <Text style={styles.modalText}>
              Are you sure you want to pay ₹{totalAmount.toFixed(2)} for Customer ID: {customerId}?
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity onPress={cancelPayment} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={confirmPayment} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  billSummary: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  billText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default PipedGas;
