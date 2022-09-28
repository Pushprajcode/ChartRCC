import {ViewStyle} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

class ColorType {
  red: string = '255';
  blue: string = '255';
  green: string = '255';
  alpha: string | number = '1';
}

interface Props {
  values?: any;
  width?: number;
  radius?: number;
  stroke?: string;
  height?: number;
  bezier?: boolean;
  style?: ViewStyle;
  xAxisLabel?: string;
  yAxisLabel?: string;
  strokeWidth?: number;
  yAxisSuffix?: string;
  chartColor?: ColorType;
  labelColor?: ColorType;
  decimalPlaces?: number;
  backgroundColor?: string;
  backgroundGradientTo?: string;
  backgroundGradientFrom?: string;
  backgroundGradientToOpacity?: number;
  backgroundGradientFromOpacity?: number;
}

export default function LineChartComp(props: Props) {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];
  const data = [10, 20, 30, 21, 40, 31];
  let values: any = {
    labels: labels,
    datasets: [
      {
        data: data,
      },
    ],
  };
  if (props?.values) {
    values = props?.values;
  }
  const {
    style,
    yAxisLabel,
    xAxisLabel,
    radius = 6,
    yAxisSuffix,
    width = 300,
    height = 200,
    bezier = true,
    strokeWidth = 2,
    backgroundColor,
    stroke = 'green',
    decimalPlaces = 2,
    backgroundGradientTo,
    backgroundGradientFrom,
    backgroundGradientToOpacity,
    labelColor = new ColorType(),
    chartColor = new ColorType(),
    backgroundGradientFromOpacity,
  } = props;

  const generateChartColor = () => {
    return `rgba(${chartColor.red}, ${chartColor.green}, ${chartColor.blue}, ${chartColor.alpha})`;
  };

  const generateLabelColor = () => {
    return `rgba(${labelColor.red}, ${labelColor.green}, ${labelColor.blue}, ${labelColor.alpha})`;
  };

  return (
    <LineChart
      data={values}
      style={style}
      width={width}
      height={height}
      bezier={bezier}
      yAxisInterval={1}
      xAxisLabel={xAxisLabel}
      yAxisLabel={yAxisLabel}
      yAxisSuffix={yAxisSuffix}
      chartConfig={{
        decimalPlaces: decimalPlaces,
        backgroundColor: backgroundColor,
        backgroundGradientTo: backgroundGradientTo,
        backgroundGradientFrom: backgroundGradientFrom,
        backgroundGradientToOpacity: backgroundGradientToOpacity,
        backgroundGradientFromOpacity: backgroundGradientFromOpacity,
        color: (opacity = 1) => generateChartColor(),
        labelColor: (opacity = 1) => generateLabelColor(),
        // color: (opacity = 0.6) => `rgba(255, 255, 0, ${opacity})`,
        // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForDots: {
          r: radius,
          strokeWidth: strokeWidth,
          stroke: stroke,
        },
      }}
    />
  );
}
