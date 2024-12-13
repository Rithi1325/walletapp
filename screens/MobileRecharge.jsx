import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';
import SegmentedControl from '../components/rechargeComponents/SegmentedControl';
import RecentRechargeItem from '../components/rechargeComponents/RecentRechargeItem';
import OperatorPage from '../components/rechargeComponents/OperatorPage';

const MobileRecharge = () => {
  const [selectedType, setSelectedType] = useState('Prepaid');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Define recentRecharges here
  const recentRecharges = [
    { id: 1, name: 'John Smith', phone: '+1 234 567 8901', amount: '$20', provider: '📱' },
    { id: 2, name: 'Alice Brown', phone: '+1 345 678 9012', amount: '$30', provider: '📶' },
    { id: 3, name: 'Mike Johnson', phone: '+1 456 789 0123', amount: '$10', provider: '🔋' },
    { id: 4, name: 'John Smith', phone: '+1 234 567 8901', amount: '$20', provider: '📱' },
    { id: 5, name: 'Alice Brown', phone: '+1 345 678 9012', amount: '$30', provider: '📶' },
    { id: 6, name: 'Mike Johnson', phone: '+1 456 789 0123', amount: '$10', provider: '🔋' },
  ];

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
    setIsDropdownVisible(false); // Close dropdown after selection
  };

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
        <Text style={styles.title}>Selected Provider</Text>
        <TouchableOpacity
          style={styles.selectProviderButton}
          onPress={() => setIsDropdownVisible(true)}
        >
          <Text style={styles.selectProviderText}>
            {selectedProvider?.name || 'Select Provider'}
          </Text>
          {/* Dropdown Modal */}
          <Modal
            visible={isDropdownVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setIsDropdownVisible(false)}
          >

            <OperatorPage onSelectProvider={handleProviderSelect} />

          </Modal>
        </TouchableOpacity>

        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>

        <View style={styles.recentSection}>
          <Text style={styles.recentTitle}>Recent</Text>
          {recentRecharges.length > 0 ? (
            recentRecharges.map((item) => (
              <RecentRechargeItem key={item.id} item={item} />
            ))
          ) : (
            <Text style={styles.noRecentText}>No recent recharges</Text>
          )}
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
    fontSize: 13,
    color: '#15133C',
    padding: 10,
  },
  phoneInput: {
    backgroundColor: '#15133C',
    borderRadius: 12,
    padding: 16,
    color: 'white',
    marginBottom: 16,
  },
  selectProviderButton: {
    backgroundColor: '#15133C',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  selectProviderText: {
    color: '#fff',
    fontSize: 16,
  },
  payButton: {
    backgroundColor: '#efbf04',
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
    color: '#15133C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
  },
  closeButton: {
    backgroundColor: '#15133C',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  noRecentText: {
    color: '#15133C',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MobileRecharge;
