import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Button from '../../components/transactionComponents/Button';
import Header from '../../components/transactionComponents/Header';

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
    <View>
      <Text style={styles.transactionDate}>{item.date}</Text>
      {item.data.map((transaction) => (
        <View key={transaction.id} style={styles.transactionItem}>
          <Text>{transaction.type}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Transactions" />
      <View style={styles.balanceSection}>
        <Text style={styles.balanceTitle}>QuickPay Balance</Text>
        <Text style={styles.balanceAmount}>$3.85</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Send to Bank"
            onPress={() => navigation.navigate('BankTransfer')}
          />
          <Button title="Add Money" filled onPress={() => {}} />
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
    backgroundColor: '#FFFFFF',
  },
  balanceSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#666',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 15,
  },
  transactionList: {
    padding: 15,
  },
  transactionDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  transactionItem: {
    marginBottom: 15,
  },
});

export default TransactionScreen;
