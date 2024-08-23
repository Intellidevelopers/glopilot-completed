import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomSwitch from '../../components/CustomSwitch';
import { colors } from '../utils/colors';

const GuestRequirementScreen = ({ navigation }) => {
  const [directBooking, setDirectBooking] = useState(true);
  const [trustedGuests, setTrustedGuests] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Guest Requirements</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.label}>Guest Requirements</Text>
        <Text style={styles.subtitle}>Your address is only shared with guests after confirmation.</Text>
        <View style={styles.optionRow}>
          <Text style={styles.optionTitle}>Direct Booking</Text>
          <CustomSwitch
            value={directBooking}
            onValueChange={setDirectBooking}
          />
        </View>
        <Text style={styles.optionDescription}>
          When enabled, bookings are automatically accepted. When disabled, you'll need to manually accept or decline booking requests.
        </Text>
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
    backgroundColor: '#FFFFFF',
    padding: 20,
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
  },
  body: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
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
  optionDescription: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 24,
    fontWeight: '400',
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

export default GuestRequirementScreen;
