import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import COLORS from '../../utils/colors';
import {PieChartData} from '.';
class ColorType {
  red: string = '204';
  blue: string = '155';
  green: string = '153';
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
  chartColor?: ColorType;
  labelColor?: ColorType;
  propdata?: any;
  graphStyle?: ViewStyle;
  hasLegend?: boolean;
  center?: Array<number>;
  absolute?: boolean;
  avoidFalseZero?: boolean;
  legendStyle?: StyleProp<TextStyle>;
  legendStyleView?: StyleProp<ViewStyle>;
  graphStyleView?: ViewStyle;
}

export default function PieChartScreen(props: PiechartProps) {
  const {
    width = 180,
    height = 180,
    backgroundColor = COLORS.DOGER_BLUE,
    paddingLeft = '10',
    labelColor = new ColorType(),
    chartColor = new ColorType(),
    propdata = PieChartData,
    hasLegend = true,
    graphStyle = {},
    center = [30, 0],
    absolute = false,
    avoidFalseZero = true,
    legendStyle = {},
    legendStyleView,
    graphStyleView,
  } = props;
  const generateChartColor = () => {
    return `rgba(${chartColor.red}, ${chartColor.green}, ${chartColor.blue}, ${chartColor.alpha})`;
  };

  const generateLabelColor = () => {
    return `rgba(${labelColor.red}, ${labelColor.green}, ${labelColor.blue}, ${labelColor.alpha})`;
  };
  let value = propdata?.reduce((previousValue: any, currentValue: any) => {
    return previousValue + currentValue.population;
  }, 0);
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          height: 300,
          width: '90%',
          marginTop: 40,
          backgroundColor: backgroundColor,
          alignItems: 'center',
          marginLeft: 12,
          borderRadius: 20,
        },
        graphStyleView,
      ]}>
      <PieChart
        data={propdata}
        backgroundColor={backgroundColor}
        paddingLeft={paddingLeft}
        height={height}
        width={width}
        hasLegend={false}
        accessor={'population'}
        chartConfig={{
          color: (_opacity = 1, _index) => generateChartColor(),
        }}
        style={graphStyle}
        avoidFalseZero={avoidFalseZero}
        center={center}
        absolute={false}
      />
      {hasLegend ? (
        <View>
          {propdata.map((item: any, index: number) => {
            const percentage = parseFloat(
              ((item.population * 100) / value).toFixed(2),
            );
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={[
                    {
                      height: 10,
                      width: 10,
                      borderRadius: 5,
                      backgroundColor: item.color,
                      marginRight: '8%',
                    },
                    legendStyleView,
                  ]}
                />
                <Text style={[{width: '30%'}, legendStyle]}>
                  {percentage >= 1 ? percentage + `% ` : '<1%'}
                </Text>
                <Text style={[legendStyle]}>{item?.name}</Text>
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}
//
