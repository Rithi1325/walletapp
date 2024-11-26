import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import TransactionScreen from '../screens/Transaction/TransactionScreen';
import ReportScreen from '../screens/Report/Report';
import ChatScreen from '../screens/Chat/ChatScreen';
import HelpScreen from '../screens/Help/HelpScreen'; // Import the Help screen
const Tab = createBottomTabNavigator();
import icons from '../constant/icons';

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#F1EEE9', // Active icon color
        tabBarInactiveTintColor: '#15133C', // Inactive icon color
        tabBarStyle: {
          backgroundColor: '#EC994B', // Tab bar background color
          height: 75,
          paddingTop:10,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          marginTop:-10,
        },
        tabBarLabelStyle: {
          fontSize: 12, // Adjust label font size if needed
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Image source={icons.home} style={{ tintColor: color, width: size, height: size }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Image source={icons.transaction} style={{ tintColor: color, width: size, height: size }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Image source={icons.report} style={{ tintColor: color, width: size, height: size }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Image source={icons.chat} style={{ tintColor: color, width: size, height: size }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Image source={icons.help} style={{ tintColor: color, width: size, height: size }} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
