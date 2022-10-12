import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ROUTE_NAME from './routeName';
import HomeScreen from '../screens/home';
import BarchartScreen from '../component/barchart';
import PieChartScreen from '../component/piechart';
import LineChartScreen from '../component/lineChart';

export default function NavigationScreen() {
  const Stack: any = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTE_NAME.HOME} component={HomeScreen} />
        <Stack.Screen
          name={ROUTE_NAME.BARCHARTSCREEN}
          component={BarchartScreen}
        />
        <Stack.Screen
          name={ROUTE_NAME.LINECHARTSCREEN}
          component={LineChartScreen}
        />
        <Stack.Screen
          name={ROUTE_NAME.PIECHARTSCREEN}
          component={PieChartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
