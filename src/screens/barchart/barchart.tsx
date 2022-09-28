import {BarChart} from 'react-native-chart-kit';
import {Dimensions, ViewStyle} from 'react-native';
import React from 'react';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';

const screenWidth = Dimensions.get('window').width;
interface BarchartProps {
  initialChartConfig: AbstractChartConfig;
  verticalLabelRotation?: number;
  horizontalLabelRotation?: number;
  yAxisSuffix: string;
  yAxisLabel: string;
  fromZero?: boolean;
  BarchartData: any;
  height?: number;
  width?: number;
  graphStyle?: Partial<ViewStyle>;
}

export default function BarchartScreen(props: BarchartProps) {
  const {
    horizontalLabelRotation = 3,
    verticalLabelRotation = 4,
    yAxisLabel = '$',
    yAxisSuffix = 'k',
    fromZero = false,
    height = 100,
    graphStyle,
    initialChartConfig,
    BarchartData,
    width = screenWidth,
  } = props;
  console.log('first', graphStyle);
  return (
    <BarChart
      data={BarchartData}
      width={width}
      height={height}
      yAxisLabel={yAxisLabel}
      yAxisSuffix={yAxisSuffix}
      verticalLabelRotation={verticalLabelRotation}
      horizontalLabelRotation={horizontalLabelRotation}
      fromZero={fromZero} //optional prop
      style={graphStyle}
      chartConfig={initialChartConfig}
    />
  );
}
