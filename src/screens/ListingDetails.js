import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const { width } = Dimensions.get('window');

const ListingDetailsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Listing');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Listing Details</Text>
        {activeTab === 'Booking settings' && (
          <Ionicons name="eye" size={25} color={colors.secondary} style={styles.eyeIcon} />
        )}
      </View>

      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Listing' && styles.activeTabButton]}
          onPress={() => setActiveTab('Listing')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Listing' && styles.activeTabButtonText]}>Listing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Booking settings' && styles.activeTabButton]}
          onPress={() => setActiveTab('Booking settings')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Booking settings' && styles.activeTabButtonText]}>Booking settings</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Listing' ? <ListingTab navigation={navigation} /> : <BookingSettingsTab navigation={navigation} />}
    </View>
  );
};

const ListingTab = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    { image: require('../assets/house.png'), index: 0 },
    { image: require('../assets/house.png'), index: 1 },
    { image: require('../assets/house.png'), index: 2 },
  ];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setActiveIndex(index);
  };

  return (
    <ScrollView style={styles.tabContainer} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('ListingTitle')}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Title</Text>
          <View style={styles.sectionContentRow}>
            <Text style={styles.sectionContent}>New Double-Story House with Swimming Pool</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ListingPhotoScreen')}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <View style={styles.sectionContentRow}>
            <Text style={styles.sectionContent}>21 photos</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carouselContainer}
        onScroll={handleScroll}
      >
        {carouselItems.map((item) => (
          <View key={item.index} style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} />
            {item.index === activeIndex && (
              <Text style={styles.coverPhotoLabel}>COVER PHOTO</Text>
            )}
          </View>
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20, marginTop: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Rooms')}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rooms</Text>
          <View style={styles.sectionContentRow}>
            <Text style={styles.sectionContent}>3 bedrooms, 4 beds, 2 bethrooms, 7 additional areas</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20, marginTop: 5 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('PropertyGuest')}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Property & guests</Text>
          <View style={styles.sectionContentRow}>
            <Text style={styles.sectionContent}>Entire place, 9 guests</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Description')}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <View style={styles.sectionContentRow}>
            <Text style={styles.sectionContent}>Add description</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Accessibility')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Accessibility</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('AmenitiesSetting')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Amenities</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ListingLocation')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Location</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('CheckInstruction')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Check-in instruction</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('PreBooking')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Pre-booking message</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('GuestRequirements')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Guest requirements</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('HouseRules')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>House rules</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const BookingSettingsTab = ({ navigation }) => {
  return (
    <ScrollView style={styles.tabContainer} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.navigate('Pricing')}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pricing</Text>
          <View style={styles.sectionContentRow}>
            <Text style={styles.sectionContent}>$300 * 3 nights * 4 guests</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Charges')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Aditional Charges</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Currency')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Currency</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('GuestBooking')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Guest Booking</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Requirement')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Guest Requirements</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Listing')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>House Rules</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Cancellation')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Cancellation Policy</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('AvailabilitySettings')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Availability Settings</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('TripLenght')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Trip Lenght</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('CheckInCheckOut')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Chech-in & Check-out</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Regulations')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Regulations</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14, marginBottom: 20 }}>
        <View style={{ flex: 1, width: 20, height: 1, backgroundColor: colors.gray }} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Status')}>
        <View style={styles.section}>
          <View style={styles.sectionContentRow}>
          <Text style={styles.sectionTitle}>Status</Text>
            <Ionicons name="chevron-forward" size={16} color="#666" style={styles.sectionIcon} />
          </View>
        </View>
      </TouchableOpacity>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
flex: 1,
padding: 20,
backgroundColor: '#fff',
},
BackButton: {
backgroundColor: colors.white,
marginTop: 10,
left: 5,
height: 50,
width: 50,
borderRadius: 25,
alignItems: "center",
justifyContent: "center",
borderColor: colors.gray,
borderWidth: 1
},
headerText: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 20,
marginLeft: 50,
marginTop: 20
},
eyeIcon: {
    position: 'absolute',
    right: 20,
    backgroundColor: colors.white,
    padding: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 30,
  },
tabRow: {
flexDirection: 'row',
marginBottom: 20,
justifyContent: 'flex-start',
},
tabButton: {
paddingVertical: 10,
paddingHorizontal: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
activeTabButton: {
borderBottomColor: '#4460EF',
},
tabButtonText: {
fontSize: 16,
fontWeight: 'bold',
color: '#666',
},
activeTabButtonText: {
color: '#4460EF',
},
tabContainer: {
flex: 1,
},
tabContent: {
fontSize: 16,
padding: 20,
},
section: {
marginBottom: 20,
},
sectionTitle: {
fontSize: 16,
fontWeight: '500',
marginBottom: 5,
},
sectionContentRow: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
sectionContent: {
fontSize: 14,
color: '#666',
flex: 1,
},
sectionIcon: {
marginLeft: 10,
},
carouselContainer: {
flexDirection: 'row',
paddingHorizontal: -13,
},
carouselItem: {
width: width * 0.4,
marginHorizontal: (width * 0.3) / 4,
justifyContent: 'center',
alignItems: 'center',
marginLeft: 3
},
carouselImage: {
width: '100%',
height: 150,
borderRadius: 10,
},
coverPhotoLabel: {
position: 'absolute',
top: 10,
left: -6,
backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 10,
fontWeight: 'bold',
color: '#333',
zIndex: 1, // Ensure it's above the image
fontSize: 10
},
header: {
flexDirection: "row",
marginVertical: 20,
alignItems: "center",
textAlign: "center",
},
});

export default ListingDetailsScreen;
