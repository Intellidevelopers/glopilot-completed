import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const CustomBarchart = ({ data }) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <View style={styles.chartContainer}>
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * 100;

        return (
          <View key={index} style={styles.barContainer}>
            <View style={[styles.bar, { height: `${barHeight}%`, backgroundColor: item.color }]} />
            <View style={styles.labelContainer}>
              <View style={styles.labelText}>
                <View style={styles.labelItem} />
                <Text style={styles.label}>{item.label}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 200,
    marginVertical: 20,
  },
  barContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bar: {
    width: 30,
    borderRadius: 5,
  },
  labelContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
  },
});

export default CustomBarchart;
