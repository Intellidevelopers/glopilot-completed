import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors'; // Adjust the path as needed

const ProofInsuranceScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
      </TouchableOpacity>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarFilled} />
      </View>

      <Text style={styles.title}>Take a picture of Car Insurance</Text>
      <Text style={styles.instruction}>
        1. Ensure the image is clear and legible, capturing all details of the insurance document without blur or distortion.
      </Text>
      <Text style={styles.instruction}>
        2. Include the entire car insurance document within the frame, ensuring no information is cut off or obscured.
      </Text>
      <Text style={styles.instruction}>
        3. Take the picture in well-lit conditions to enhance clarity and visibility of the insurance details, minimizing shadows and glare.
      </Text>

      <View style={styles.documentContainer}>
        <Image source={require('../assets/document.png')} style={styles.documentImage} />
      </View>

      <TouchableOpacity style={styles.photoButton} onPress={() => navigation.navigate('ProofConfirmation')}>
        <Text style={styles.photoButtonText}>Take Photo</Text>
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
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 7,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginBottom: 20,
  },
  progressBarFilled: {
    height: '100%',
    width: '25%', // Adjust this to represent the progress
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    fontWeight: "500"
  },
  documentContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  documentImage: {
    width: width - 40,
    height: (width - 40) * 0.8, // Adjust the aspect ratio as needed
    resizeMode: 'contain',
  },
  photoButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProofInsuranceScreen;
