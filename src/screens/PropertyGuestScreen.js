import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const PropertyGuestScreen = ({ navigation }) => {
  const [propertyType, setPropertyType] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [propertySize, setPropertySize] = useState('');
  const [numBedrooms, setNumBedrooms] = useState('');
  const [numBathrooms, setNumBathrooms] = useState('');
  const [maxOccupancy, setMaxOccupancy] = useState('');
  const [guestRequirements, setGuestRequirements] = useState('');
  const [houseRules, setHouseRules] = useState('');
  const [petPolicy, setPetPolicy] = useState('');
  const [smokingPolicy, setSmokingPolicy] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Property & Guest</Text>
      </View>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Property Information</Text>
        <TextInput style={styles.input} placeholder="Property Type" value={propertyType} onChangeText={setPropertyType} />
        <TextInput style={styles.input} placeholder="Property Address" value={propertyAddress} onChangeText={setPropertyAddress} />
        <TextInput style={styles.input} placeholder="Property Size" value={propertySize} onChangeText={setPropertySize} />
        <TextInput style={styles.input} placeholder="Number of Bedrooms" value={numBedrooms} onChangeText={setNumBedrooms} />
        <TextInput style={styles.input} placeholder="Number of Bathrooms" value={numBathrooms} onChangeText={setNumBathrooms} />
        <TextInput style={styles.input} placeholder="Maximum Occupancy" value={maxOccupancy} onChangeText={setMaxOccupancy} />

        <Text style={styles.label}>Guest Information</Text>
        <TextInput style={styles.input} placeholder="Guest Requirements" value={guestRequirements} onChangeText={setGuestRequirements} />
        <TextInput style={styles.input} placeholder="House Rules" value={houseRules} onChangeText={setHouseRules} />
        <TextInput style={styles.input} placeholder="Pet Policy" value={petPolicy} onChangeText={setPetPolicy} />
        <TextInput style={styles.input} placeholder="Smoking Policy" value={smokingPolicy} onChangeText={setSmokingPolicy} />
      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    gap: 25
  },
  backButton: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  body: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PropertyGuestScreen;
