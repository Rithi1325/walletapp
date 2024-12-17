import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Alert} from 'react-native';
import icons from '../../constant/icons';
import RazorpayCheckout from 'react-native-razorpay';
import { environment } from '../config/env-config/dev';

const BillSummary = () => {
  const initiatePayment = () => {
    const options = {
      description: 'Purchase description',
      currency: environment.razorpay.razorpayCurrency,
      key: environment.razorpay.keyId,
      amount: '100000',
      name: 'Wallet',
      prefill: {
        email: 'test@ultrafly.com',
        contact: '1231231230',
        name: 'Ultrafly',
      },
      theme: {color: '#53a20e'},
    };

    RazorpayCheckout.open(options)
      .then(data => {
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        Alert.alert(`Error: ${error.description}`);
      });
  };

  return (
    <View style={styles.cardsContainer}>
      <View style={[styles.card, styles.dataCard]}>
        <View style={styles.circleContainer}>
          <Text style={styles.dataAmount}>£140</Text>
          <Text style={styles.dataUnit}>Due</Text>
        </View>
        <Text style={styles.cardLabel}>Total Due</Text>
      </View>

      {/* Bill Summary Card */}
      <View style={[styles.card, styles.usageCard]}>
        <View style={styles.buttonColumn}>
          {/* Add Money Button with Icon */}
          <TouchableOpacity
            style={[styles.button, styles.addMoneyButton]}
            onPress={initiatePayment}>
            <Image source={icons.plus} style={styles.buttonIcon} />
            <Text style={styles.addMoneyButtonText}>Add Money</Text>
          </TouchableOpacity>

          {/* Withdraw Button with Icon */}
          <TouchableOpacity style={[styles.button, styles.withdrawButton]}>
            <Image source={icons.minus} style={styles.buttonIcon} />
            <Text style={styles.withdrawButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BillSummary;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 10,
    backgroundColor: '#efbf04',
  },
  card: {
    backgroundColor: '#F1EEE9', // Light gray (silver tone) for cards
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000', // Black shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dataCard: {
    flex: 4,
    marginRight: 8,
    alignItems: 'center',
  },
  usageCard: {
    flex: 6,
    marginLeft: 8,
  },
  buttonColumn: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8, // Adds vertical space between buttons
  },
  button: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  addMoneyButton: {
    backgroundColor: '#28A745',
    borderColor: '#FFD700',
    borderWidth: 2,
    shadowColor: '#FFD700',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  addMoneyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  withdrawButton: {
    backgroundColor: '#15133C',
    borderColor: '#FFD700',
    borderWidth: 2,
    shadowColor: '#FFD700',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 6, // Glow spread
    elevation: 5,
  },
  withdrawButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  circleContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#15133C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#efbf04',
  },
  dataUnit: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#efbf04',
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#efbf04',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginRight: 10,
  },
});
