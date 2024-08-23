import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const CurrentReservationsScreen = ({navigation}) => {
  // Example data, replace with your actual data or use state management to fetch data
  const currentReservations = [
    { 
      guestName: 'James',
      dates: 'May 04 - May 07',
      profileImage: require('../assets/profile1.png'),
      house: 'Ocean View Villa',
      location: 'Miami Beach',
      phoneNumber: '+1 123 456 7890'
    },
    // Add more items as needed
  ];

  return (
    <SafeAreaView style={styles.reservationsList} showsVerticalScrollIndicator={false}>
     <View style={styles.reservationsHeader}>
          <Text style={styles.reservationsTitle}>Your Reservation Details</Text>
        </View>
      {currentReservations.map((reservation, index) => (
        <View style={styles.reservationItem} key={index}>
          <Text style={styles.hostingText}>Currently hosting</Text>
          <View style={styles.reservationDetails}>
            <Image source={reservation.profileImage} style={styles.profileImage} />
            <View style={styles.reservationInfo}>
              <Text style={styles.guestName}>{reservation.guestName}</Text>
              <Text style={styles.datesText}>{reservation.dates}</Text>
              <Text style={styles.houseText}>{reservation.house}</Text>
              <Text style={styles.locationText}>{reservation.location}</Text>
              <Text style={styles.phoneNumberText}>{reservation.phoneNumber}</Text>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.messageButton}>
              <AntDesign name="message1" color="#000" size={20} />
              <Text style={styles.actionText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.callButton}>
              <AntDesign name="phone" color="#000" size={20} />
              <Text style={styles.actionText}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View style={styles.cardButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton}>
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  reservationsList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  reservationItem: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: colors.gray,
    borderWidth: 2,
    marginVertical: 10
  },
  hostingText: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 10,
  },
  reservationDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  reservationInfo: {
    flex: 1,
  },
  guestName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  datesText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  houseText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  phoneNumberText: {
    fontSize: 14,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderColor: '#e0e0e0',
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: '#e0e0e0',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
  },
  reservationsHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  reservationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 60
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 370,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CurrentReservationsScreen;
