// App.js
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/colors";


export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/success.gif')} // Replace with your GIF path
          style={styles.gif}
        />
      </View>
      <Text style={styles.title}>You're all set</Text>
      <Text style={styles.message}>
        Your deletion request will be processed after we've confirmed you are the true owner of this account.
        You may receive a follow-up email with information for further authentication of your account.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  iconContainer: {
    marginBottom: 24,
    marginTop: 80
  },
  gif: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  message: {
    fontSize: 15,
    textAlign: 'center',
    color: '#0D1317',
    marginBottom: 32,
    fontWeight: "600"
  },
  button: {
    backgroundColor: '#4460EF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    width: '100%',
    marginTop: 150
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: "center"
  },
  header: {
    flexDirection: 'row',
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
    marginLeft: -160,
  },
});
