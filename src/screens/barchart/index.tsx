// import {View} from 'react-native';
// import React from 'react';
// import BarchartScreen from './barchart';
// import COLORS from '../../utiles/colors';

// export const BarchartData = {
//   labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
//   datasets: [
//     {
//       data: [10, 20, 30, 40, 50, 60],
//     },
//   ],
// };

// export default function BarChart() {
//   return (
//     <BarchartScreen
//       yAxisLabel={'₹'}
//       yAxisSuffix={'k'}
//       height={230}
//       BarchartData={BarchartData}
//       verticalLabelRotation={2}
//       horizontalLabelRotation={1}
//       fromZero={true}
//       graphStyle={{
//         marginTop: 120,
//       }}
//       initialChartConfig={{
//         height: 300,
//         fillShadowGradient: COLORS.PRIMARY_BLUE,
//         backgroundGradientFrom: COLORS.WHITE,
//         backgroundGradientTo: COLORS.WHITE,
//         fillShadowGradientOpacity: 1,
//         barPercentage: 0.5,
//         decimalPlaces: 2,
//         color: () => COLORS.PRIMARY_BLUE,
//         labelColor: () => COLORS.RED,
//         propsForBackgroundLines: {
//           strokeWidth: 1,
//           stroke: COLORS.DOGER_BLUE,
//           strokeDasharray: '4',
//         },
//       }}
//     />
//   );
// }
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function BarChart() {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
