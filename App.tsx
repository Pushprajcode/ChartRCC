import React from 'react';
import BarChart from './src/screens/barchart';
import BarchartScreen from './src/screens/barchart/barchart';
import PieScreen from './src/screens/piechart/piechart';
import ProgressPieChart from './src/screens/progressringchart';
import Progressring from './src/screens/progressringchart/progressring';
import COLORS from './src/utiles/colors';

export default function App() {
  const BarchartData = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [10, 20, 30, 40, 50, 60],
      },
    ],
  };
  return (
    <BarchartScreen
      horizontalLabelRotation={0}
      yAxisLabel={''}
      yAxisSuffix={''}
      initialChartConfig={{
        height: 300,
        fillShadowGradient: COLORS.PRIMARY_BLUE,
        backgroundGradientFrom: COLORS.WHITE,
        backgroundGradientTo: COLORS.WHITE,
        fillShadowGradientOpacity: 1,
        barPercentage: 0.5,
        decimalPlaces: 2,
        color: () => COLORS.PRIMARY_BLUE,
        labelColor: () => COLORS.RED,
        propsForBackgroundLines: {
          strokeWidth: 1,
          stroke: COLORS.DOGER_BLUE,
          strokeDasharray: '4',
        },
      }}
      BarchartData={BarchartData}
    />
    // <BarChart />
    // <ProgressPieChart />
  );
}
