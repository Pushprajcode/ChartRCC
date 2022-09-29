import React from 'react';
import BarChart from './src/screens/barchart';
import BarchartScreen from './src/screens/barchart/barchart';
// import BarchartScreen from './src/screens/barchart/barchart';
// import PieChartScreen from './src/screens/piechart';
import PieScreen from './src/screens/piechart/piechart';
import ProgressPieChart from './src/screens/progressringchart';
import Progressring from './src/screens/progressringchart/progressring';
import COLORS from './src/utiles/colors';

export default function App() {
  // const PieChartData = [
  //   {
  //     name: 'Seoul',
  //     population: 30,
  //     color: COLORS.LIGHT_BLUE,
  //     legendFontColor: COLORS.DARK_GREY,
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'Toronto',
  //     population: 28,
  //     color: COLORS.RED,
  //     legendFontColor: COLORS.DARK_GREY,
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'Beijing',
  //     population: 52,
  //     color: COLORS.GREY,
  //     legendFontColor: COLORS.DARK_GREY,
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'New York',
  //     population: 85,
  //     color: COLORS.PRIMARY_BLUE,
  //     legendFontColor: COLORS.DARK_GREY,
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'Moscow',
  //     population: 11,
  //     color: COLORS.VERYDARK_GREY,
  //     legendFontColor: COLORS.DARK_GREY,
  //     legendFontSize: 15,
  //   },
  // ];
  // return <PieScreen />;
  return (
    <BarchartScreen
    // showValuesOnTopOfBars={}
    // height={300}
    // width={400}
    // yAxisLabel={'$'}
    // graphStyle={{marginTop: 40}}
    />
  );
}
