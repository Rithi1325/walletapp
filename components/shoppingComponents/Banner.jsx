import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import icons from '../../constant/icons';

const Banner = () => {
  return (
    <TouchableOpacity style={styles.banner} activeOpacity={0.8}>
      <View style={styles.iconContainer}>
        <Image source={icons.deliveryIcon} style={styles.icon} /> {/* Ensure 'deliveryIcon' exists */}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.bannerText}>
          Delivery is <Text style={styles.highlight}>50% cheaper</Text>
        </Text>
        <Text style={styles.subText}>
          Enjoy fast and affordable delivery on all orders!
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#15133C', // Dark background
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // For Android shadow
    paddingHorizontal: 16, // Adding some horizontal padding for better spacing
  },
  iconContainer: {
    marginRight: 12,
    backgroundColor: '#73777B', // Greyish background for the icon container
    padding: 12,
    borderRadius: 10, // Rounded corners for the icon container
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Shadow effect for the icon container
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff', // White icon
  },
  textContainer: {
    flex: 1,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    color: '#F1EEE9', // Light color text for visibility
    lineHeight: 24, // Better line spacing
  },
  highlight: {
    fontWeight: 'bold',
    color: '#EC994B', // Highlight color for emphasis
  },
  subText: {
    fontSize: 14,
    color: '#F1EEE9', // Subtext in greyish tone
    marginTop: 5,
    fontStyle: 'normal', // Changed to normal for proper styling
    lineHeight: 20, // Adjusted line height for better readability
  },
});

export default Banner;
