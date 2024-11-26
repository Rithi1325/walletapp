import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TabNavigator from './TabNavigatior'; // Your tab navigator
import ProfileScreen from '../screens/profile/ProfileScreen';
import PaymentMethodsScreen from '../screens/PaymentMethod/PaymentMethodsScreen';
import DeliveryAddressScreen from '../screens/DeliveryAddress/DeliveryAddressScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import icons from '../constant/icons';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <>
      {/* Set the status bar color */}
      <StatusBar barStyle="light-content" backgroundColor="#EC994B" />
      
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: '#F1EEE9', // Drawer background color
            fontSize:28,

          },
          drawerActiveTintColor: '#EC994B', // Active icon color
          drawerInactiveTintColor: '#15133C', // Inactive icon color
          headerStyle: {
            backgroundColor: '#EC994B', // Header background color
            elevation: 0, // Remove shadow for Android
            borderBottomWidth: 0, // Remove bottom border for iOS
          },
          headerTintColor: '#F1EEE9', // Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
              <Image
                source={icons.notification} 
                style={{ width: 24, height: 24, marginRight: 15, tintColor: '#F1EEE9' }}
              />
            </TouchableOpacity>
          ),
        })}>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <Image
                source={icons.home} // Home image
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerLabel: 'Profile',
            drawerIcon: ({ color, size }) => (
              <Image
                source={icons.profile} // Profile image
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="PaymentMethods"
          component={PaymentMethodsScreen}
          options={{
            drawerLabel: 'Payment Methods',
            drawerIcon: ({ color, size }) => (
              <Image
                source={icons.payment} // Payment image
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="DeliveryAddress"
          component={DeliveryAddressScreen}
          options={{
            drawerLabel: 'Delivery Address',
            drawerIcon: ({ color, size }) => (
              <Image
                source={icons.delivery} // Delivery image
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Image
                source={icons.settings} // Settings image
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
