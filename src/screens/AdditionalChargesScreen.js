import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const AdditionalChargesScreen = ({ navigation }) => {
  const [cleaningFee, setCleaningFee] = useState('');
  const [serviceFee, setServiceFee] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Additional Charges</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.label}>Cleaning Fee</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter cleaning fee"
          value={cleaningFee}
          onChangeText={(text) => setCleaningFee(text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Service Fee</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter service fee"
          value={serviceFee}
          onChangeText={(text) => setServiceFee(text)}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack('Save pressed')}>
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
    gap: 30
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
    marginBottom: 20,
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

export default AdditionalChargesScreen;
