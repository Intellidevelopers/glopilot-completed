import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const PhoneScreen = ({ navigation }) => {
  const [guestPermission, setGuestPermission] = useState(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={25} color="#000" />
      </TouchableOpacity>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>Phone number</Text>
      <Text style={styles.phoneNumber}>+1 453 536 6897</Text>

      <View style={styles.verifiedContainer}>
        <Ionicons name="checkmark-circle" size={20} color="green" />
        <Text style={styles.verifiedText}>Verified</Text>
      </View>
      <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>
      <Text style={styles.questionText}>
        Can a guest use this number to get in touch with you?
      </Text>

      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => setGuestPermission(true)}
      >
        <Ionicons
          name={guestPermission ? "radio-button-on" : "radio-button-off"}
          size={20}
          color="#4460EF"
        />
        <Text style={styles.radioText}>Yes, guests can use this number</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', width: 330, alignItems: 'center', marginVertical: 5}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => setGuestPermission(false)}
      >
        <Ionicons
          name={guestPermission === false ? "radio-button-on" : "radio-button-off"}
          size={20}
          color="#ccc"
        />
        <Text style={styles.radioText}>No, guests can't use this number</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          if (guestPermission !== null) {
            navigation.navigate('SettingScreen');
          } else {
            Alert.alert('Please select an option.');
          }
        }}
      >
        <Text style={styles.nextButtonText}>Next</Text>
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
  backButton: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    width: '80%', // Assuming the progress is 80%
    height: '100%',
    backgroundColor: '#4460EF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    fontWeight: "500"
  },
  verifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  verifiedText: {
    fontSize: 16,
    color: '#04AA6D',
    marginLeft: 5,
  },
  questionText: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 20,
    fontWeight: "800"
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginVertical: 10,
    marginBottom: 25,
  },
  radioText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "500"
  },
  nextButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 250,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PhoneScreen;
