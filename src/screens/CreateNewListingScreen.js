import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

const CreateNewListingScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Listing');
  const [listingDetails, setListingDetails] = useState({
    title: '',
    rooms: '',
    propertyDetails: '',
    description: '',
    location: '',
    checkInInstructions: '',
    preBookingMessage: '',
    houseRules: '',
  });
  const [photos, setPhotos] = useState([]);

  const pickImage = async () => {
    if (photos.length >= 10) {
      Alert.alert('Limit Reached', 'You can only upload up to 10 images.');
      return;
    }

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedUri = result.assets[0].uri;
      setPhotos([...photos, selectedUri]);
    }
  };

  const removeImage = (uri) => {
    setPhotos(photos.filter(photo => photo !== uri));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create New Listing</Text>
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

      <ScrollView style={styles.tabContainer} showsVerticalScrollIndicator={false}>
        {activeTab === 'Listing' ? (
          <CreateListingTab listingDetails={listingDetails} setListingDetails={setListingDetails} photos={photos} removeImage={removeImage} />
        ) : (
          <CreateBookingSettingsTab listingDetails={listingDetails} setListingDetails={setListingDetails} />
        )}
      </ScrollView>

      <TouchableOpacity style={styles.uploadButton1} onPress={pickImage}>
        <Text style={styles.uploadButtonText1}>Select Images</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton} onPress={() => navigation.navigate('AllListings')}>
        <Text style={styles.uploadButtonText}>Upload Listing</Text>
      </TouchableOpacity>
    </View>
  );
};

const CreateListingTab = ({ listingDetails, setListingDetails, photos, removeImage }) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.title}
          onChangeText={(text) => setListingDetails({ ...listingDetails, title: text })}
          placeholder="Enter your listing title"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rooms</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.rooms}
          onChangeText={(text) => setListingDetails({ ...listingDetails, rooms: text })}
          placeholder="Enter room details"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Property Details</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.propertyDetails}
          onChangeText={(text) => setListingDetails({ ...listingDetails, propertyDetails: text })}
          placeholder="Enter property details"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.description}
          onChangeText={(text) => setListingDetails({ ...listingDetails, description: text })}
          placeholder="Enter description"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.location}
          onChangeText={(text) => setListingDetails({ ...listingDetails, location: text })}
          placeholder="Enter location"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Check-in Instructions</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.checkInInstructions}
          onChangeText={(text) => setListingDetails({ ...listingDetails, checkInInstructions: text })}
          placeholder="Enter check-in instructions"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pre-booking Message</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.preBookingMessage}
          onChangeText={(text) => setListingDetails({ ...listingDetails, preBookingMessage: text })}
          placeholder="Enter pre-booking message"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>House Rules</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.houseRules}
          onChangeText={(text) => setListingDetails({ ...listingDetails, houseRules: text })}
          placeholder="Enter house rules"
        />
      </View>

      <View style={styles.imagesContainer}>
        {photos.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.image} />
            <TouchableOpacity style={styles.removeButton} onPress={() => removeImage(uri)}>
              <Ionicons name="close-circle" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const CreateBookingSettingsTab = ({ listingDetails, setListingDetails }) => {
  return (
    <View style={styles.inputContainer1}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pricing</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.pricing}
          onChangeText={(text) => setListingDetails({ ...listingDetails, pricing: text })}
          placeholder="Enter pricing details"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Additional Charges</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.additionalCharges}
          onChangeText={(text) => setListingDetails({ ...listingDetails, additionalCharges: text })}
          placeholder="Enter additional charges"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Currency</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.currency}
          onChangeText={(text) => setListingDetails({ ...listingDetails, currency: text })}
          placeholder="Enter currency"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Guest Booking</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.guestBooking}
          onChangeText={(text) => setListingDetails({ ...listingDetails, guestBooking: text })}
          placeholder="Enter guest booking details"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Guest Requirements</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.guestRequirements}
          onChangeText={(text) => setListingDetails({ ...listingDetails, guestRequirements: text })}
          placeholder="Enter guest requirements"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>House Rules</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.houseRules}
          onChangeText={(text) => setListingDetails({ ...listingDetails, houseRules: text })}
          placeholder="Enter house rules"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cancellation Policy</Text>
        <TextInput
          style={styles.input}
          value={listingDetails.cancellationPolicy}
          onChangeText={(text) => setListingDetails({ ...listingDetails, cancellationPolicy: text })}
          placeholder="Enter cancellation policy"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    paddingHorizontal: 20,
    marginVertical: 40,
    gap: 40,
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 10,
    left: -3,
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  headerText: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  tabRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonText: {
    fontSize: 16,
    color: colors.secondary,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  activeTabButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  tabContainer: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -5,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    position: 'relative',
    margin: 5,
  },
  image: {
    width: width / 5 - 2,
    height: width / 4 - 10,
    borderRadius: 5,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    padding: 2,
  },
  uploadButton: {
    backgroundColor: "#4460EF",
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 7,
  },
  uploadButton1: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#4460EF"
  },
  uploadButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  uploadButtonText1: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer1:{
    marginBottom: 20
  }
});

export default CreateNewListingScreen;
