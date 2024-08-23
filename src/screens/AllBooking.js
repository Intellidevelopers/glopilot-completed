import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, AntDesign, Octicons, Fontisto } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const HomePageScreen = ({ navigation }) => {
   const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

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

  return (
    <View style={styles.container}>

      <Text style={styles.welcomeText}>Bookings</Text>

      <View style={styles.reservationsContainer}>
      
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>Current (1)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTab}>
            <Text style={styles.inactiveTabText}>Upcoming (3)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTab}>
            <Text style={styles.inactiveTabText}>Completed (10)</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.reservationsList}  showsVerticalScrollIndicator={false}>
          <View style={styles.reservationItem}>
            <View style={styles.reservationDetails}>
              <Image source={require('../assets/car.png')} style={styles.profileImage} />
              <View style={styles.reservationInfo}>
                <Text style={styles.guestName}>Kia Sportage</Text>
                <Text style={styles.datesText}>May 04 - May 07</Text>
                                <Text style={styles.hostingText}>View Renter Profile</Text>
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

          <View style={styles.reservationItem}>
            <View style={styles.reservationDetails}>
              <Image source={require('../assets/car.png')} style={styles.profileImage} />
              <View style={styles.reservationInfo}>
                <Text style={styles.guestName}>Kia Sportage</Text>
                <Text style={styles.datesText}>May 08 - May 10</Text>
                                <Text style={styles.hostingText}>View Renter Profile</Text>
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

          <View style={styles.reservationItem}>
            <View style={styles.reservationDetails}>
              <Image source={require('../assets/car.png')} style={styles.profileImage} />
              <View style={styles.reservationInfo}>
                <Text style={styles.guestName}>Kia Sportage</Text>
                <Text style={styles.datesText}>May 08 - May 10</Text>
                                <Text style={styles.hostingText}>View Renter Profile</Text>
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

          <View style={styles.reservationItem}>
            <View style={styles.reservationDetails}>
              <Image source={require('../assets/car.png')} style={styles.profileImage} />
              <View style={styles.reservationInfo}>
                <Text style={styles.guestName}>Kia Sportage</Text>
                <Text style={styles.datesText}>May 08 - May 10</Text>
                                <Text style={styles.hostingText}>View Renter Profile</Text>
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

          <View style={styles.reservationItem}>
            <View style={styles.reservationDetails}>
              <Image source={require('../assets/car.png')} style={styles.profileImage} />
              <View style={styles.reservationInfo}>
                <Text style={styles.guestName}>Kia Sportage</Text>
                <Text style={styles.datesText}>May 08 - May 10</Text>
                                <Text style={styles.hostingText}>View Renter Profile</Text>
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
        </ScrollView>
      </View>

      <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomePageScreen')}>
      <Octicons name="home" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Cars')}>
          <Ionicons name="car-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AllBooking')}>
          <Ionicons name="calendar-outline" size={24} color="#4460EF" />
          <Text style={styles.navButtonTextActive}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Earnings')}>
        <Fontisto name="dollar" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AccountProfile')}>
          <Ionicons name="person-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Account</Text>
        </TouchableOpacity>
      </View>

      {modalVisible && (
        <Modal transparent visible={modalVisible} animationType="none">
          <TouchableOpacity style={styles.modalOverlay} onPress={closeModal}>
            <Animated.View style={[styles.bookingCard, { transform: [{ translateY: slideAnim }] }]}>
              <Image source={require('../assets/house.png')} style={styles.bookingImage} />
              <Text style={styles.bookingTitle}>New Double-Story House with Swimming Pool</Text>
              <Text style={styles.bookingDates}>May 15, 2024 - May 28, 2024</Text>
              <Text style={styles.bookingType}>Full Place</Text>

              <View style={{flexDirection: 'row', width: 330, alignItems: 'center', marginBottom: 20}}>
                <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
              </View>

              <View style={styles.hostInfo}>
                <Image source={require('../assets/profile3.png')} style={styles.hostImage} />
                <View style={styles.hostDetails}>
                  <Text style={styles.hostName}>Femi Vanzekin</Text>
                  <Text style={styles.hostRating}>
                    <AntDesign name="star" size={14} color="#FFC107" /> 4.6 <Text style={styles.verifiedText}>Verified</Text>
                  </Text>
                </View>
                <TouchableOpacity style={styles.contactButton}>
                <MaterialIcons name="perm-phone-msg" color="#000" size={30} />
              </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row', width: 330, alignItems: 'center', marginBottom: 20}}>
                <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
              </View>

              <View style={styles.cardButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.approveButton} onPress={() => alert('Approved')}>
                  <Text style={styles.approveButtonText}>Approve</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableOpacity>
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginVertical: 50,
  },
  reservationsContainer: {
    flex: 1,
  },
  reservationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
  activeTab: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#4460EF',
    borderRadius: 10,
    marginRight: 5,
    justifyContent: "center",
  },
  inactiveTab: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginRight: 5,
    justifyContent: "center",
  },
  activeTabText: {
    color: '#fff',
    fontSize: 14,
  },
  inactiveTabText: {
    color: '#333',
    fontSize: 12,
  },
  reservationsList: {
    flex: 1,
    marginBottom: 50
  },
  contactButton:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 40,
    borderColor: '#e0e0e0',
    borderWidth: 1,
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
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
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
    borderRadius: 8,
    borderColor: '#e0e0e0',
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 43,
    borderRadius: 8,
    borderColor: '#e0e0e0',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '113%',
  },
  navButton: {
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    top: 10
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  navTextActive: {
    fontSize: 12,
    color: '#4460EF',
  },
   // New styles for the notification layout
   notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECEFFD',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  notificationIcon: {
    marginRight: 10,
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
  closeButton: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: -50,
  },
  responseButton:{
    marginTop: 10,
  },
  responseButtonText:{
    color: colors.primary,
    fontWeight: "600",
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
    paddingBottom: 30,
    alignItems: 'center',
  },
  bookingImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: "flex-start"
  },
  bookingDates: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  bookingType: {
    fontSize: 16,
    color: '#545454',
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  hostInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  hostImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    fontSize: 14,
    color: '#545454',
  },
  verifiedText: {
    fontSize: 14,
    color: '#04AA6D',
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#000',
  },
  approveButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  approveButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  hostingText: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  navButtonText:{
    color: '#C5C5C5',
  },
  navButtonTextActive:{
    color: '#4460EF',
  },
  navButtonActive:{
    color: '#4460EF',
  },
});

export default HomePageScreen;
