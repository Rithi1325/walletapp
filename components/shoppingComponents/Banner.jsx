// components/Banner.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import icons from '../../constant/icons';

const Banner = () => {
  return (
    <TouchableOpacity style={styles.banner} activeOpacity={0.8}>
      <View style={styles.iconContainer}>
        <Image source={icons.deliveryIcon} style={styles.icon} />
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
    backgroundColor: '#15133C', 
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
    elevation: 4, 
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 12,
    backgroundColor: '#73777B',
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  textContainer: {
    flex: 1,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    color: '#F1EEE9',
    lineHeight: 24,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#EC994B',
  },
  subText: {
    fontSize: 14,
    color: '#F1EEE9',
    marginTop: 5,
    lineHeight: 20,
  },
});

export default Banner;
