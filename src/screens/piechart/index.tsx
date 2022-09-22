import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PieScreen from './piechart';
import COLORS from '../../utiles/colors';

export default function PieChartScreen() {
  return (
    <View>
      <PieScreen
        height={200}
        width={400}
        backgroundColor={COLORS.WHITE}
        paddingLeft={'10'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  customPieStyle: {},
});
