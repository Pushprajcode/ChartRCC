import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ROUTE_NAME from './routeName';
import HomeScreen from '../screens/home';
import TestScreen from '../screens/test';
import FinalScreen from '../screens/finalScreen';

export default function NavigationScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTE_NAME.HOME} component={HomeScreen} />
        <Stack.Screen name={ROUTE_NAME.TEST} component={TestScreen} />
        <Stack.Screen name={ROUTE_NAME.FINAL} component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
