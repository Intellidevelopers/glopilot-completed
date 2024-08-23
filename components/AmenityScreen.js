import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons'; // Correct import for Ionicons

const AmenityScreen = ({ navigation }) => {
  const [amenities, setAmenities] = useState({
    essentials: true,
    airConditioner: false,
    heating: false,
    hairDryer: false,
    iron: false,
    tv: false,
    wifi: false,
  });

  const handleCheckboxChange = (amenity) => {
    setAmenities({ ...amenities, [amenity]: !amenities[amenity] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>What amenities do you provide?</Text>
      <Text style={styles.subtitle}>
        Guests typically expect these amenities, but you can add more later.
      </Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={amenities.essentials}
            onValueChange={() => handleCheckboxChange('essentials')}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Essentials</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={amenities.airConditioner}
            onValueChange={() => handleCheckboxChange('airConditioner')}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Air Conditioner</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={amenities.heating}
            onValueChange={() => handleCheckboxChange('heating')}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Heating</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={amenities.hairDryer}
            onValueChange={() => handleCheckboxChange('hairDryer')}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Hair Dryer</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={amenities.iron}
            onValueChange={() => handleCheckboxChange('iron')}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Iron</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={amenities.tv}
            onValueChange={() => handleCheckboxChange('tv')}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>TV</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={amenities.wifi}
            onValueChange={() => handleCheckboxChange('wifi')}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>WiFi</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NextScreen')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressBar: {
    width: '60%',
    height: '100%',
    backgroundColor: '#4460EF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AmenityScreen;
