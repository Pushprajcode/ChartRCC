import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ROUTE_NAME from '../../routes/routeName';
import {LineChart} from 'react-native-chart-kit';

export default function HomeScreen(props: any | boolean) {
  const navigation = useNavigation<any>();
  const toTest = () => {
    navigation.navigate(ROUTE_NAME.TEST);
  };
  const {} = props;
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        onPress={toTest}
        style={styles.button}></TouchableOpacity>
      <LineChart
        {...props}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={350}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
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
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#B7C4CF',
  },
  button: {
    backgroundColor: '#400D51',
    height: 40,
    borderRadius: 100,
  },
});
