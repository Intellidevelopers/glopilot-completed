import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Modal, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const HostPreferenceScreen = ({ navigation }) => {
  const [rentedBefore, setRentedBefore] = useState('');
  const [guestFrequency, setGuestFrequency] = useState('');
  const [rentedBeforeModalVisible, setRentedBeforeModalVisible] = useState(false);
  const [guestFrequencyModalVisible, setGuestFrequencyModalVisible] = useState(false);

  const rentedBeforeOptions = [
    { label: "Select", value: "" },
    { label: "No, I'm new to renting out", value: "new" },
    { label: "Yes, I have rented out before", value: "experienced" },
  ];

  const guestFrequencyOptions = [
    { label: "Select", value: "" },
    { label: "Not sure", value: "not_sure" },
    { label: "Part-time", value: "part_time" },
    { label: "As often as possible", value: "often" },
  ];

  const renderOption = (option, onSelect) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        onSelect(option.value);
      }}
    >
      <Text style={styles.optionText}>{option.label}</Text>
    </TouchableOpacity>
  );

  const validateInputs = () => {
    if (!rentedBefore) {
      Alert.alert("Validation Error", "Please select if you have rented out before.");
      return false;
    }
    if (!guestFrequency) {
      Alert.alert("Validation Error", "Please select how often you would like guests to stay.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateInputs()) {
      navigation.navigate('Notice');
    }
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

      <Text style={styles.title}>Host Preferences</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Have you previously rented out your place?</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setRentedBeforeModalVisible(true)}
        >
          <Text style={styles.dropdownText}>
            {rentedBeforeOptions.find(option => option.value === rentedBefore)?.label || 'Select'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>How often would you like guests to stay?</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setGuestFrequencyModalVisible(true)}
        >
          <Text style={styles.dropdownText}>
            {guestFrequencyOptions.find(option => option.value === guestFrequency)?.label || 'Select'}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <Modal
        visible={rentedBeforeModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setRentedBeforeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={rentedBeforeOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setRentedBefore(value);
                setRentedBeforeModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={guestFrequencyModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setGuestFrequencyModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={guestFrequencyOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setGuestFrequency(value);
                setGuestFrequencyModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>
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
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
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
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
  },
});

export default HostPreferenceScreen;
