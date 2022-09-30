import {ViewStyle} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import COLORS from '../../utiles/colors';
import {PieChartData} from '.';
class ColorType {
  red: string = '204';
  blue: string = '155';
  green: string = '153';
  alpha: string | number = '4';
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
  chartColor?: ColorType;
  labelColor?: ColorType;
  propdata?: any;
  graphStyle?: ViewStyle;
  hasLegend?: boolean;
  center?: Array<number>;
  absolute?: boolean;
  avoidFalseZero?: boolean;
}
export default function PieChartScreen(props: PiechartProps) {
  const {
    width = 400,
    height = 200,
    backgroundColor = COLORS.DOGER_BLUE,
    paddingLeft = '10',
    labelColor = new ColorType(),
    chartColor = new ColorType(),
    propdata,
    hasLegend = true,
    graphStyle = {marginTop: 40},
    center = [5, 10],
    absolute = false,
    avoidFalseZero = true,
  } = props;
  const generateChartColor = () => {
    // return `rgba(${chartColor.red}, ${chartColor.green}, ${chartColor.blue}, ${chartColor.alpha})`;
    return '';
  };

  const generateLabelColor = () => {
    return `rgba(${labelColor.red}, ${labelColor.green}, ${labelColor.blue}, ${labelColor.alpha})`;
  };
  return (
    <PieChart
      data={propdata ? propdata : PieChartData}
      backgroundColor={backgroundColor}
      paddingLeft={paddingLeft}
      height={height}
      width={width}
      hasLegend={hasLegend}
      accessor={'population'}
      chartConfig={{
        color: (_opacity = 1, _index) => generateChartColor(),
        // labelColor: (_opacity = 1) => generateLabelColor(),
        decimalPlaces: 4, // optional, defaults to 2dp
      }}
      style={graphStyle}
      avoidFalseZero={avoidFalseZero}
      center={center}
      absolute={absolute}
    />
  );
}
//
