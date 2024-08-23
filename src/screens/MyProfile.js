import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialIcons, FontAwesome5, Fontisto, FontAwesome } from '@expo/vector-icons';
import { colors } from '../utils/colors';

// Import images from assets folder
import House1 from '../assets/house.png';
import House2 from '../assets/profile1.png';
import House3 from '../assets/profile3.png';
import DefaultProfileImage from '../assets/profile3.png';  // Import your default profile image

const { width } = Dimensions.get('window');

const MyProfile = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [image, setImage] = useState(DefaultProfileImage);  // Use the imported asset image as default
  const [loading, setLoading] = useState(false); // For showing loading indicator during image upload

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prevIndex => (prevIndex === listings.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleReadMore = () => {
    setShowFullDescription(!showFullDescription);
  };

  const pickImage = async () => {
    setLoading(true); // Show loading indicator while picking image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage({ uri: result.uri });
    }
    setLoading(false); // Hide loading indicator after image selection
  };

  const listings = [
    { id: '1', title: 'New Double-Story House with Swimming Pool', image: House1 },
    { id: '2', title: 'Luxury Apartment in Downtown with Swimming', image: House2 },
    { id: '3', title: 'Cozy Cottage in the Countryside with Swimming', image: House3 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.listingItem}>
      <Image source={item.image} style={styles.listingImage} />
      <TouchableOpacity onPress={() => {}}>
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
      <View style={styles.fixedHeader}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Your Profile</Text>
          <TouchableOpacity style={styles.EditButton} onPress={() => navigation.navigate('ProfileEdit')}>
            <MaterialIcons name={"mode-edit"} color={colors.secondary} size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            {loading ? ( // Show loading indicator while uploading image
              <ActivityIndicator size="large" color={colors.primary} />
            ) : (
              <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.profileImage} />
            )}
            <View style={styles.iconContainer}>
              <FontAwesome name="camera" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
          <Text style={styles.profileName}>Femi Vanzekin</Text>
          <Text style={styles.profileEmail}>Femivanzekin@gmail.com</Text>
        </View>

        <View style={styles.dividers} />

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={styles.ratings}>
              <Ionicons name={"star"} color={"#f4c542"} size={24} />
              <Text style={styles.statText}>4.6</Text>
            </View>
            <Text style={styles.statLabel}>Ratings</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name={"verified-user"} color={"#4caf50"} size={24} />
            <Text style={styles.statText}>Verified</Text>
          </View>
          <View style={styles.statItem}>
            <FontAwesome5 name={"award"} color={"#6200ea"} size={24} />
            <Text style={styles.statText}>Host</Text>
          </View>
        </View>
        <View style={styles.dividers} />
      </View>

      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoItem}><Fontisto name={"world-o"} size={24} color={'black'} />  Knows <Text style={styles.middleText}>English</Text> and Spanish</Text>
          <Text style={styles.infoItem}><Ionicons name={"location"} size={24} color={'black'} />  From <Text style={styles.middleText}>California, USA</Text></Text>
          <Text style={styles.infoItem}><Ionicons name={"briefcase"} size={24} color={'black'} />  Works as an <Text style={styles.middleText}>Entrepreneur</Text></Text>
        </View>
        <View style={styles.dividers} />

        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.aboutText}>
            {showFullDescription ? (
              <>
                I’m a 36 years old successful IT consultant by profession and passionate about traveling to new places.
                I love meeting people from different parts of the world, and I look forward to connecting with...
              </>
            ) : (
              'I’m a 36 years old successful IT consultant by profession and passionate about traveling to new places. I love meeting people from different parts of the world, and I look forward to connecting with...'
            )}
            <Text style={styles.readMore} onPress={handleReadMore}>
              {showFullDescription ? ' show less' : ' read more'}
            </Text>
          </Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.basicInfoContainer}>
          <Text style={styles.sectionTitle}>Basic Info</Text>
          <TouchableOpacity style={styles.basicInfoItem}>
            <View>
              <Text style={styles.basicInfoLabel}>Name</Text>
              <Text style={styles.basicInfoText}>Femi Vanzekin</Text>
            </View>
            <Ionicons name="chevron-forward" size={20}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.basicInfoItem}>
            <View>
              <Text style={styles.basicInfoLabel}>Phone number</Text>
              <Text style={styles.basicInfoText}>+1 987 364 1245</Text>
            </View>
            <Ionicons name="chevron-forward" size={20}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.basicInfoItems}>
            <View>
              <Text style={styles.basicInfoLabel}>Email</Text>
              <Text style={styles.basicInfoText}>Femivanzekin@gmail.com</Text>
            </View>
            <Ionicons name="chevron-forward" size={20}/>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {/* Listing */}
        <View style={styles.listingContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Listing</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AllListings')}>
              <Text style={styles.seeAll}>See all</Text>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  fixedHeader: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1,
  },
  scrollViewContent: {
    marginTop: 360,
    backgroundColor: colors.white
  },
  header: {
    flexDirection: 'row',
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  BackButton: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.gray,
    borderWidth: 1,
  },
  EditButton: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.gray,
    borderWidth: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
    borderRadius: 12,
    padding: 5,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 8,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statText: {
    fontSize: 14,
    fontWeight: '500',
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginVertical: 105,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    marginVertical: 4,
    marginBottom: 10,
  },
  aboutContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 16,
    color: '#666',
  },
  readMore: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  basicInfoContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  basicInfoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 10,
  },
  basicInfoItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  basicInfoLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  basicInfoText: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  listingContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  seeAll: {
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 8,
  },
  listingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    width: width - 40,
    marginRight: 20,
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
    gap: 10,
  },
  listingItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    width: 190,
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
    backgroundColor: colors.primary,
    marginHorizontal: 2,
  },
  ratings: {
    flexDirection: 'row',
    marginLeft: -8,
  },
  middleText: {
    fontWeight: '700',
  },
  divider: {
    height: 9,
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
  },
  dividers: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MyProfile;
