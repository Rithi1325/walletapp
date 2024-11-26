// RecentRechargeItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RecentRechargeItem = ({ item }) => (
  <View style={styles.recentItem}>
    <View style={styles.recentItemLeft}>
      <Text style={styles.providerIcon}>{item.provider}</Text>
      <View>
        <Text style={styles.recentName}>{item.name}</Text>
        <Text style={styles.recentPhone}>{item.phone}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.rechargeButton}>
      <Text style={styles.rechargeButtonText}>Recharge</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#15133C',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  recentItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  providerIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  recentName: {
    color: '#fff',
    fontWeight: '700',
  },
  recentPhone: {
    color: '#fff',
    fontSize: 12,
  },
  rechargeButton: {
    backgroundColor: '#EC994B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  rechargeButtonText: {
    color: '#15133C',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default RecentRechargeItem;
