import COLORS from './colors';
export const PieChartData = [
  {
    name: 'Seoul',
    population: 30,
    color: COLORS.LIGHT_BLUE,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 28,
    color: COLORS.RED,
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 52,
    color: 'red',
    legendFontColor: COLORS.DARK_GREY,
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 85,
    color: COLORS.WHITE,
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
export const BarchartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
