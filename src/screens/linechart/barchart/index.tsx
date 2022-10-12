import {BarChart} from 'react-native-chart-kit';
import {Dimensions, View, ViewStyle} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';
const screenWidth = Dimensions.get('window').width;
class ColorType {
  red: string = '105';
  blue: string = '105';
  green: string = '105';
  alpha: string | number = '1';
}

class LabelColorType {
  red: string = '0';
  blue: string = '0';
  green: string = '0';
  alpha: string | number = '';
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
  labelColor?: LabelColorType;
  showValuesOnTopOfBars?: boolean;
  withInnerLines?: boolean;
  backgroundColor?: string;
  barPercentag?: number;
  decimalPlaces?: number;
  flatColor?: boolean;
  graphStyleView?: ViewStyle;
}

export default function BarchartScreen(props: BarchartProps) {
  const {
    horizontalLabelRotation = 1,
    verticalLabelRotation = 1,
    yAxisLabel = '',
    yAxisSuffix = '$',
    fromZero = false,
    height = 270,
    graphStyle = {marginTop: 50},
    width = screenWidth,
    labelColor = new ColorType(),
    chartColor = new ColorType(),
    data = [10, 20, 30, 40, 50, 60],
    labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    showValuesOnTopOfBars = true,
    withInnerLines = true,
    barPercentag = 1,
    decimalPlaces = 2,
    flatColor = false,
    graphStyleView,
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
    <View
      style={[
        {
          height: 300,
          width: '90%',
          marginTop: 10,
          alignItems: 'center',
          marginLeft: 14,
          borderRadius: 30,
        },
        graphStyleView,
      ]}>
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
          backgroundColor: COLORS.WHITE,
          backgroundGradientFrom: COLORS.WHITE,
          backgroundGradientTo: COLORS.WHITE,
          decimalPlaces: decimalPlaces,
          barPercentage: barPercentag,
        }}
        fromZero={fromZero}
        verticalLabelRotation={verticalLabelRotation}
        horizontalLabelRotation={horizontalLabelRotation}
        showValuesOnTopOfBars={showValuesOnTopOfBars}
        withInnerLines={withInnerLines}
        flatColor={flatColor}
      />
    </View>
  );
}
