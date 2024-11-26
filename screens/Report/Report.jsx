import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import images from '../../constant/images'; // Assuming images are correctly imported

const Report = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Monthly Overview</Text>
        <Text style={styles.subtitle}>A quick look at your performance this month</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula eros sit amet purus scelerisque, ut sodales leo posuere. Curabitur accumsan urna ut neque malesuada, eget elementum ipsum posuere. Morbi feugiat felis et felis tincidunt, non tristique eros condimentum.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Expenses Breakdown</Text>
        <Text style={styles.subtitle}>View your categorized spending for this month</Text>
        {/* Expenses Chart Placeholder with Image */}
        <View style={styles.chartPlaceholder}>
          <Image
            source={images.expenses} // Assuming you have this image in your images constant
            style={styles.expensesImage}
            resizeMode="contain" // Ensures the image scales well without distortion
          />
        </View>
        <Text style={styles.content}>
          This section displays the breakdown of your expenses in various categories like food, transportation, entertainment, etc. Detailed charts will give a visual representation of how you spent your money this month.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Revenue Summary</Text>
        <Text style={styles.subtitle}>Track your income and earnings</Text>
        {/* Revenue Chart Placeholder with Image */}
        <View style={styles.chartPlaceholder}>
          <Image
            source={images.revenue} // Assuming you have this image in your images constant
            style={styles.revenueImage}
            resizeMode="contain" // Ensures the image scales well without distortion
          />
        </View>
        <Text style={styles.content}>
          The revenue summary gives an overview of your total income for the month. It helps you track your earnings from various sources, including salary, business income, investments, etc.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Insights & Recommendations</Text>
        <Text style={styles.subtitle}>Here’s how you can improve your financial health</Text>
        <Text style={styles.content}>
          Based on your current spending habits, we recommend setting a budget for categories like dining and entertainment. Consider investing in passive income options to increase your revenue.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Report generated on: 26th November 2024</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F8F8F8',
  },
  section: {
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
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 15,
  },
  chartPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  expensesImage: {
    width: '170%',
    height: '100%',
    borderRadius: 8,
  },
  revenueImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  chartText: {
    color: '#888',
    fontSize: 18,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
});

export default Report;
