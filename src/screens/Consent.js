import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/colors";

function ConsentScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("No longer need account");

  const options = [
    "No longer need account",
    "I have safety or privacy concerns",
    "I can't host anymore",
    "Working with a different company",
    "Prefer not to say",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Please tell us why you’re leaving?</Text>

      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      {options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => setSelectedOption(option)}>
          <View style={styles.radioCircle}>
            {selectedOption === option && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Warning')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginVertical: 25,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingBottom: 15
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  continueButton: {
    marginTop: 120,
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  continueButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default ConsentScreen;
