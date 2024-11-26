// Logo.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import icons from '../constant/icons'; // Make sure this path is correct

const Logo = () => {
  return (
    <View style={styles.header}>
      <Image source={icons.logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>ZEROFIVEZ</Text>
        <Text style={styles.subText}>Easy way to success</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor:'#fff',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textTitle: {
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  subText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
});

export default Logo;
