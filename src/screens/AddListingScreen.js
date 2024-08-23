import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import defaultCoverImage from '../assets/bg-image.jpg';

const AddListingPhotoScreen = ({ navigation, route }) => {
  const { coverPhoto: initialCoverPhoto } = route.params || {};
  const [coverPhoto, setCoverPhoto] = useState(initialCoverPhoto ? { uri: initialCoverPhoto } : defaultCoverImage);
  const [caption, setCaption] = useState('');
  const [photos, setPhotos] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    console.log('Initial cover photo URI:', initialCoverPhoto);
    if (initialCoverPhoto) {
      setCoverPhoto({ uri: initialCoverPhoto });
    }
  }, [initialCoverPhoto]);

  const pickCoverImage = async () => {
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
      console.log('Selected cover image URI:', selectedUri);
      setCoverPhoto({ uri: selectedUri });
    } else {
      console.log('No cover image selected or result was canceled.');
    }
  };

  const pickImage = async () => {
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
      console.log('Selected image URI:', selectedUri);
      setPhotos([...photos, selectedUri]);
    } else {
      console.log('No image selected or result was canceled.');
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleNext = () => {
    if (!coverPhoto.uri || coverPhoto.uri === defaultCoverImage.uri) {
      Alert.alert('No Cover Photo', 'Please select a cover photo before proceeding.');
      return;
    }

    if (!caption) {
      Alert.alert('No Caption', 'Please enter a caption before proceeding.');
      return;
    }

    navigation.navigate('AboutScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
        <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
      </TouchableOpacity>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>Add photos to your listing</Text>
      <Text style={styles.subtitle}>
        Photos help guests visualize their stay at your place. Begin with one and add more later if you like.
      </Text>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.coverPhotoContainer} onPress={pickCoverImage}>
          <Image source={coverPhoto} style={styles.coverPhoto} />
          <Text style={styles.coverPhotoLabel}>Cover Photo</Text>
          <TouchableOpacity style={styles.menuButton} onPress={toggleDropdown}>
            <Ionicons name="ellipsis-vertical" size={24} color="#000" />
          </TouchableOpacity>
          {dropdownVisible && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity style={styles.dropdownItem}>
                <Ionicons name="trash-outline" size={20} color="#000" />
                <Text style={styles.dropdownItemText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <Ionicons name="create-outline" size={20} color="#000" />
                <Text style={styles.dropdownItemText}>Edit</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.captionInput}
          placeholder="Add a caption"
          value={caption}
          onChangeText={setCaption}
        />
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressBar: {
    width: '40%',
    height: '100%',
    backgroundColor: '#4460EF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  coverPhotoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
    position: 'relative',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    borderRadius: 7,
  },
  coverPhotoLabel: {
    position: 'absolute',
    top: 25,
    left: 5,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.white,
    marginHorizontal: 12,
    marginVertical: 10,
    padding: 5,
    borderRadius: 20,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 35,
    right: 0,
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    zIndex: 1,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  dropdownItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  captionInput: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '95%',
    alignSelf: "center"
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 90,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: colors.white,
    borderStyle: 'dashed',
    marginVertical: 20,
    borderWidth: 2,
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#4460EF',
    marginLeft: 10,
    backgroundColor: '#ECEFFD',
    padding: 15,
    width: 200,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  uploadText: {
    fontSize: 17,
    color: '#4460EF',
    fontWeight: '500',
  },
  photoContainer: {
    flexDirection: 'row',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 5,
    left: -3,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default AddListingPhotoScreen;
