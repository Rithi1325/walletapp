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
import icons from '../constant/icons';
import { useNavigation } from '@react-navigation/native'; // React Navigation

const UpdateProfile = ({ route, navigate }) => {
  const params = route?.params || {};

  const [fullName, setFullName] = useState(params.fullName || '');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [referralCode, setReferralCode] = useState('');
  const navigation = useNavigation();

  const handleFinishSetup = () => {
    if (!fullName.trim()) { // Make sure to trim whitespace and check empty string
      Alert.alert('Error', 'Full name cannot be empty.');
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
      <Image source={icons.updateProfile} style={styles.profileImage} />

      <Text style={styles.title}>Update Profile</Text>
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
    width: 100, // Set a width for the image
    height: 100, // Set a height for the image
    marginBottom: 20, // Space below the image
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#15133C',
    marginBottom: 10,
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
    backgroundColor: '#EC994B',
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
