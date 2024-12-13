import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const HelpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Help Title */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Help & Support</Text>
      </View>

      {/* Introduction */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Welcome to Help & Support</Text>
        <Text style={styles.sectionContent}>
          Find answers to common questions, detailed instructions, and ways to contact us if you need further assistance.
        </Text>
      </View>

      {/* FAQs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions (FAQs)</Text>
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I reset my password?</Text>
          <Text style={styles.faqAnswer}>
            To reset your password, go to the login screen and click on 'Forgot Password'. Follow the instructions to reset it.
          </Text>
        </View>
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I update my profile?</Text>
          <Text style={styles.faqAnswer}>
            To update your profile, go to 'Settings' and click on 'Edit Profile'. You can update your information from there.
          </Text>
        </View>
      </View>

      {/* Contact Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Support</Text>
        <Text style={styles.sectionContent}>
          If you need further assistance, feel free to reach out to our support team:
        </Text>
        <TouchableOpacity onPress={() => console.log('Email tapped')}>
          <Text style={styles.contactDetails}>Email: support@yourapp.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Phone tapped')}>
          <Text style={styles.contactDetails}>Phone: +1 800 123 4567</Text>
        </TouchableOpacity>
      </View>

      {/* User Instructions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How to Use the App</Text>
        <Text style={styles.sectionContent}>1. Log in with your credentials or sign up if you're new.</Text>
        <Text style={styles.sectionContent}>2. Navigate through the app using the bottom navigation bar.</Text>
        <Text style={styles.sectionContent}>3. For detailed reports and insights, go to the 'Reports' section.</Text>
        <Text style={styles.sectionContent}>4. You can always access help from this page for guidance.</Text>
      </View>
    </ScrollView>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',  // Light background for the whole screen
    padding: 20,
  },
  header: {
    backgroundColor: '#15133C',  // Dark color for header
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
    padding: 20,
    backgroundColor: '#fff',  // White background for sections
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#15133C',  // Matching section titles with header dark color
    marginBottom: 12,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 10,
  },
  faqItem: {
    marginBottom: 15,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',  // Green color for questions to stand out
  },
  faqAnswer: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  contactDetails: {
    fontSize: 16,
    color: '#4CAF50',  // Highlighted in green for a professional touch
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  contactTouchable: {
    padding: 10,
  },
});
