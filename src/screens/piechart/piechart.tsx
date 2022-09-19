import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {PieChartData} from '../../utiles/datasets';
import {PieChart} from 'react-native-chart-kit';
import COLORS from '../../utiles/colors';

export default function Index(props: any) {
  const screenWidth = Dimensions.get('window').width;
  const {height} = props;
  console.log('rrrr', height);

  return (
    <View style={styles.containerView}>
      <PieChart
        data={PieChartData}
        width={screenWidth}
        height={400}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[10, 50]}
        chartConfig={{
          strokeWidth: 3,
          barPercentage: 0.5,
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 5, // optional, defaults to 2dp
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
          propsForLabels: {},
        }}
      />
      <TouchableOpacity>
        <Text>{'NEXT'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    // backgroundColor: COLORS.BLACK,
  },
});
