import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
import icons from '../../constant/icons';
const UtilityServices = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showElectricityCard, setShowElectricityCard] = useState(false);

  const navigation = useNavigation(); // Initialize the useNavigation hook

  return (
    <>
      {/* Utility services Grid */}
      <View style={styles.optionsContainer}>
        <Text style={styles.sectionTitle}>Utility Services</Text>
        <View style={styles.optionsGrid}>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => navigation.navigate('MobileRecharge')}>
            <View style={styles.iconContainer}>
              <Image source={icons.mobile} style={styles.optionIcon} />
            </View>
            <Text style={styles.optionText}>Mobile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('WaterBill')}>
            <View style={styles.iconContainer}>
              <Image source={icons.water} style={styles.optionIcon} />
            </View>
            <Text style={styles.optionText}>Water Bill</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}  onPress={() => navigation.navigate('pipescreen')} >
            <View style={styles.iconContainer}>
              <Image source={icons.pipe} style={styles.optionIcon} />
            </View>
            <Text style={styles.optionText}>Piped Gas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => setShowElectricityCard(!showElectricityCard)} // Toggle card visibility
          >
            <View style={styles.iconContainer}>
              <Image source={icons.electricity} style={styles.optionIcon} />
            </View>
            <Text style={styles.optionText}>Electricity</Text>
          </TouchableOpacity>

       
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => navigation.navigate('ShopScreen')} // Navigate to ShopScreen
          >
            <View style={styles.iconContainer}>
              <Image source={icons.shopping} style={styles.optionIcon} />
            </View>
            <Text style={styles.optionText}>Shopping</Text>
          </TouchableOpacity>

          {showMoreOptions && (
            <>
              <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('gasscreen')} >
                <View style={styles.iconContainer}>
                  <Image source={icons.gas} style={styles.optionIcongas} />
                </View>
                <Text style={styles.optionText}>Gas Cylinder</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionItem}>
                <View style={styles.iconContainer}>
                  <Image source={icons.card} style={styles.optionIcon} />
                </View>
                <Text style={styles.optionText}>Credit Card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => navigation.navigate('DTHRechargeScreen')} // Navigate to ShopScreen
              >
                <View style={styles.iconContainer}>
                  <Image source={icons.dth} style={styles.optionIcon} />
                </View>
                <Text style={styles.optionText}>DTH</Text>
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => setShowMoreOptions(!showMoreOptions)}>
            <View style={styles.iconContainer}>
              <Image source={icons.more} style={styles.optionIcon} />
            </View>
            <Text style={styles.optionText}>
              {showMoreOptions ? 'Show Less' : 'More Services'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default UtilityServices;

const styles = StyleSheet.create({
  optionsContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF', // White background for options container
    borderRadius: 15,
    marginTop: -10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#15133C', // Black text for section title
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionItem: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 12,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionIcon: {
    width: 30,
    height: 30,
    tintColor: '#15133C',
  },
  optionIcongas: {
    width: 35,
    height: 35,
  },
  optionText: {
    marginTop: 8,
    fontSize: 14,
    color: '#15133C', // Dark gray text for options
  },
  newCard: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#F5F5F5', // Light gray (silver tone) for new card
    borderRadius: 12,
    shadowColor: '#000', // Black shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  newCardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Black text for card text
  },
  cardDescription: {
    marginVertical: 8,
    color: '#666', // Dark gray for description
  },
  viewOffersButton: {
    backgroundColor: '#00A3FF', // Blue for view offers button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewOffersButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
