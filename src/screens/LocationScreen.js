import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';  // Import the progress bar library
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utils/colors';
import Feather from 'react-native-vector-icons/Feather';

const BasicInfoScreen = () => {
  const [guests, setGuests] = useState(4);
  const [bedrooms, setBedrooms] = useState(4);
  const [beds, setBeds] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0.4); // Progress value between 0 and 1

  const handleNext = () => {
    navigation.navigate('LOCATION'); // Ensure this matches the screen name in the navigator
  };

  const increment = (setter, value) => {
    setter(value + 1);
  };

  const decrement = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
        <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
      </TouchableOpacity>
      </View>

      <Progress.Bar 
        progress={0.4} 
        width={null} 
        style={styles.progressBar} 
        color="#4460EF"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Share basic information about your place</Text>
        <Text style={styles.subtitle}>Please ensure that you have enough beds to comfortably accommodate all your guests.</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Guests</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={() => decrement(setGuests, guests)} style={styles.counterButton}>
              <Feather name="minus" size={24} color="gray" />
            </TouchableOpacity>
            <Text style={styles.counterValue}>{guests}</Text>
            <TouchableOpacity onPress={() => increment(setGuests, guests)} style={styles.counterButton}>
              <Feather name="plus" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Bedrooms</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={() => decrement(setBedrooms, bedrooms)} style={styles.counterButton}>
              <Feather name="minus" size={24} color="gray" />
            </TouchableOpacity>
            <Text style={styles.counterValue}>{bedrooms}</Text>
            <TouchableOpacity onPress={() => increment(setBedrooms, bedrooms)} style={styles.counterButton}>
              <Feather name="plus" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Beds</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={() => decrement(setBeds, beds)} style={styles.counterButton}>
              <Feather name="minus" size={24} color="gray" />
            </TouchableOpacity>
            <Text style={styles.counterValue}>{beds}</Text>
            <TouchableOpacity onPress={() => increment(setBeds, beds)} style={styles.counterButton}>
              <Feather name="plus" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Bathrooms</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={() => decrement(setBathrooms, bathrooms)} style={styles.counterButton}>
              <Feather name="minus" size={24} color="gray" />
            </TouchableOpacity>
            <Text style={styles.counterValue}>{bathrooms}</Text>
            <TouchableOpacity onPress={() => increment(setBathrooms, bathrooms)} style={styles.counterButton}>
              <Feather name="plus" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate('PROPERTY')}  // Replace 'NextScreen' with your actual next screen
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
  },
  progressBar: {
    margin: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginVertical: 25,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: '#0D1317',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    marginHorizontal: 10,
    backgroundColor: colors.gray,
    padding: 10,
    borderRadius: 25,
  },
  counterValue: {
    fontSize: 18,
    width: 40,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  BackButton:{
    backgroundColor: colors.white,
    marginTop: 45,
    left: 5,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray,
  },
});

export default BasicInfoScreen;
