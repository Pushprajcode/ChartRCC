import {View} from 'react-native';
import React from 'react';
import BarchartScreen from './barchart';
export default function BarChart() {
  return (
    <View>
      <BarchartScreen
        yAxisLabel={'₹'}
        yAxisSuffix={'k'}
        height={230}
        verticalLabelRotation={2}
        horizontalLabelRotation={1}
        fromZero={true}
        style={{
          marginTop: 90,
        }}
      />
    </View>
  );
}
