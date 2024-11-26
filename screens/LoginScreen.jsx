import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import icons from '../constant/icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const animatedPlaceholder = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedPlaceholder, {
      toValue: -20, // Move placeholder up
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!mobileNumber) {
      setIsFocused(false);
      Animated.timing(animatedPlaceholder, {
        toValue: 0, // Reset placeholder
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleSendOTP = () => {
    if (mobileNumber.length === 10) {
      navigation.navigate('OtpVerification', { mobileNumber: `${countryCode}${mobileNumber}` });
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={icons.login} style={[styles.logo]} />
      <Text style={styles.title}>Authentication</Text>
      <Text style={styles.subtitle}>Login with mobile number</Text>

      <View style={styles.inputContainer}>
        {/* Country Picker Section */}
        <View style={styles.countryPickerContainer}>
          <Picker
            selectedValue={countryCode}
            style={styles.picker}
            onValueChange={(itemValue) => setCountryCode(itemValue)}
          >
            <Picker.Item label="India (+91)" value="+91" />
            <Picker.Item label="USA (+1)" value="+1" />
            <Picker.Item label="UK (+44)" value="+44" />
          </Picker>
        </View>

        {/* Mobile Number Input */}
        <View style={styles.animatedInputContainer}>
          <Animated.Text
            style={[
              styles.animatedPlaceholder,
              { top: animatedPlaceholder, color: isFocused ? '#73777B' : '#15133C' },
            ]}
          >
            Enter Mobile Number
          </Animated.Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="phone-pad"
            maxLength={10}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By providing mobile number, I hereby agree and accept the{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#15133C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  countryPickerContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 8,
    padding: 10,
    height:70,
    backgroundColor: '#F1EEE9',
  },
  label: {
    fontSize: 14,
    color: '#8e8e8e',
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  animatedInputContainer: {
    position: 'relative',
    height: 50,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F1EEE9',
    justifyContent: 'center',
  },
  animatedPlaceholder: {
    position: 'absolute',
    left: 10,
    fontSize: 14,
  },
  input: {
    height: 30,
    fontSize: 16,
    padding: 0,
    marginTop: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#EC994B',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  footerText: {
    fontSize: 12,
    color: '#8e8e8e',
    textAlign: 'center',
  },
  linkText: {
    color: '#EC994B',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
