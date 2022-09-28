import {SafeAreaView} from 'react-native';
import React from 'react';
import PieScreen from './piechart';
import COLORS from '../../utiles/colors';
export const PieChartData = [
  {
    name: 'Seoul',
    population: 30,
    color: COLORS.LIGHT_BLUE,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 28,
    color: COLORS.RED,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 52,
    color: COLORS.GREY,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 85,
    color: COLORS.PRIMARY_BLUE,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11,
    color: COLORS.VERYDARK_GREY,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
];

export default function PieChartScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PieScreen
        height={200}
        width={400}
        backgroundColor={COLORS.WHITE}
        paddingLeft={'10'}
        strokeWidth={8}
        barPercentage={0.6}
        decimalPlaces={2}
        style={{
          borderRadius: 16,
        }}
        PieChartData={PieChartData}
        initialChartConfig={{
          color: opacity => `rgba(255, 255, 255, ${opacity})`,
        }}
      />
    </SafeAreaView>
  );
}
