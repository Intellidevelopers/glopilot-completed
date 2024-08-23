import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors'; // Adjust the path as needed

const VerificationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
      </TouchableOpacity>

      <Text style={styles.welcomeText}>Welcome, Femi Vanzekin</Text>
      <Text style={styles.subtitle}>Please provide the required documents to set up your account</Text>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Proof')}>
        <View style={styles.itemContent}>
          <Ionicons name="document-text-outline" size={30} color={colors.secondary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>CNIC Front Side</Text>
            <Text style={styles.itemDescription}>Get Started</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={colors.secondary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => { /* Handle navigation to respective upload screens */ }}>
        <View style={styles.itemContent}>
          <Ionicons name="document-text-outline" size={30} color={colors.secondary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>CNIC Back Side</Text>
            <Text style={styles.itemDescription}>Get Started</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={colors.secondary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => { /* Handle navigation to respective upload screens */ }}>
        <View style={styles.itemContent}>
          <Ionicons name="document-text-outline" size={30} color={colors.secondary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Profile Photo (Optional)</Text>
            <Text style={styles.itemDescription}>Get Started</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={colors.secondary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => { /* Handle navigation to respective upload screens */ }}>
        <View style={styles.itemContent}>
          <Ionicons name="document-text-outline" size={30} color={colors.secondary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Proof of Insurance</Text>
            <Text style={styles.itemDescription}>Get Started</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={colors.secondary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => { /* Handle navigation to respective upload screens */ }}>
        <View style={styles.itemContent}>
          <Ionicons name="document-text-outline" size={30} color={colors.secondary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Vehicle Registration</Text>
            <Text style={styles.itemDescription}>Get Started</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={colors.secondary} />
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
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  itemTitle: {
    fontSize: 16,
    color: '#000',
  },
  itemDescription: {
    fontSize: 12,
    color: '#666',
  },
});

export default VerificationScreen;
