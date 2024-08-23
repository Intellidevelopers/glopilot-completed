import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons, Fontisto, FontAwesome6, AntDesign, SimpleLineIcons, Entypo } from '@expo/vector-icons';
import { colors } from '../utils/colors'; // Assuming you have a colors file

// Import images from assets folder
import House1 from '../assets/house.png';
import House2 from '../assets/profile1.png';
import House3 from '../assets/profile3.png';

const { width } = Dimensions.get('window');

const listings = [
  { id: '1', title: 'New Double-Story House with Swimming Pool', image: House1 },
  { id: '2', title: 'Luxury Apartment in Downtown with Swimming', image: House2 },
  { id: '3', title: 'Cozy Cottage in the Countryside with Swimming', image: House3 },
];

const AccountScreen = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prevIndex => (prevIndex === listings.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
<View style={styles.listingItem}>
<Image source={item.image} style={styles.listingImage} />
<TouchableOpacity
      onPress={() => {
        // Handle onPress for individual items if needed
      }}
    >
      
      <View style={styles.listingDetails}>
        <Text style={styles.listingItemTitle}>{item.title}</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#000" />
      </View>
    </TouchableOpacity>
</View>
  );

  const Pagination = () => (
    <View style={styles.paginationContainer}>
      {listings.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            { opacity: index === activeSlide ? 1 : 0.3 },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Account</Text>
      <View style={styles.listingsContainer}>
        <View style={styles.listingHeader}>
          <Text style={styles.listingTitle}>Listing</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllListings')}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
            setActiveSlide(slideIndex);
          }}
          style={{ width, flexGrow: 0 }}
        >
          {listings.map((item, index) => (
            <View key={item.id} style={{ width }}>
              {renderItem({ item, index })}
            </View>
          ))}
        </ScrollView>
        <Pagination />
      </View>
      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 7, backgroundColor: colors.gray}} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
     <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
     <View style={styles.menuItem}>
        <FontAwesome name="user-circle-o" size={24} color="black" />
        <Text style={styles.menuItemText}>Your Profile</Text>
        <View style={styles.icons}>
            <SimpleLineIcons name="arrow-right" size={16} color="black" />
        </View>
      </View>
     </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

     <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
     <View style={styles.menuItem}>
        <FontAwesome6 name="wallet" size={24} color="black" />
        <Text style={styles.menuItemText}>Wallet</Text>
        <View style={styles.icons}>
            <SimpleLineIcons name="arrow-right" size={16} color="black" />
        </View>
      </View>
     </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

     <TouchableOpacity onPress={() => navigation.navigate('CreateListing')}>
     <View style={styles.menuItem}>
        <MaterialIcons name="create-new-folder" size={24} color="black" />
        <Text style={styles.menuItemText}>Create a new listing</Text>
        <View style={styles.icons}>
            <SimpleLineIcons name="arrow-right" size={16} color="black" />
        </View>
      </View>
     </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('NotificationSettings')}>
      <View style={styles.menuItem}>
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={styles.menuItemText}>Notification Settings</Text>
        <View style={styles.icons}>
            <SimpleLineIcons name="arrow-right" size={16} color="black" />
        </View>
      </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity  onPress={() => navigation.navigate('Privacy')}>
      <View style={styles.menuItem}>
        <Fontisto name="locked" size={24} color="black" />
        <Text style={styles.menuItemText}>Privacy Center</Text>
        <View style={styles.icons}>
            <SimpleLineIcons name="arrow-right" size={16} color="black" />
        </View>
      </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Security')}>
      <View style={styles.menuItem}>
        <MaterialIcons name="verified-user" size={24} color="black" />
        <Text style={styles.menuItemText}>Security</Text>
        <View style={styles.icons}>
            <SimpleLineIcons name="arrow-right" size={16} color="black" />
        </View>
      </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('HelpCenter')}>
      <View style={styles.menuItem}>
              <Entypo name="help-with-circle" size={24} color="black" />
              <Text style={styles.menuItemText}>Help Center</Text>
              <View style={styles.icons}>
                  <SimpleLineIcons name="arrow-right" size={16} color="black" />
              </View>
            </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 350, alignItems: 'center', marginLeft: -14}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity>
      <View style={[styles.menuItem]}>
        <AntDesign name="logout" size={24} color="red" />
        <Text style={[styles.menuItemText, styles.logoutText]}>Logout</Text>
      </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  listingsContainer: {
    marginBottom: 20,
  },
  listingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -15
  },
  listingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#4460EF',
  },
  listingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    width: width - 40, // Adjusted to fit screen width with padding
    marginRight: 20, // Adjusted spacing between items
    borderColor: colors.gray,
  },
  listingImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  listingDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20
  },
  listingItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 190
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary, // Using colors.primary from your color utility
    marginHorizontal: 2,
  },
  customDivider: {
    height: 1,
    backgroundColor: colors.gray, // Customize divider color
    marginVertical: 10, // Adjust vertical spacing
    marginLeft: -20, // Adjust margin to align with listings
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Added to align items at the ends
    paddingVertical: 20,
  },
  menuItemText: {
    marginLeft: 20,
    fontSize: 16,
    flex: 1, // Added to allow text to wrap properly
    fontWeight: "600"
  },
  logoutText: {
    color: 'red',
  },
  icons: {
    alignSelf: 'flex-end', // Align icons to the end of their container
    marginRight: 20, // Adjust margin for proper spacing
  },

  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  navTextActive: {
    fontSize: 12,
    color: '#4460EF',
  },
});


export default AccountScreen;
