import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LineChartComp from '../../component/lineChartComp';
import BarChartComp from '../../component/barChartComp';

export default function HomeScreen() {
  return (
    <View>
      <LineChartComp />
      {/* <BarChartComp /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
