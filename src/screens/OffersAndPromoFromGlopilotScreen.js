import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const OffersAndPromoFromGlopilotScreen = ({ navigation }) => {
  const offers = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Get up to 50% off on summer destinations!",
      validUntil: "Valid until July 31, 2024",
    },
    {
      id: 2,
      title: "Referral Bonus",
      description: "Refer a friend and earn $20 for each successful referral.",
      validUntil: "Valid until August 15, 2024",
    },
    {
      id: 3,
      title: "Loyalty Rewards",
      description: "Earn double points on all bookings made in July.",
      validUntil: "Valid until July 31, 2024",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Offers & Promotions</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Latest Offers</Text>
        <Text style={styles.sectionDescription}>Stay updated with the latest offers and promotions from Glopilot.</Text>
        {offers.map((offer) => (
          <View key={offer.id} style={styles.offerContainer}>
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={styles.offerDescription}>{offer.description}</Text>
            <Text style={styles.offerValidUntil}>{offer.validUntil}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Save pressed')}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 14,
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    alignSelf: 'center',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 20,
  },
  offerContainer: {
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  offerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 8,
  },
  offerValidUntil: {
    fontSize: 14,
    color: '#999999',
  },
  saveButton: {
    backgroundColor: '#4460EF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  backButton: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 20,
  },
});

export default OffersAndPromoFromGlopilotScreen;
