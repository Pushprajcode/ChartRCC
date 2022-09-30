// import BarchartScreen from './src/screens/barchart/barchart';
// import PieChartScreen from './src/screens/piechart/piechart';
// import COLORS from './src/utiles/colors';

// export default function App() {
const PieData = [
  {
    name: 'Se',
    population: 30,
    color: COLORS.LIGHT_BLUE,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'To',
    population: 28,
    color: COLORS.RED,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'Bei',
    population: 52,
    color: COLORS.GREY,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 85,
    color: COLORS.PRIMARY_BLUE,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11,
    color: COLORS.VERYDARK_GREY,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
];
//   return <PieChartScreen propdata={PieData} graphStyle={{marginTop: 90}} />;
// return (
//   <BarchartScreen

//   // showValuesOnTopOfBars={}
//   // height={300}
//   // width={400}
//   // yAxisLabel={'$'}
//   // graphStyle={{marginTop: 40}}
//   // chartColor={'red'}
//   />
// );
// }
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PieChartScreen from './src/screens/piechart/piechart';
import BarchartScreen from './src/screens/barchart/barchart';
import COLORS from './src/utils/colors';

export default function App() {
  return (
    <View>
      <PieChartScreen />
      <BarchartScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
