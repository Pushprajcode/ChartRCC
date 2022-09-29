import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ROUTE_NAME from './routeName';
import PieChartScreen from '../screens/piechart/piechart';
import BarchartScreen from '../screens/barchart/barchart';

export default function NavigationScreen() {
  const Stack: any = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name={ROUTE_NAME.PIECHART_SCREEN}
          component={PieChartScreen}
        /> */}
        {/* <Stack.Screen
          name={ROUTE_NAME.BARCHART_SCREEN}
          component={BarchartScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
