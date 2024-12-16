import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import Index from './navigation/Index';
import StackNavigator from './navigation/StackNavigator';
import 'react-native-reanimated';
import {createStackNavigator} from '@react-navigation/stack';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
 