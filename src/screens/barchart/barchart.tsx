import {BarChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {BarchartData} from './datasets';
import COLORS from '../../utiles/colors';
import React from 'react';

const screenWidth = Dimensions.get('window').width;
interface BarchartProps {
  yAxisLabel?: string;
  height?: number;
  verticalLabelRotation: number;
  horizontalLabelRotation: number;
  fromZero: boolean;
  style: any;
  yAxisSuffix: string;
}
export default function BarchartScreen(props: BarchartProps) {
  const {
    yAxisLabel = '$',
    yAxisSuffix = 'k',
    height = 100,
    verticalLabelRotation = 4,
    horizontalLabelRotation = 3,
    fromZero = false,
    style,
  } = props;
  return (
    <BarChart
      data={BarchartData}
      width={screenWidth}
      height={height}
      yAxisLabel={yAxisLabel}
      yAxisSuffix={yAxisSuffix}
      verticalLabelRotation={verticalLabelRotation}
      horizontalLabelRotation={horizontalLabelRotation}
      fromZero={fromZero} //optional prop
      style={style}
      chartConfig={{
        height: 500,
        backgroundGradientFrom: COLORS.WHITE,
        backgroundGradientTo: COLORS.WHITE,
        fillShadowGradientOpacity: 1,
        fillShadowGradient: COLORS.PRIMARY_BLUE,
        barPercentage: 0.5,
        decimalPlaces: 2,
        color: () => COLORS.PRIMARY_BLUE,
        labelColor: () => COLORS.RED,
        propsForBackgroundLines: {
          strokeWidth: 1,
          stroke: COLORS.DOGER_BLUE,
          strokeDasharray: '4',
        },
      }}
    />
  );
}
