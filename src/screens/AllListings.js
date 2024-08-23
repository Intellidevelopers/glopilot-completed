import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const AllListingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
      
      <Text style={styles.headerText}>Listing</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" color="#666" size={20} />
          <TextInput style={styles.searchInput} placeholder="Search..." />
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Filter')}>
          <Ionicons name="filter-outline" color="#000" size={24} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20}}>
        <View style={{flex: 1, width: 20, height: 7, backgroundColor: colors.gray}} />
      </View>
      
      <Text style={styles.listingsHeader}>Listings</Text>
      
      <ScrollView style={styles.listingsContainer} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('ListingDetails')}>
        <View style={styles.listingItem}>
          <Image source={require('../assets/house.png')} style={styles.listingImage} />
          <View style={styles.listingInfo}>
            <Text style={styles.listingTitle}>New Double-Story House with Swimming Pool</Text>
          </View>
          <TouchableOpacity style={styles.listingButton}>
            <Ionicons name="chevron-forward" color="#000" size={20} />
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ListingDetails')}>
        <View style={styles.listingItem}>
          <Image source={require('../assets/house.png')} style={styles.listingImage} />
          <View style={styles.listingInfo}>
            <Text style={styles.listingTitle}>New Double-Story House with Swimming Pool</Text>
          </View>
          <TouchableOpacity style={styles.listingButton}>
            <Ionicons name="chevron-forward" color="#000" size={20} />
          </TouchableOpacity>
        </View>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('ListingDetails')}>
        <View style={styles.listingItem}>
          <Image source={require('../assets/house.png')} style={styles.listingImage} />
          <View style={styles.listingInfo}>
            <Text style={styles.listingTitle}>New Double-Story House with Swimming Pool</Text>
          </View>
          <TouchableOpacity style={styles.listingButton}>
            <Ionicons name="chevron-forward" color="#000" size={20} />
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('ListingDetails')}>
        <View style={styles.listingItem}>
          <Image source={require('../assets/house.png')} style={styles.listingImage} />
          <View style={styles.listingInfo}>
            <Text style={styles.listingTitle}>New Double-Story House with Swimming Pool</Text>
          </View>
          <TouchableOpacity style={styles.listingButton}>
            <Ionicons name="chevron-forward" color="#000" size={20} />
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('ListingDetails')}>
        <View style={styles.listingItem}>
          <Image source={require('../assets/house.png')} style={styles.listingImage} />
          <View style={styles.listingInfo}>
            <Text style={styles.listingTitle}>New Double-Story House with Swimming Pool</Text>
          </View>
          <TouchableOpacity style={styles.listingButton}>
            <Ionicons name="chevron-forward" color="#000" size={20} />
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('ListingDetails')}>
           <View style={styles.listingItem}>
          <Image source={require('../assets/house.png')} style={styles.listingImage} />
          <View style={styles.listingInfo}>
            <Text style={styles.listingTitle}>New Double-Story House with Swimming Pool</Text>
          </View>
          <TouchableOpacity style={styles.listingButton}>
            <Ionicons name="chevron-forward" color="#000" size={20} />
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
      </ScrollView>
      
      <TouchableOpacity style={styles.createListingButton} onPress={() => navigation.navigate('CreateListing')}>
        <Ionicons name="add" color="#fff" size={24} />
        <Text style={styles.createListingText}>Create a new listing</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
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
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 25
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -20
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: colors.gray,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 10,
  },
  listingsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listingsContainer: {
    flex: 1,
  },
  listingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  listingImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  listingInfo: {
    flex: 1,
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  listingButton: {
    padding: 10,
  },
  createListingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  createListingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  header:{
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    textAlign: "center",
    gap: 73,
    marginBottom: 30
  }
});

export default AllListingsScreen;
