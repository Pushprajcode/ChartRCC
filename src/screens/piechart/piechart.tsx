import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {PieChartData} from '../barchart/datasets';
import {PieChart} from 'react-native-chart-kit';
import COLORS from '../../utiles/colors';

interface PiechartProps {
  width: number;
  height: number;
  backgroundColor: string;
  paddingLeft: string;
}
export default function PieScreen(props: PiechartProps) {
  const {width, height, backgroundColor, paddingLeft} = props;
  return (
    <View>
      <PieChart
        data={PieChartData}
        width={width}
        height={height}
        accessor={'population'}
        backgroundColor={backgroundColor}
        paddingLeft={paddingLeft}
        chartConfig={{
          strokeWidth: 3,
          barPercentage: 0.5,
          decimalPlaces: 5,
          color: () => COLORS.DOGER_BLUE,
          labelColor: () => COLORS.RED,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
          },
          propsForLabels: {},
        }}
      />
    </View>
  );
}
