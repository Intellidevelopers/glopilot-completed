import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const CheckInCheckOut = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Check-in & Check-out</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Check-in</Text>
        <View style={styles.timeColumn}>
          <Text style={styles.label}>Arrive after</Text>
          <Text style={styles.time}>12:00 PM</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.timeColumn}>
          <Text style={styles.label}>Arrive Before</Text>
          <Text style={styles.time}>3:00 AM (Next day)</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Check-out</Text>
        <View style={styles.timeColumn}>
          <Text style={styles.label}>Leave before</Text>
          <Text style={styles.time}>12:00 AM</Text>
        </View>
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
    flexDirection: "row",
    marginVertical: 40,
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 10,
    gap: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 50,
    marginTop: 20,
  },
  content: {
    padding: 16,
    marginVertical: -30,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: '700',
  },
  timeColumn: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '600',
  },
  time: {
    fontSize: 16,
    color: '#666666',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    marginVertical: 250,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 10,
    left: 5,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.gray,
    borderWidth: 1,
  },
});

export default CheckInCheckOut;
