import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';

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
        <View style={styles.usageRow}>
          <Text style={styles.usageLabel}>Last Payment</Text>
          <Text style={styles.usageValue}>£75.50</Text>
        </View>
        <View style={styles.usageRow}>
          <Text style={styles.usageLabel}>Due Date</Text>
          <Text style={styles.usageValue}>25 Nov 2024</Text>
        </View>
        <TouchableOpacity style={styles.topupButton}>
          <Text style={styles.topupButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BillSummary;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom:10,
    backgroundColor: '#EC994B',
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
  usageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  usageLabel: {
    color: '#EC994B', // Dark gray label
    fontWeight: 'bold',
  },
  usageValue: {
    fontWeight: 'bold',
    color: '#EC994B', // Black text for value
  },
  topupButton: {
    backgroundColor: '#15133C', // Blue for button
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  topupButtonText: {
    color: '#F1EEE9',
    fontWeight: 'bold',
  },
});
