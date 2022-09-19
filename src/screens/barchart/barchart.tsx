import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';
import {BarchartData} from '../../utiles/datasets';

const screenWidth = Dimensions.get('window').width;
export default function BarchartScreen() {
  return (
    <View style={{flex: 1}}>
      <BarChart
        style={graphStyle}
        data={BarchartData}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        verticalLabelRotation={30}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
