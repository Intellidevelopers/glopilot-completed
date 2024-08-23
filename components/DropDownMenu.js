import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { colors } from '../src/utils/colors';

const DropdownMenu = ({ selectedValue, onValueChange }) => {
  const items = [
    { label: 'House', value: 'House' },
    { label: 'Bungalow', value: 'Bungalow' },
    { label: 'Hotel', value: 'Hotel' },
    { label: 'Cabin', value: 'Cabin' },
    { label: 'Chalet', value: 'Chalet' },
    { label: 'Cottage', value: 'Cottage' },
  ];

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        style={pickerSelectStyles}
        value={selectedValue}
        placeholder={{ label: 'Select property type...', value: null }}
      />
    </View>
  );
};

export default DropdownMenu;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginVertical: 30,
    backgroundColor: '#fff',
    left: 0,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 15,
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'blue',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
