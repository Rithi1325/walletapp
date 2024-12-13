import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function NotificationsScreen() {
  const notifications = [
    { type: 'recharge', message: 'Your recharge of ₹10 was successful!', time: '2 mins ago' },
    { type: 'ecommerce', message: 'Your order #12345 has been shipped.', time: '1 hour ago' },
    { type: 'recharge', message: 'You’ve received ₹5 bonus credit.', time: 'Yesterday' },
    { type: 'ecommerce', message: 'Flash Sale: Up to 50% off on electronics!', time: '2 days ago' },
  ];

  return (
    <ScrollView style={styles.container}>
      {notifications.map((notification, index) => (
        <View
          key={index}
          style={[
            styles.notification,
            notification.type === 'recharge' ? styles.recharge : styles.ecommerce,
          ]}
        >
          <Text style={styles.message}>{notification.message}</Text>
          <Text style={styles.time}>{notification.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  notification: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  recharge: {
    borderLeftWidth: 5,
    borderLeftColor: '#4caf50', // Green for recharge notifications
  },
  ecommerce: {
    borderLeftWidth: 5,
    borderLeftColor: '#2196f3', // Blue for e-commerce notifications
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: '500',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});
