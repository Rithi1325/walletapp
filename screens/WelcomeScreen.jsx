import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import icons from '../constant/icons';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Set a 2-second timer to navigate to LoginScreen
    const timer = setTimeout(() => {
      navigation.navigate('Login');  // Navigate to LoginScreen after 2 seconds
    }, 2000);

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  // Function to navigate to the Login screen when tapped in the center
  const handleCenterPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.centerArea} onPress={handleCenterPress}>
        <View style={styles.header}>
          <Image source={icons.logo} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>ZEROFIVEZ</Text>
            <Text style={styles.subText}>Easy way to success</Text>
          </View>
        </View>

        {/* Replace text with the sound wave image */}
        <Image source={icons.soundWaves} style={styles.soundWave} />
      </TouchableOpacity>

      <View style={styles.footer}>
        <Image source={icons.w1} style={styles.footerIcon} />
        <Image source={icons.w2} style={styles.footerIcon} />
        <Image source={icons.w3} style={styles.footerIcon} />
      </View>

      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>In Trust and Security</Text>
        <Text style={styles.footerText}>Rated for Highest Grade</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textTitle: {
    fontSize: 28,
    color: '#0072FF',
    fontStyle: 'italic',
    fontWeight:"bold",
    letterSpacing: 1.5,
  },
  subText: {
    fontSize: 14,
    color: '#0072FF',
    marginTop: 4,
    fontWeight: '500',
  },
  soundWave: {
    width: 60, // Adjust size as needed
    height: 60,
    resizeMode: 'contain',
    marginVertical: 20,
    tintColor:"#EC994B"
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    position: 'absolute',
    bottom: 50, // Adjust as needed
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  footerTextContainer: {
    position: 'absolute',
    bottom: 10, // Adjust as needed
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
