import {StyleSheet} from 'react-native';
import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';

interface progressChartProps {
  chartConfig?: AbstractChartConfig;
  strokeWidth: number;
  width: number;
  height: number;
  radius?: number;
  data: any;
}

export default function Progressring(props: progressChartProps) {
  const {strokeWidth, width, height, chartConfig, data, radius} = props;
  return (
    <ProgressChart
      data={data}
      width={width}
      height={height}
      strokeWidth={strokeWidth}
      radius={radius}
      chartConfig={chartConfig}
    />
  );
}

const styles = StyleSheet.create({});
