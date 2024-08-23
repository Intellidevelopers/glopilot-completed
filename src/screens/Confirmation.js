import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather"; // For phone and email icons
import { colors } from "../utils/colors"; // Adjust this import based on your project structure

function ConfirmationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirmation</Text>
      </View>

      <Text style={styles.subtitle}>Let us know it’s really you</Text>

      <Text style={styles.description}>
        To continue you will need to confirm your account through one of the following options:
      </Text>

      <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate('Verification')}>
        <Feather name="phone" style={styles.icon} />
        <Text style={styles.optionText}>Phone number</Text>
        <Ionicons name="chevron-forward-outline" style={styles.chevronIcon} />
      </TouchableOpacity>

      
      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.optionRow} onPress={() => console.log('Email pressed')}>
        <Feather name="mail" style={styles.icon} />
        <Text style={styles.optionText}>Email</Text>
        <Ionicons name="chevron-forward-outline" style={styles.chevronIcon} />
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
    marginBottom: 30,
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 63,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  icon: {
    fontSize: 24,
    color: colors.secondary,
    marginRight: 10,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#0d1317",
  },
  chevronIcon: {
    fontSize: 21,
    color: "#333",
  },
});

export default ConfirmationScreen;
