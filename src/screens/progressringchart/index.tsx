import {StyleSheet} from 'react-native';
import React from 'react';
import Progressring from './progressring';
import COLORS from '../../utiles/colors';
const ProgressChartData = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};

export default function ProgressPieChart() {
  return (
    <Progressring
      strokeWidth={13}
      data={ProgressChartData}
      width={350}
      height={400}
      radius={5}
      chartConfig={{
        backgroundColor: COLORS.BLACK,
        backgroundGradientFrom: COLORS.BLACK,
        backgroundGradientTo: COLORS.BLUE_MAGNETA,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => COLORS.RED,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: '#ffa726',
        },
      }}
    />
  );
}

const styles = StyleSheet.create({});
