// MobileRecharge.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import SegmentedControl from '../../components/rechargeComponents/SegmentedControl';
import ProviderSelector from '../../components/rechargeComponents/ProviderSelector';
import RecentRechargeItem from '../../components/rechargeComponents/RecentRechargeItem';

const providers = [
  { id: 1, name: 'TelecomOne', icon: '📱' },
  { id: 2, name: 'NetworkPlus', icon: '📶' },
  { id: 3, name: 'MobileNet', icon: '🔋' },
];

const recentRecharges = [
  { id: 1, name: 'John Smith', phone: '+1 234 567 8901', amount: '$20', provider: '📱' },
  { id: 2, name: 'Alice Brown', phone: '+1 345 678 9012', amount: '$30', provider: '📶' },
  { id: 3, name: 'Mike Johnson', phone: '+1 456 789 0123', amount: '$10', provider: '🔋' },
  { id: 4, name: 'John Smith', phone: '+1 234 567 8901', amount: '$20', provider: '📱' },
  { id: 5, name: 'Alice Brown', phone: '+1 345 678 9012', amount: '$30', provider: '📶' },
  { id: 6, name: 'Mike Johnson', phone: '+1 456 789 0123', amount: '$10', provider: '🔋' },
];

const MobileRecharge = () => {
  const [selectedType, setSelectedType] = useState('Prepaid');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedProvider, setSelectedProvider] = useState(null);
 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        <SegmentedControl selected={selectedType} onSelect={setSelectedType} />
        <Text style={styles.title}>Enter Receiver Phone Number</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Enter phone number"
          placeholderTextColor="#fff"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
<Text style={styles.title}>selected Provider</Text>
        <ProviderSelector
          selectedProvider={selectedProvider}
          onSelect={() => setSelectedProvider(providers[0])}
        />

        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>

        <View style={styles.recentSection}>
          <Text style={styles.recentTitle}>Recent</Text>
          {recentRecharges.map(item => (
            <RecentRechargeItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize:13,
    color: '#15133C',
    padding:10,
  },
  phoneInput: {
    backgroundColor: '#15133C',
    borderRadius: 12,
    padding: 16,
    color: 'white',
    marginBottom: 16,
  },
  payButton: {
    backgroundColor: '#EC994B',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  recentSection: {
    marginTop: 16,
  },
  recentTitle: {
    color: '15133C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default MobileRecharge;
