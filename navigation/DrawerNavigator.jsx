import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import TabNavigator from './TabNavigatior'; // Your tab navigator
import ProfileScreen from '../screens/ProfileScreen';
import PaymentMethodsScreen from '../screens/PaymentMethodsScreen';
import DeliveryAddressScreen from '../screens/DeliveryAddressScreen';
import SettingsScreen from '../screens/SettingsScreen';
import icons from '../constant/icons';
import Logo from '../screens/Logo';

const Drawer = createDrawerNavigator();

// Header Left Component with Hamburger Menu and Logo
const CustomHeaderLeft = ({ navigation }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    {/* Drawer Toggle Icon */}
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Image
        source={icons.menu} // Hamburger icon
        style={{
          width: 30,
          height: 30,
          marginLeft: 15,
          tintColor: '#F1EEE9', // White color
        }}
      />
    </TouchableOpacity>

    {/* App Logo */}
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Logo /> {/* Your Logo component */}
      </View>
    </TouchableOpacity>
  </View>
);

// Header Right Component with Notification Icon
const CustomHeaderRight = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
    <Image
      source={icons.notification} // Notification icon
      style={{
        width: 24,
        height: 24,
        marginRight: 15,
        tintColor: '#F1EEE9', // White color
      }}
    />
  </TouchableOpacity>
);

// Drawer Screen Options Function
const getScreenOptions = (navigation) => ({
  drawerStyle: {
    backgroundColor: '#F1EEE9', // Drawer background color
  },
  drawerActiveTintColor: '#efbf04', // Active icon color
  drawerInactiveTintColor: '#15133C', // Inactive icon color
  headerStyle: {
    backgroundColor: '#efbf04', // Header background color
    elevation: 0, // Remove shadow for Android
    borderBottomWidth: 0, // Remove bottom border for iOS
  },
  headerTintColor: '#F1EEE9', // Header text color
  headerTitle: () => null, // Remove default title
  headerLeft: () => <CustomHeaderLeft navigation={navigation} />, // Custom Header Left
  headerRight: () => <CustomHeaderRight navigation={navigation} />, // Custom Header Right
});

// Drawer Icon Component
const DrawerIcon = ({ icon, color, size }) => (
  <Image
    source={icon}
    style={{
      tintColor: color,
      width: size,
      height: size,
    }}
  />
);

const DrawerNavigator = () => {
  return (
    <>
      {/* Set the StatusBar color */}
      <StatusBar barStyle="light-content" backgroundColor="#efbf04" />

      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => getScreenOptions(navigation)}
      >
        {/* Home Screen */}
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            drawerLabel: "Home",
            drawerIcon: (props) => <DrawerIcon icon={icons.logo} {...props} />,
          }}
        />

        {/* Profile Screen */}
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerLabel: "Profile",
            drawerIcon: (props) => <DrawerIcon icon={icons.profile} {...props} />,
          }}
        />

        {/* Payment Methods */}
        <Drawer.Screen
          name="PaymentMethods"
          component={PaymentMethodsScreen}
          options={{
            drawerLabel: "Payment Methods",
            drawerIcon: (props) => <DrawerIcon icon={icons.payment} {...props} />,
          }}
        />

        {/* Delivery Address */}
        <Drawer.Screen
          name="DeliveryAddress"
          component={DeliveryAddressScreen}
          options={{
            drawerLabel: "Delivery Address",
            drawerIcon: (props) => <DrawerIcon icon={icons.delivery} {...props} />,
          }}
        />

        {/* Settings */}
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerLabel: "Settings",
            drawerIcon: (props) => <DrawerIcon icon={icons.settings} {...props} />,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
