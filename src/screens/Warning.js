import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/colors"; // Adjust this import based on your project structure
import icon from "../assets/icon.png"; // Update the path to your asset image

function WarningScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>

      <Text style={styles.title}>Delete Account</Text>

      <Text style={styles.description}>
        Requesting deletion of your account means that you will no longer be able to use your Gliopilots Host account, and your account will be permanently closed.
      </Text>

      <TouchableOpacity style={styles.deleteButton}  onPress={() => navigation.navigate('Confirmation')}>
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    width: '100%',
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
  iconContainer: {
    marginTop: 100,
    marginBottom: 30,
  },
  icon: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#000",
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  deleteButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: '100%',
    marginBottom: 10,
    marginVertical: 140
  },
  deleteButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  cancelButton: {
    backgroundColor: '#E6E6E6',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: '100%',
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default WarningScreen;
