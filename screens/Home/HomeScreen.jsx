import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import PromotionBanner from '../../components/homeComponents/PromotionBanner.jsx';
import UtilityServices from '../../components/homeComponents/UtilityServices.jsx';
import BillSummary from '../../components/homeComponents/BillSummary.jsx';
import OfferSwipers from '../../components/swiperComponents/OfferSwipers.jsx';
import TransferOptions from '../../components/homeComponents/TransferOptions.jsx';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Hello Peter!</Text>
            <Text style={styles.userEmail}>Account ID: 7659584743</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Bill Summary Card */}
        <BillSummary />

        {/* TransferOptions */}
        <TransferOptions />

        {/* Utility services Grid */}
        <UtilityServices />

        {/* Promotional Banner */}
        <PromotionBanner />

        {/* offer Swipers */}
        <OfferSwipers />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC994B', // Gold
  },
  header: {
    backgroundColor: '#EC994B', // Gold
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F1EEE9', // Black text for the user name
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    fontWeight: 'bold',

    color: '#F1EEE9', // Black text for user email
    opacity: 0.9,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 16,
    color: 'black', // Black text for balance
    marginRight: 16,
  },
  notificationIcon: {
    padding: 4,
  },
  notificationText: {
    fontSize: 20,
    color: 'black', // Black notification text
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the content
  },
});

export default HomeScreen;
