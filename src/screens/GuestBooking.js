import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomSwitch from '../../components/CustomSwitch';  // Import the custom switch component
import { colors } from '../utils/colors';

const GuestsBookingScreen = ({ navigation }) => {
  const [directBooking, setDirectBooking] = useState(true);
  const [trustedGuests, setTrustedGuests] = useState(true);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Guests Booking</Text>
      </View>

      <View style={styles.content}>
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

        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.optionTitle}>Only Trusted Guests</Text>
          <CustomSwitch
            value={trustedGuests}
            onValueChange={setTrustedGuests}
          />
        </View>
        <Text style={styles.optionDescription}>
          Accept only guests with no issues or negative reviews on Glopilots.
        </Text>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Save pressed')}>
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
    marginLeft: 20,
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 50,
    alignSelf: "center"
  },
  content: {
    padding: 16,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: "600"
  },
  optionDescription: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 24,
    fontWeight: "400"
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    marginVertical: 280
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

export default GuestsBookingScreen;
