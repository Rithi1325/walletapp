import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import images from '../constant/images';

const UpdateProfile = ({ route, navigate }) => {
  const params = route?.params || {};

  const [fullName, setFullName] = useState(params.fullName || '');
  const [email, setEmail] = useState(params.email || '');
  const [gender, setGender] = useState('Male');
  const [referralCode, setReferralCode] = useState('');
  const navigation = useNavigation();

  const isValidEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const isAlphabetic = (text) => {
    return /^[A-Za-z]+$/.test(text);
  };

  const handleFinishSetup = () => {
    if (!fullName.trim() || !isAlphabetic(fullName)) { // Make sure to trim whitespace and check empty string and alphabetic characters
      Alert.alert('Error', 'Full name can only contain alphabetic characters.');
      return;
    }

    if (email && !isValidEmail(email)) { // Validate email format
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    console.log('Profile Updated:', { fullName, email, gender, referralCode });
    // Perform further actions here, like navigating to another screen or updating backend.
    handleNavigate();
  };

  const handleNavigate = () => {
    navigation.navigate('Tab');
  };

  return (
    <View style={styles.container}>
      {/* Display the Update Profile Image */}
      <Image source={images.update} style={styles.profileImage} />

      <Text style={styles.subtitle}>
        Please enter the below details to complete your account setup
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={itemValue => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Referral code (optional)"
        value={referralCode}
        onChangeText={setReferralCode}
      />

      <TouchableOpacity style={styles.button} onPress={handleFinishSetup}>
        <Text style={styles.buttonText}>Finish Setup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 300,
    height: 300, 
    marginBottom: 20, 
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 8,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#efbf04',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default UpdateProfile;
