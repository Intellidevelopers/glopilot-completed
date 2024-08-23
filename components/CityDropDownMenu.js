// DropdownMenu.js
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { colors } from '../src/utils/colors';

const DropdownMenu = () => {
  const [selectedValue, setSelectedValue] = useState(null);

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
        onValueChange={(value) => setSelectedValue(value)}
        items={items}
        style={pickerSelectStyles}
        placeholder={{ label: 'Select property type...', value: null }}
      />
    </View>
  );
};

export default DropdownMenu;

const styles = StyleSheet.create({
  container: {
    padding: -0,
    marginVertical: -1,
    backgroundColor: '#fff',
    left: 0,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: 145,
    alignItems: "center",
    justifyContent: "center",

  },
  datep:{
    width: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  selectedText: {
    marginTop: 16,
    fontSize: 16,
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
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
