import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import LineChartComp from '../../component/lineChartComp';

const HomeScreen = () => {
  return (
    <View>
      {/* <LineChart1
        style={styles.main}
        // chartColor={{red: '253', green: '253', blue: '0', alpha: '1'}}
        // labelColor={{red: '255', green: '255', blue: '255', alpha: '1'}}
        bezier={false}
        values={{
          labels: ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'],
          datasets: [
            {
              data: [20, 20, 40, 50, 10, 10, 90],
            },
          ],
        }}
      /> */}
      <LineChartComp />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    alignSelf: 'center',
  },
});
