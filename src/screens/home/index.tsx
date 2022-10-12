import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import ROUTE_NAME from '../../routes/routeName';
import {LABELS} from '../../utils/localStrings';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const _onPressBarChart = () => {
    navigation.navigate(ROUTE_NAME.BARCHARTSCREEN);
  };
  const _onPressLineChart = () => {
    navigation.navigate(ROUTE_NAME.LINECHARTSCREEN);
  };
  const _onPressPieChart = () => {
    navigation.navigate(ROUTE_NAME.PIECHARTSCREEN);
  };
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.buttonStyle} onPress={_onPressBarChart}>
        <Text style={styles.buttonText}>{LABELS.BARCHART}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={_onPressLineChart}>
        <Text style={styles.buttonText}>{LABELS.LINECHART}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={_onPressPieChart}>
        <Text style={styles.buttonText}>{LABELS.PIECHART}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    height: 50,
    width: 150,
    borderWidth: 4,
    borderRadius: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange',
    borderColor: 'dodgerblue',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    fontStyle: 'italic',
  },
});
