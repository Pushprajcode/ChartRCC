# Chart RCC

This is the Chart Component for React Native.

## Documentation

### Import Component

yarn add react-native-chart-kit.  
 yarn add react-native-svg install peer dependencies.  
 Use with ES6 syntax to import components.

[Documentation](https://linktodocumentation)

## Prerequisites

Props for using Line Chart

This component is requires react-native chart kit and react-native-svg.
Define a chart style object with following properies as such:
Property | Type | Description |
--------------------- | ------------------------ | -------------------------------------------|
backgroundGradientFrom | string | Defines the first color in the linear gradient of a chart's background |
backgroundGradientFromOpacity| number|Defines the first color opacity in the linear gradient of a chart's background
backgroundGradientTo |string| Defines the second color in the linear gradient of a chart's background
width |Number |Width of the chart, use 'Dimensions' library to get the width of your screen for responsive
height |Number |Height of the chart
yAxisLabel |string| Prepend text to horizontal labels -- default: ''
yAxisSuffix| string |Append text to horizontal labels -- default: ''
xAxisLabel |string| Prepend text to vertical labels -- default: ''
yAxisInterval |string| Display y axis line every {x} input. -- default: 1
chartConfig |Object| Configuration object for the chart, see example config object above
horizontalLabelRotation |number| (degree) Rotation angle of the horizontal labels - default 0
verticalLabelRotation |number| (degree) Rotation angle of the vertical labels - default 0
bezier|boolean|to show curve in line -- default:true
values|any|the complete data shown under this included labels,datasets and data
data|Array<number>|data under values to be show on chart
labels| Array<string>| labels under values to be shown on chart
strokeWidth |Number| Width of the stroke of the chart - default: 16
radius |Number| Inner radius of the chart - default: 32
chartColor|ColorType|to change the rgba color of chart  
labelColor|ColorType|to change the rgba color of label
decimalPlaces|number|to change the value after decimalPlaces

![Logo](https://camo.githubusercontent.com/bd4d07913bcedac62efcf597e8aa52f5d752c49497530a9380dc5ed1a0dba0e7/68747470733a2f2f692e696d6775722e636f6d2f456e55695a5a552e6a7067)

## BarChart Props

| Properties              | Type            | Description                                                                                 |
| ----------------------- | --------------- | ------------------------------------------------------------------------------------------- |
| height                  | number          | to change the height of chart                                                               |
| data                    | array of Object | Data for the chart - see example above                                                      |
| width                   | Number          | Width of the chart, use 'Dimensions' library to get the width of your screen for responsive |
| height                  | Number          | Height of the chart                                                                         |
| withVerticalLabels      | boolean         | Show vertical labels - default: True                                                        |
| withHorizontalLabels    | boolean         | Show horizontal labels - default: True                                                      |
| fromZero                | boolean         | Render charts from 0 not from the minimum value. - default: False                           |
| withInnerLines          | boolean         | Show inner dashed lines - default: True                                                     |
| yAxisLabel              | string          | Prepend text to horizontal labels -- default: ''                                            |
| yAxisSuffix             | string          | Append text to horizontal labels -- default: ''                                             |
| chartConfig             | Object          | Configuration object for the chart, see example config in the beginning of this file        |
| horizontalLabelRotation | number          | (degree) Rotation angle of the horizontal labels - default 0                                |
| verticalLabelRotation   | number          | (degree) Rotation angle of the vertical labels - default 0                                  |
| showBarTops             | boolean         | Show bar tops                                                                               |
| showValuesOnTopOfBars   | boolean         | Show value above bars                                                                       |

![Logo](https://camo.githubusercontent.com/a25e38f20460864f56f1e26c9dc738d01dac45ba75035d2fc37a419dec5ccf0d/68747470733a2f2f692e696d6775722e636f6d2f6a5648455769492e6a7067)

## PieChart Props

| Properties      | Type            | Description                                                                                   |
| --------------- | --------------- | --------------------------------------------------------------------------------------------- |
| propdata        | array of Object | Data for the chart -                                                                          |
| width           | Number          | Width of the chart, use 'Dimensions' library to get the width of your screen for responsive   |
| height          | Number          | Height of the chart                                                                           |
| chartConfig     | Object          | Configuration object for the chart, see example config in the beginning of this file          |
| accessor        | string          | Property in the data object from which the number values are taken                            |
| bgColor         | string          | background color - if you want to set transparent, input transparent or none.                 |
| paddingLeft     | string          | left padding of the pie chart                                                                 |
| center          | array           | offset x and y coordinates to position the chart                                              |
| absolute        | boolean         | shows the values as absolute numbers                                                          |
| hasLegend       | boolean         | Defaults to true, set it to false to remove the legend                                        |
| avoidFalseZero  | boolean         | Defaults to false, set it to true to display a "<1%" instead of a rounded value equal to "0%" |
| legendStyle     | TextStyle       | used for styling of data recieved into %                                                      |
| legendStyleView | ViewStyle       | used for styling of data recieved into % whole data view                                      |
| graphStyleView  | ViewStyle       | used for styling of graph in view                                                             |

![Logo](https://camo.githubusercontent.com/64995896bdd2bf95f00239b5272928965bfbc01649f1743f4a165be621b8428c/68747470733a2f2f692e696d6775722e636f6d2f4a4d7a336f626b2e6a7067)
