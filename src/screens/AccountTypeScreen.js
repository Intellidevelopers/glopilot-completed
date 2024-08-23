import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors'; // Adjust the path as needed

const AccountTypeScreen = () => {
  const navigation = useNavigation();
  const accountTypes = [
    { title: 'Driver', image: require('../assets/car-owner.png'), screen: 'CarOwner' },
    { title: 'Vendor', image: require('../assets/vendor.png'), screen: 'VendorScreen' },
    { title: 'Hospitality', image: require('../assets/hospitality.png'), screen: 'HomeScreen' },
    { title: 'Car Owner', image: require('../assets/car-owner.png'), screen: 'CarOwner' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.navigate('MainTabs')}>
        <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
      </TouchableOpacity>
      </View>

      <Text style={styles.title}>What's your account type?</Text>
      <Text style={styles.subtitle}>Please tell us how do you want to continue?</Text>

      <View style={styles.accountTypeContainer}>
        {accountTypes.map((type, index) => (
          <TouchableOpacity
            key={index}
            style={styles.accountTypeButton}
            onPress={() => navigation.navigate(type.screen)}
          >
            <Image source={type.image} style={styles.accountTypeImage} />
            <Text style={styles.accountTypeText}>{type.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={() => {}}>
        <Text style={styles.nextButtonText}>Next</Text>
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
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  accountTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  accountTypeButton: {
    width: (width - 60) / 2,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  accountTypeImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  accountTypeText: {
    fontSize: 16,
    color: '#000',
  },
  nextButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 120,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  BackButton:{
    backgroundColor: colors.white,
    marginTop: 45,
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
});

export default AccountTypeScreen;
