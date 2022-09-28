import {View} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import COLORS from '../../utiles/colors';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';

interface PiechartProps {
  width?: number;
  height?: number;
  backgroundColor: string;
  paddingLeft: string;
  strokeWidth?: number;
  barPercentage?: number;
  decimalPlaces?: number;
  style: object;
  PieChartData?: any;
  initialChartConfig?: AbstractChartConfig;
}
export default function PieScreen(props: PiechartProps) {
  const {
    width = 400,
    height = 200,
    backgroundColor,
    paddingLeft,
    PieChartData,
    initialChartConfig,
  } = props;
  return (
    <PieChart
      data={PieChartData}
      width={width}
      height={height}
      accessor={'population'}
      backgroundColor={backgroundColor}
      paddingLeft={paddingLeft}
      chartConfig={initialChartConfig}
    />
  );
}
