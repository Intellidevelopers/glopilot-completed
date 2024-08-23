import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/colors";

function HelpCenterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help</Text>
      </View>

      <Text style={styles.title}>Delete my Host account</Text>
      <Text style={styles.description}>
        We're sorry you're leaving! Once your account is deleted, it can't be recovered.
        You can delete your account 
        <Text style={styles.link} onPress={() => Linking.openURL('https://example.com')}> here</Text>.
        If you need help, contact our Partner Phone Support.
      </Text>

      <View style={styles.buttonContainer}>
      <Text style={styles.titleupp}>Can we help with anything else?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Consent')}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('No pressed')}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 30
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
    marginLeft: 87,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
  },
  link: {
    color: colors.primary,
  },
  buttonContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    borderColor: colors.gray,
  },
  button: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
  titleupp:{
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  }
});

export default HelpCenterScreen;
