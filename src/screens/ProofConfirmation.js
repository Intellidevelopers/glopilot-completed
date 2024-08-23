import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors'; // Adjust the path as needed

const ProofConfirmationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/documentconfirm.png')} style={styles.documentImage} />
      </View>

      <Text style={styles.title}>Do you want to use this photo?</Text>
      <Text style={styles.subtitle}>Make sure your Car Insurance photo is readable.</Text>

      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('ProofSuccess')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.retakeButton} onPress={() => { /* Handle retake action */ }}>
        <Text style={styles.retakeButtonText}>Retake</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 20,
    left: 5,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  documentImage: {
    width: width - 40,
    height: (width - 40) * 0.6, // Adjust the aspect ratio as needed
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginVertical: 30
  },
  subtitle: {
    fontSize: 16,
    color: '#0D1317',
    textAlign: 'center',
    marginBottom: 30,
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginVertical: 150
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  retakeButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  retakeButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default ProofConfirmationScreen;
