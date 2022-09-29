import {View, ViewStyle} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import COLORS from '../../utiles/colors';
// import {PieChartData} from '.';
import {PieChartData} from '.';
class ColorType {
  red: string = '255';
  blue: string = '5';
  green: string = '255';
  alpha: string | number = '1';
}
interface PiechartProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  paddingLeft?: string;
  strokeWidth?: number;
  barPercentage?: number;
  decimalPlaces?: number;
  style?: ViewStyle;
  // PieChartData?: any;
  chartColor?: ColorType;
  labelColor?: ColorType;
}
export default function PieScreen(props: PiechartProps) {
  const {
    width = 400,
    height = 200,
    backgroundColor = '#0fffff',
    paddingLeft = '10',
    // PieChartData,
    labelColor = new ColorType(),
    chartColor = new ColorType(),
  } = props;
  // console.log('data to ', props);
  // if (props != '') {
  // }
  console.log('------->', PieChartData);

  const generateChartColor = () => {
    return `rgba(${chartColor.red}, ${chartColor.green}, ${chartColor.blue}, ${chartColor.alpha})`;
  };

  const generateLabelColor = () => {
    return `rgba(${labelColor.red}, ${labelColor.green}, ${labelColor.blue}, ${labelColor.alpha})`;
  };
  return (
    <PieChart
      width={width}
      height={height}
      accessor={'population'}
      backgroundColor={backgroundColor}
      paddingLeft={paddingLeft}
      data={PieChartData}
      chartConfig={{
        color: (_opacity = 1) => generateChartColor(),
        labelColor: (_opacity = 1) => generateLabelColor(),
      }}
    />
  );
}
//
