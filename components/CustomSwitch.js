import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const CustomSwitch = ({ value, onValueChange }) => {
  const [switchValue, setSwitchValue] = useState(value);
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: switchValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [switchValue]);

  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
    onValueChange(!switchValue);
  };

  const interpolateTrackColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['grey', '#4460EF'],
  });

  const thumbPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  return (
    <TouchableOpacity onPress={toggleSwitch} style={styles.switchContainer}>
      <Animated.View
        style={[
          styles.track,
          { backgroundColor: interpolateTrackColor },
        ]}
      />
      <Animated.View
        style={[
          styles.thumb,
          { transform: [{ translateX: thumbPosition }] },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 50,
    height: 30,
    justifyContent: 'center',
  },
  track: {
    width: 52,
    height: 32,
    borderRadius: 20,
    position: 'absolute',
  },
  thumb: {
    width: 27,
    height: 27,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 2,
  },
});

export default CustomSwitch;
