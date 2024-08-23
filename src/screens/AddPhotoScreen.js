import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';

const AddPhotoScreen = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);

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

  const handleNext = () => {
    if (photos.length === 0) {
      Alert.alert('No Photos Added', 'Please add at least one photo before proceeding.');
      return;
    }
    navigation.navigate('AddListingScreen', { coverPhoto: photos[0] });
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

      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <View style={styles.uploadButtonText}>
          <Ionicons name="cloud-upload-outline" size={24} color="#4460EF" />
          <Text style={styles.uploadText}>Upload Photos</Text>
        </View>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.photoContainer} horizontal>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.skipButton}
        onPress={handleNext}
      >
        <Text style={styles.skipButtonText}>Next</Text>
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
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    marginTop: -10,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: colors.white,
    borderStyle: 'dashed',
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
    marginVertical: 20,
    flexDirection: 'row',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  skipButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 30,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 20,
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
});

export default AddPhotoScreen;
