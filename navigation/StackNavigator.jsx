import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Index from './Index';
import ShopScreen from '../screens/Shopping/ShopScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import CartScreen from '../screens/AddToCart/CartScreen';
import MobileRecharge from '../screens/mobileRecharge/MobileRecharge';
import DTHRechargeScreen from '../screens/DTHRecharge/DTHRechargeScreen';
import TransactionScreen from '../screens/Transaction/TransactionScreen';
import BankTransferScreen from '../screens/Transaction/BankTransferScreen';
import TransferOptions from '../components/homeComponents/TransferOptions';
import PayContactScreen from '../screens/Transaction/PayContactScreen';
import SelfTransferScreen from '../screens/Transaction/SelfTransferScreen';
import icons from '../constant/icons';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        cardStyle: {backgroundColor: '#F1EEE9'},
        headerStyle: {backgroundColor: '#EC994B'},
        headerTintColor: '#F1EEE9',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Tab"
        component={Index}
        options={{title: 'Welcome to Home', headerShown: false}}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationsScreen}
        options={{title: 'Notifications'}}
      />
      <Stack.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={({navigation}) => ({
          title: 'Shop',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
              <Image
                source={icons.cart}
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
        options={{title: 'Cart'}}
      />
      <Stack.Screen name="MobileRecharge" component={MobileRecharge} />
      <Stack.Screen name="DTHRechargeScreen" component={DTHRechargeScreen} />
      <Stack.Screen
        name="Transactions"
        component={TransactionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="BankTransfer" component={BankTransferScreen} />
      <Stack.Screen name="TransferOptions" component={TransferOptions} />
      <Stack.Screen name="PayContact" component={PayContactScreen} />
      <Stack.Screen name="SelfTransfer" component={SelfTransferScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
