import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons';
import CustomBarchart from '../../components/CustomBarchart';
import { colors } from '../utils/colors';
import { fonts } from './../utils/fonts';


const EarningsScreen = ({ navigation }) => {
  const chartData = [
    { label: 'Mon', value: 150, color: colors.primary },
    { label: 'Tue', value: 50, color: colors.primary },
    { label: 'Wed', value: 100, color: colors.primary },
    { label: 'Thu', value: 200, color: colors.primary },
    { label: 'Fri', value: 80, color: '#C7C7CC' },
    { label: 'Sat', value: 60, color: '#C7C7CC' },
    { label: 'Sun', value: 40, color: '#C7C7CC' },
  ];

  return (
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
     <Text style={styles.title}>Earnings</Text>
      <Text style={styles.dateRange}>Jan 07 - May 12</Text>
      <Text style={styles.totalEarnings}>$547.50</Text>
      <CustomBarchart data={chartData} />
      <View style={styles.summaryContainer}>
        <View style={styles.flexItem}>
        <Text>Today:</Text>
        <Text>$150</Text>
        </View>
        <View style={styles.flexItem}>
        <Text>This Week:</Text>
        <Text>$330</Text>
        </View>
        <View style={styles.flexItem}>
        <Text>This Month: </Text>
        <Text>$798</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.detailsButton}>
        <Text>See details</Text>
      </TouchableOpacity>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceSummary}>Balance: $547.50</Text>
        <Text>Payment scheduled for May 26</Text>
      </View>
      <TouchableOpacity style={styles.cashOutButton}>
        <Text style={styles.cashOutText}>Cash out</Text>
      </TouchableOpacity>
     </ScrollView>

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
          <Ionicons name="calendar-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Earnings')}>
          <Fontisto name="dollar" size={24} color="#4460EF" />
          <Text style={styles.navButtonTextActive}>Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AccountProfile')}>
          <Ionicons name="person-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50
  },
  dateRange: {
    marginTop: 5,
    color: 'gray',
  },
  totalEarnings: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  summaryContainer: {
    marginVertical: 10,
  },
  detailsButton: {
    backgroundColor: '#F0F0F0',
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  balanceContainer: {
    marginVertical: 10,
  },
  cashOutButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: 130
  },
  cashOutText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16
  },
  flexItem:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  balanceSummary:{
    fontWeight: "700"
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
    alignSelf: "center"
  },
  navButton: {
    alignItems: 'center',
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

export default EarningsScreen;
