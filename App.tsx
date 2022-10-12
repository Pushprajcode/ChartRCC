import {StyleSheet, View} from 'react-native';
import React from 'react';
import PieChartScreen from './src/screens/piechart/piechart';
import BarchartScreen from './src/screens/barchart/barchart';
import LineChartComp from './src/screens/linechart/lineChartComp';
import COLORS from './src/utils/colors';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <PieChartScreen /> */}
      {/* <BarchartScreen /> */}
      <LineChartComp />
    </View>
  );
}

const styles = StyleSheet.create({});
