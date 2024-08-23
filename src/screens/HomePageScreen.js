import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import CustomStatistics from '../../components/CustomStatistics';
import { Ionicons, AntDesign, Fontisto, Octicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons style={styles.icon} name="notifications-outline" size={24} color="black" />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Dashboard Carousel */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dashboard}>
          <View style={styles.dashboardCard}>
            <View>
              <Text style={styles.cardTitle}>Total Cars</Text>
              <Text style={styles.cardValue}>3</Text>
            </View>
            <Ionicons style={styles.carIcon} name='car-sport-outline' size={24} color="#FFA500" />
          </View>
          <View style={styles.dashboardCard}>
            <View>
              <Text style={styles.cardTitle}>Total Cars</Text>
              <Text style={styles.cardValue}>3</Text>
            </View>
            <Ionicons style={styles.carIcon} name='car-sport-outline' size={24} color="#FFA500" />
          </View>
          <View style={styles.dashboardCard}>
            <View>
              <Text style={styles.cardTitle}>Total Cars</Text>
              <Text style={styles.cardValue}>3</Text>
            </View>
            <Ionicons style={styles.carIcon} name='car-sport-outline' size={24} color="#FFA500" />
          </View>
          <View style={styles.dashboardCard}>
            <View>
              <Text style={styles.cardTitle}>Total Cars</Text>
              <Text style={styles.cardValue}>3</Text>
            </View>
            <Ionicons style={styles.carIcon} name='car-sport-outline' size={24} color="#FFA500" />
          </View>
        </ScrollView>

        <View style={styles.divider} />

        {/* Recent Activity */}
        <View style={styles.activity}>
          <View style={styles.activityDetails}>
            <Text style={styles.activityTitle}>Recent Activity</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.reservationItem}>
            <View style={styles.reservationDetails}>
              <View style={styles.carImageContainer}>
                <Image source={require('../assets/sportage.png')} style={styles.profileImage} />
              </View>
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
        </View>

        <View style={styles.divider} />

        {/* Quick Actions */}
        <Text style={styles.actionTitle}>Quick Actions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickActionsCarousel}>
          <TouchableOpacity style={styles.quickActionButton} onPress={() => navigation.navigate('AddCar')}>
            <Ionicons name="car-outline" size={16} color="#4460EF" />
            <Text style={styles.quickActionButtonText}>Add New Car</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="construct-outline" size={16} color="#4460EF" />
            <Text style={styles.quickActionButtonText}>Vehicle Inspection</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Ionicons name="help-circle-outline" size={16} color="#4460EF" />
            <Text style={styles.quickActionButtonText}>Help & Feedback</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.divider} />

        {/* Custom Statistics */}
        <CustomStatistics />
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    marginVertical: 30,
  },
  scrollContent: {
    paddingBottom: 80, // Enough space to scroll content above the fixed bottom navigation bar
    marginTop: -10,
  },
  dashboard: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: -10
  },
  dashboardCard: {
    width: 180,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: colors.gray,
    marginLeft: 20,
    marginRight: -7,
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 14,
    color: '#555',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  activity: {
    marginBottom: -5,
    paddingHorizontal: 20,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activityCard: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.gray,
  },
  carImage: {
    width: 50,
    height: 50,
  },
  carDetails: {
    flex: 1,
    marginLeft: -10,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carDates: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  carLink: {
    fontSize: 14,
    color: '#4B9CD3',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  carActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginLeft: -70,
  },
  actionButtonText: {
    marginLeft: 5,
  },
  quickActionsCarousel: {
    flexDirection: 'row',
    marginBottom: 7,
    paddingHorizontal: 5,
    marginLeft: 10,
  },
  quickActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginRight: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    marginLeft: 5,
  },
  quickActionButtonText: {
    marginLeft: 5,
    color: colors.primary,
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
    width: '100%',
  },
  navButton: {
    alignItems: 'center',
  },
  icon: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  seeAllText: {
    color: colors.primary,
    fontWeight: '500',
  },
  carContainer: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 100,
    marginRight: 20,
    borderColor: colors.gray,
    marginLeft: -10,
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
  contactButton: {
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
    textDecorationLine: 'underline',
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
    paddingHorizontal: 25,
    borderRadius: 7,
    borderColor: '#e0e0e0',
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 7,
    borderColor: '#e0e0e0',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
  },
  carImageContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 5,
    marginRight: 15,
    borderRadius: 50,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  divider: {
    flexDirection: 'row',
    width: 354,
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 20,
    height: 8,
    backgroundColor: colors.gray,
  },
  carIcon:{
    backgroundColor: "#FFA5001A",
    padding: 5,
    borderRadius: 20,
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

export default HomePage;
