import {BarChart} from 'react-native-chart-kit';
import {Dimensions, ViewStyle} from 'react-native';
import React from 'react';
const screenWidth = Dimensions.get('window').width;
class ColorType {
  red: string = '255';
  blue: string = '5';
  green: string = '255';
  alpha: string | number = '1';
}
interface BarchartProps {
  values?: object;
  verticalLabelRotation?: number;
  horizontalLabelRotation?: number;
  yAxisSuffix?: string;
  yAxisLabel?: string;
  fromZero?: boolean;
  height?: number;
  width?: number;
  labels?: number[];
  data?: string[];
  graphStyle?: ViewStyle;
  chartColor?: ColorType;
  labelColor?: ColorType;
  showValuesOnTopOfBars?: boolean;
}

export default function BarchartScreen(props: BarchartProps) {
  const {
    horizontalLabelRotation = 1,
    verticalLabelRotation = 1,
    yAxisLabel = '',
    yAxisSuffix = '',
    fromZero = false,
    height = 400,
    graphStyle = {marginTop: 50},
    width = screenWidth,
    labelColor = new ColorType(),
    chartColor = new ColorType(),
    data = [10, 20, 30, 40, 50, 60],
    labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    showValuesOnTopOfBars = true,
  } = props;
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
  const generateChartColor = () => {
    return `rgba(${chartColor.red}, ${chartColor.green}, ${chartColor.blue}, ${chartColor.alpha})`;
  };

  const generateLabelColor = () => {
    return `rgba(${labelColor.red}, ${labelColor.green}, ${labelColor.blue}, ${labelColor.alpha})`;
  };

  return (
    <BarChart
      width={width}
      height={height}
      style={graphStyle}
      data={values}
      yAxisLabel={yAxisLabel}
      yAxisSuffix={yAxisSuffix}
      chartConfig={{
        color: (_opacity = 1) => generateChartColor(),
        labelColor: (_opacity = 1) => generateLabelColor(),
      }}
      fromZero={fromZero}
      verticalLabelRotation={verticalLabelRotation}
      horizontalLabelRotation={horizontalLabelRotation}
      showValuesOnTopOfBars={showValuesOnTopOfBars}
    />
  );
}
