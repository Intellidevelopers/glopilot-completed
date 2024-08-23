import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const SettingsScreen = ({ navigation }) => {
  const [houseRules, setHouseRules] = useState({
    petsAllowed: true,
    eventsAllowed: false,
    smokingAllowed: false,
    photography: false,
    quietHours: false,
  });

  const toggleRule = (rule) => {
    setHouseRules((prevRules) => ({
      ...prevRules,
      [rule]: !prevRules[rule],
    }));
  };

  const validateRules = () => {
    const { petsAllowed, eventsAllowed, smokingAllowed, photography, quietHours } = houseRules;
    // Example validation: at least one rule must be true
    if (!petsAllowed && !eventsAllowed && !smokingAllowed && !photography && !quietHours) {
      Alert.alert("Validation Error", "You must allow at least one rule.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateRules()) {
      navigation.navigate('Host');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color="#000" size={25} />
      </TouchableOpacity>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>Set your house rules</Text>
      <Text style={styles.subtitle}>
        Guests are expected to follow your rules or face removal from Glopilots.
      </Text>

      <ScrollView contentContainerStyle={styles.rulesContainer}>
        <View style={styles.ruleRow}>
          <Text style={styles.ruleText}>Pets allowed</Text>
          <Checkbox
            style={styles.checkBox}
            value={houseRules.petsAllowed}
            onValueChange={() => toggleRule('petsAllowed')}
            color={houseRules.petsAllowed ? '#4460EF' : undefined}
          />
        </View>

        <View style={{ flexDirection: 'row', width: 330, alignItems: 'center' }}>
          <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
        </View>

        <View style={styles.ruleRow}>
          <Text style={styles.ruleText}>Events allowed</Text>
          <Checkbox
            style={styles.checkBox}
            value={houseRules.eventsAllowed}
            onValueChange={() => toggleRule('eventsAllowed')}
            color={houseRules.eventsAllowed ? '#4460EF' : undefined}
          />
        </View>

        <View style={{ flexDirection: 'row', width: 330, alignItems: 'center' }}>
          <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
        </View>

        <View style={styles.ruleRow}>
          <Text style={styles.ruleText}>Any kind of smoking allowed</Text>
          <Checkbox
            style={styles.checkBox}
            value={houseRules.smokingAllowed}
            onValueChange={() => toggleRule('smokingAllowed')}
            color={houseRules.smokingAllowed ? '#4460EF' : undefined}
          />
        </View>

        <View style={{ flexDirection: 'row', width: 330, alignItems: 'center' }}>
          <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
        </View>

        <View style={styles.ruleRow}>
          <Text style={styles.ruleText}>Photography</Text>
          <Checkbox
            style={styles.checkBox}
            value={houseRules.photography}
            onValueChange={() => toggleRule('photography')}
            color={houseRules.photography ? '#4460EF' : undefined}
          />
        </View>

        <View style={{ flexDirection: 'row', width: 330, alignItems: 'center' }}>
          <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
        </View>

        <View style={styles.ruleRow}>
          <Text style={styles.ruleText}>Quiet hours</Text>
          <Checkbox
            style={styles.checkBox}
            value={houseRules.quietHours}
            onValueChange={() => toggleRule('quietHours')}
            color={houseRules.quietHours ? '#4460EF' : undefined}
          />
        </View>

        <View style={{ flexDirection: 'row', width: 330, alignItems: 'center' }}>
          <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
        </View>

      </ScrollView>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
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
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 15,
    left: -5,
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
    width: '50%',
    height: '100%',
    backgroundColor: '#4460EF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  rulesContainer: {
    flexDirection: 'column',
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  ruleText: {
    fontSize: 16,
  },
  checkBox: {
    borderColor: colors.gray,
    borderRadius: 4,
  },
  nextButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 40,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SettingsScreen;
