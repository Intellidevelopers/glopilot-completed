// Scripted and developed by adeagbo josiah

import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, Dimensions, ActivityIndicator } from 'react-native';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import axios from 'axios';

const AllReservationScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('current'); // Track active tab ('current', 'upcoming', 'completed')
  const [reservations, setReservations] = useState([]); // State to hold reservations
  const [loading, setLoading] = useState(false); // State to handle loading
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

  const fetchReservations = async () => {
    setLoading(true);
    try {
        const response = await axios.get('http://66.29.143.70:5010/vendor-house/reservations', {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVnYm9ndWpAeWFob28uY29tIiwiaWF0IjoxNzIyOTI3NTY2LCJleHAiOjE3NTQ0ODUxNjZ9.6cL04zdDmq_t6PR9HoR-HLV6Pc9raiueo3ZWnTtFm9Y`, // Replace with your actual token
                'Content-Type': 'application/json'
            }
        });

        // Check if data and reservations exist
        if (response.data && response.data.data && response.data.data.reservations) {
            // Assuming 'reservations' is an array of arrays as shown in the sample response
            const allReservations = response.data.data.reservations.flat(); // Flatten the array of arrays into a single array
            setReservations(allReservations);
        }
    } catch (error) {
        console.error('Error fetching reservations:', error);
    } finally {
        setLoading(false);
    }
};
 
  

  useEffect(() => {
    fetchReservations();
  }, [activeTab]);

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const renderReservations = () => {
    if (loading) {
      return <ActivityIndicator size="large" color={colors.primary} />;
    }

    if (reservations.length === 0) {
      return <Text>No reservations found.</Text>;
    }

    return reservations.map((reservation, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('ReservationDetails', { reservation })}
      >

        <View style={styles.reservationItem}>
          <Text style={styles.hostingText}>Completed reservation</Text>
          <View style={styles.reservationDetails}>
            <Image source={{ uri: `http://66.29.143.70:5010/${reservation.image}` }} style={styles.profileImage} />
            <View style={styles.reservationInfo}>
              <Text style={styles.guestName}>{reservation.userId}</Text>
              <Text style={styles.datesText}>{reservation.fromWhen} - {reservation.toWhen}</Text>
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
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.reservationsContainer}>
        {/* Reservations Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" color="#000" size={25} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>All Reservations</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'current' && styles.activeTab]}
            onPress={() => setActiveTab('current')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'current' && styles.activeTabText]}>Current</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'upcoming' && styles.activeTab]}
            onPress={() => setActiveTab('upcoming')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'upcoming' && styles.activeTabText]}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'completed' && styles.activeTab]}
            onPress={() => setActiveTab('completed')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'completed' && styles.activeTabText]}>Completed</Text>
          </TouchableOpacity>
        </View>

        {/* Reservations List */}
        <ScrollView style={styles.reservationsList} showsVerticalScrollIndicator={false}>
          {renderReservations()}
        </ScrollView>
      </View>

      {/* Modal */}
      {modalVisible && (
        <Modal transparent visible={modalVisible} animationType="none">
          <TouchableWithoutFeedback style={styles.modalOverlay} onPress={closeModal}>
            <Animated.View style={[styles.bookingCard, { transform: [{ translateY: slideAnim }] }]}>
              <Image source={require('../assets/house.png')} style={styles.bookingImage} />
              <Text style={styles.bookingTitle}>New Double-Story House with Swimming Pool</Text>
              <Text style={styles.bookingDates}>May 15, 2024 - May 28, 2024</Text>
              <Text style={styles.bookingType}>Full Place</Text>

              <View style={styles.divider} />

              <View style={styles.hostInfo}>
                <Image source={require('../assets/profile3.png')} style={styles.hostImage} />
                <View style={styles.hostDetails}>
                  <Text style={styles.hostName}>Femi Vanzekin</Text>
                  <View style={styles.hostRating}>
                    <AntDesign name="star" size={14} color="#FFC107" />
                    <Text style={styles.ratingText}>4.6</Text>
                    <Text style={styles.verifiedText}>Verified</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.contactButton}>
                  <MaterialIcons name="perm-phone-msg" color="#000" size={30} />
                </TouchableOpacity>
              </View>

              <View style={styles.divider} />

              <View style={styles.cardButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton}>
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  notificationButton: {
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 20,
    marginVertical: 30
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECEFFD',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#6c757d',
  },
  responseButton: {
    marginTop: 10,
  },
  responseButtonText: {
    color: colors.primary,
    fontWeight: "600",
  },
  closeButton: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: -50,
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
  },
  reservationsContainer: {
    flex: 1,
    marginTop: 50,
  },
  reservationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  reservationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#4460EF',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButton: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginRight: 5,
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: '#4460EF',
  },
  tabButtonText: {
    color: '#333',
    fontSize: 12,
  },
  activeTabText: {
    color: '#fff',
  },
  reservationsList: {
    flex: 1,
  },
  reservationItem: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: colors.gray,
    borderWidth: 2,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  bookingImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookingDates: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  bookingType: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  hostInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  hostImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  hostDetails: {
    flex: 1,
  },
  hostName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  hostRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  ratingText: {
    marginLeft: 5,
    color: '#666',
  },
  verifiedText: {
    marginLeft: 10,
    color: colors.primary,
    fontWeight: '600',
  },
  contactButton: {
    padding: 10,
    backgroundColor: colors.gray,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 5,
    marginTop: -20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 30,
    alignSelf: 'center',
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

export default AllReservationScreen;
