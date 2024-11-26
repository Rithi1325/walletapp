import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Button from '../../components/transactionComponents/Button';
// import Header from '../../components/transactionComponents/Header';

const TransactionScreen = ({ navigation }) => {
  const transactions = [
    {
      id: 1,
      date: 'Today, 19 Dec, 2018',
      data: [
        {
          id: 't1',
          type: 'Paid for Order on QuickPay',
          amount: '- $10.50',
          time: '3:14 pm',
          category: 'Pre paid recharge',
          icon: 'up',
        },
        {
          id: 't2',
          type: 'Received as Cashback',
          amount: '+ $20.00',
          time: '11:14 am',
          category: 'Train Ticket Booking',
          icon: 'down',
        },
      ],
    },
  ];

  const renderTransactionGroup = ({ item }) => (
    <View style={styles.transactionGroup}>
      <Text style={styles.transactionDate}>{item.date}</Text>
      {item.data.map((transaction) => (
        <View key={transaction.id} style={styles.transactionItem}>
          <Text style={styles.transactionType}>{transaction.type}</Text>
          <Text style={[styles.transactionAmount, transaction.icon === 'up' ? styles.redAmount : styles.greenAmount]}>
            {transaction.amount}
          </Text>
          <Text style={styles.transactionDetails}>{transaction.category} - {transaction.time}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.balanceSection}>
        <Text style={styles.balanceTitle}>QuickPay Balance</Text>
        <Text style={styles.balanceAmount}>$3.85</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Send to Bank"
            onPress={() => navigation.navigate('BankTransfer')}
            style={styles.sendToBankButton}
          />
          <Button title="Add Money" filled onPress={() => {}} style={styles.addMoneyButton} />
        </View>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTransactionGroup}
        contentContainerStyle={styles.transactionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: 20,
  },
  balanceSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  sendToBankButton: {
    width: '48%',
  },
  addMoneyButton: {
    width: '48%',
  },
  transactionList: {
    paddingHorizontal: 15,
  },
  transactionGroup: {
    marginBottom: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  transactionDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  transactionItem: {
    marginBottom: 10,
  },
  transactionType: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  redAmount: {
    color: '#E57373', // Red color for payments
  },
  greenAmount: {
    color: '#81C784', // Green color for cashback or credit
  },
  transactionDetails: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default TransactionScreen;
