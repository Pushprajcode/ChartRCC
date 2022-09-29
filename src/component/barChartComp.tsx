import {BarChart} from 'react-native-chart-kit';
import {ViewStyle} from 'react-native';
import React from 'react';

class ColorType {
  red: string = '255';
  blue: string = '255';
  green: string = '255';
  alpha: string | number = '1';
}

interface Props {
  verticalLabelRotation?: number;
  horizontalLabelRotation?: number;
  yAxisSuffix?: string;
  fromZero?: boolean;
  values?: any;
  height?: number;
  width?: number;
  labels?: any;
  data?: any;
  yAxisLabel?: string;
  graphStyle?: ViewStyle;
  chartColor?: ColorType;
  labelColor?: ColorType;
}

export default function BarChartComp(props: Props) {
  const {
    horizontalLabelRotation = 3,
    verticalLabelRotation = 0,
    yAxisLabel = '',
    yAxisSuffix = 'k',
    fromZero = false,
    height = 300,
    graphStyle,
    width = 370,
    labelColor = new ColorType(),
    chartColor = new ColorType(),
    data = [10, 20, 30, 40, 50],
    labels = ['Jan', 'Feb', 'Mar', 'April', 'May'],
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
    <BarChart
      width={width}
      yAxisLabel={yAxisLabel}
      height={height}
      style={graphStyle}
      data={values}
      yAxisSuffix={yAxisSuffix}
      chartConfig={{
        color: (_opacity = 1) => generateChartColor(),
        labelColor: (_opacity = 1) => generateLabelColor(),
      }}
      fromZero={fromZero}
      verticalLabelRotation={verticalLabelRotation}
      horizontalLabelRotation={horizontalLabelRotation}
    />
  );
}
