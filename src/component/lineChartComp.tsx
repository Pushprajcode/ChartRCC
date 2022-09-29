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
  data?: Array<number>;
  strokeWidth?: number;
  yAxisSuffix?: string;
  chartColor?: ColorType;
  labelColor?: ColorType;
  decimalPlaces?: number;
  labels?: Array<string>;
  backgroundColor?: string;
  backgroundGradientTo?: string;
  verticalLabelRotation?: number;
  backgroundGradientFrom?: string;
  horizontalLabelRotation?: number;
  backgroundGradientToOpacity?: number;
  backgroundGradientFromOpacity?: number;
}

export default function LineChartComp(props: Props) {
  const {
    style,
    yAxisLabel,
    xAxisLabel,
    radius = 6,
    width = 300,
    height = 200,
    bezier = true,
    strokeWidth = 2,
    backgroundColor,
    stroke = 'green',
    decimalPlaces = 2,
    yAxisSuffix = '°C',
    backgroundGradientTo,
    verticalLabelRotation,
    backgroundGradientFrom,
    horizontalLabelRotation,
    backgroundGradientToOpacity,
    labelColor = new ColorType(),
    chartColor = new ColorType(),
    backgroundGradientFromOpacity,
    data = [10, 20, 30, 21, 40, 31],
    labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
  } = props;

  let values = {
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
      verticalLabelRotation={verticalLabelRotation}
      horizontalLabelRotation={horizontalLabelRotation}
      chartConfig={{
        decimalPlaces: decimalPlaces,
        backgroundColor: backgroundColor,
        backgroundGradientTo: backgroundGradientTo,
        color: (opacity = 1) => generateChartColor(),
        backgroundGradientFrom: backgroundGradientFrom,
        labelColor: (opacity = 1) => generateLabelColor(),
        backgroundGradientToOpacity: backgroundGradientToOpacity,
        backgroundGradientFromOpacity: backgroundGradientFromOpacity,
        propsForDots: {
          r: radius,
          stroke: stroke,
          strokeWidth: strokeWidth,
        },
      }}
    />
  );
}
