import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import icons from '../../constant/icons'; // Make sure this path is correct for your icons

const BillSummary = () => {
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
          <TouchableOpacity style={[styles.button, styles.addMoneyButton]}>
            <Image source={icons.plus} style={styles.buttonIcon} /> {/* Add Money Icon */}
            <Text style={styles.addMoneyButtonText}>Add Money</Text>
          </TouchableOpacity>

          {/* Withdraw Button with Icon */}
          <TouchableOpacity style={[styles.button, styles.withdrawButton]}>
            <Image source={icons.minus} style={styles.buttonIcon} /> {/* Withdraw Icon */}
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
    backgroundColor: '#EC994B',
  },
  card: {
    backgroundColor: '#F1EEE9', // Light gray (silver tone) for cards
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000', // Black shadow
    shadowOffset: { width: 0, height: 2 },
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
    flexDirection: 'row', // Ensures the icon and text are in a row
  },
  addMoneyButton: {
    backgroundColor: '#15133C', // Green color for Add Money button
  },
  addMoneyButtonText: {
    color: '#FFFFFF', // White text for better contrast
    fontWeight: 'bold',
    marginLeft: 8, // Space between the icon and the text
  },
  withdrawButton: {
    backgroundColor: '#15133C', // Red color for Withdraw button
  },
  withdrawButtonText: {
    color: '#FFFFFF', // White text for better contrast
    fontWeight: 'bold',
    marginLeft: 8, // Space between the icon and the text
  },
  circleContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#15133C', // Light gold color for the border
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EC994B', // Black text for amount
  },
  dataUnit: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#EC994B', // Black text for unit
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#EC994B', // Dark gray text for the label
  },
  buttonIcon: {
    width: 20,
    height: 20, // Adjust icon size as necessary
    tintColor:"#fff",
    marginRight:10,
  },
});
