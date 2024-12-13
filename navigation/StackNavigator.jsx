import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen.jsx';
import LoginScreen from '../screens/LoginScreen.jsx';
import OtpVerification from '../screens/OtpVerification.jsx';
import UserDetails from '../screens/UpdateProfile.jsx';
import HomeScreen from '../screens/HomeScreen.jsx';
import TabNavigator from './TabNavigatior.jsx';
import Index from './Index.jsx';
import ShopScreen from '../screens/ShopScreen.jsx';
import NotificationsScreen from '../screens/NotificationsScreen.jsx';
import CartScreen from '../screens/CartScreen.jsx';
import MobileRecharge from '../screens/MobileRecharge';
import DTHRechargeScreen from '../screens/DTHRechargeScreen';
import TransactionScreen from '../screens/TransactionScreen';
import BankTransferScreen from '../screens/BankTransferScreen';
import TransferOptions from '../components/homeComponents/TransferOptions.jsx';
import PayContactScreen from '../screens/PayContactScreen';
import SelfTransferScreen from '../screens/SelfTransferScreen';
import WaterBill from '../screens/Waterbill.jsx';
import pipescreen from '../screens/pipescreen.jsx';
import gasscreen from '../screens/gasscreen.jsx'
import icons from '../constant/icons.jsx';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
    screenOptions={{
        // Default header style and card background color
        cardStyle: { backgroundColor: '#F1EEE9' },
        headerStyle: { backgroundColor: '#efbf04' }, // Set the header color
        headerTintColor: '#F1EEE9', // Set header text/icon color
        headerTitleStyle: { fontWeight: 'bold' }, // Optional: Make the title bold
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: 'Welcome',headerShown: false, }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login',headerShown: false, }}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{ title: 'OTP Verification',headerShown: false, }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{ title: 'User Details',headerShown: false, }}
      />
      <Stack.Screen
        name="Tab"
        component={Index}
        options={{ title: 'Welcome to Home', headerShown: false }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationsScreen}
        options={{ title: 'Notification' }}
      />
      <Stack.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={({ navigation }) => ({
          title: 'Shop',
          headerRight: () => (
            // Shopping cart icon on the right side of the header
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
              <Image
                source={icons.cart} // Use the cart icon image
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 15,
                  tintColor: '#F1EEE9',
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ title: 'Cart' }}
      />
      <Stack.Screen
        name="WaterBill"
        component={WaterBill}
        options={{ title: 'waterbill' }}
      />
      <Stack.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{ title: 'TransactionScreen' }}
      />
      <Stack.Screen name="MobileRecharge" component={MobileRecharge} />
      <Stack.Screen name="DTHRechargeScreen" component={DTHRechargeScreen} />
      <Stack.Screen
        name="Transactions"
        component={TransactionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="BankTransfer" component={BankTransferScreen} />
      <Stack.Screen name="TransferOptions" component={TransferOptions} />
      <Stack.Screen name="PayContact" component={PayContactScreen} />
      <Stack.Screen name="SelfTransfer" component={SelfTransferScreen} />
      <Stack.Screen name="pipescreen" component={pipescreen} />
      <Stack.Screen name="gasscreen" component={gasscreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
