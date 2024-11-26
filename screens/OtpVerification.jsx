import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const OtpVerification = ({ route, navigation }) => {
  const { mobileNumber } = route.params; // Get the mobile number from route parameters
  const [otp, setOtp] = useState(['', '', '', '']); // State for the 4 OTP inputs

  // Create refs for each OTP input to manage focus
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Function to handle OTP input change
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to next input if a digit is entered and it's not the last input
    if (value && index < otp.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Function to handle OTP input deletion and moving to the previous input
  const handleOtpBackspace = (index) => {
    if (otp[index] === '') {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  // Function to handle OTP verification
  const handleVerifyOtp = () => {
    // Example: OTP is set to "1234" for demonstration purposes
    if (otp.join('') === '1234') {
      console.log('OTP Verified');
      // Navigate to the correct screen (updated screen name)
      navigation.navigate('UserDetails', { mobileNumber });
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>An OTP has been sent to {mobileNumber}</Text>

      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]} // Assign ref to each input field
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => handleOtpChange(index, text)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleOtpBackspace(index);
              }
            }}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
  },
  button: {
    backgroundColor: '#EC994B',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default OtpVerification;
