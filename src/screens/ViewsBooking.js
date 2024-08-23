import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utils/colors';

const ViewsBookingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      
        <View style={styles.HeaderContainer}>
            <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" color="#000" size={25} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.title}>Views & Bookings</Text>
            </View>
        </View>

        <View style={styles.statContainer}>
          <Text style={styles.statTitle}>Past 30 days</Text>
          <Text style={styles.statValue}>790</Text>
          <Text style={styles.statLabel}>Listing views</Text>
        </View>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.statContainer}>
          <Text style={styles.statValue}>10</Text>
          <Text style={styles.statLabel}>New bookings</Text>
        </View>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.statContainer}>
          <Text style={styles.statValue}>2.15</Text>
          <Text style={styles.statLabel}>Booking rate</Text>
          <Text style={styles.statDescription}>It's a percentage of guests who book after viewing your listing.</Text>
        </View>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 15,
    left: -5,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
  },
  header: {
    marginBottom: 10,
  },
  HeaderContainer:{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 35
  },
  statContainer: {
    marginBottom: 20,
  },
  statTitle: {
    fontSize: 16,
    color: '#555',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 16,
    color: '#555',
  },
  statDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default ViewsBookingScreen;
