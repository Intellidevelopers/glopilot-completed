import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomSwitch from '../../components/CustomSwitch'; // Assuming you have a custom switch component
import { colors } from '../utils/colors';

const TwoStepVerificationScreen = ({ navigation }) => {
  const [twoStepEnabled, setTwoStepEnabled] = useState(false);
  const [message, setMessage] = useState('');

  const handleSave = () => {
    setMessage(`Two-Step Verification ${twoStepEnabled ? 'enabled' : 'disabled'} successfully.`);
    console.log(`Two-Step Verification ${twoStepEnabled ? 'enabled' : 'disabled'}`);
    // Implement the save functionality here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Two-Step Verification</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Enable Two-Step Verification</Text>
        <Text style={styles.sectionDescription}>Enhance your account security with two-step verification.</Text>
        <View style={styles.optionRow}>
          <Text style={styles.optionTitle}>Two-Step Verification</Text>
          <CustomSwitch value={twoStepEnabled} onValueChange={setTwoStepEnabled} />
        </View>
        {message ? <Text style={styles.messageText}>{message}</Text> : null}
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 14,
    marginTop: 40,
    gap: 30
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  messageText: {
    color: 'green',
    marginTop: 10,
    fontSize: 15,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
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
    marginVertical: 20,
  },
});

export default TwoStepVerificationScreen;
