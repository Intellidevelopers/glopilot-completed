import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors'; // Adjust the path as needed

const ProofSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/success.gif')} style={styles.documentImage} />
      </View>

      <Text style={styles.title}>Document under review</Text>
      <Text style={styles.subtitle}>It usually takes less than two days for us to complete the process.</Text>

      <TouchableOpacity style={styles.nextStepButton} onPress={() => navigation.navigate('HomePageScreen')}>
        <Text style={styles.nextStepButtonText}>Go to next step</Text>
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
  },
  subtitle: {
    fontSize: 16,
    color: '#0D1317',
    textAlign: 'center',
    marginBottom: 30,
  },
  nextStepButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  nextStepButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProofSuccessScreen;
