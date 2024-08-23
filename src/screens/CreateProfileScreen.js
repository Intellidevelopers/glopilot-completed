import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';
import defaultCoverImage from '../assets/Vector.png';

const CreateProfileScreen = ({ navigation }) => {
  const [coverPhoto, setCoverPhoto] = useState(defaultCoverImage); // Default cover photo
  const [photos, setPhotos] = useState([]);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Sorry, we need camera roll permissions to make this work!');
      return false;
    }
    return true;
  };

  const pickCoverImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setCoverPhoto({ uri: result.assets[0].uri });
    }
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setPhotos([...photos, result.assets[0].uri]);
    }
  };

  const handleNext = () => {
    if (coverPhoto === defaultCoverImage) {
      Alert.alert('Profile Photo Required', 'Please upload a profile photo to proceed.');
      return;
    }
    navigation.navigate('PhoneNumberScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
      </TouchableOpacity>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>Add your profile photo</Text>
      <Text style={styles.subtitle}>
        Add a photo to personalize your profile.
      </Text>

      <TouchableOpacity onPress={pickCoverImage} style={styles.imagePicker}>
        <Image source={coverPhoto} style={styles.coverPhoto} />
      </TouchableOpacity>

      <TouchableOpacity onPress={pickCoverImage} style={styles.uploadButton}>
        <View style={styles.uploadButtonText}>
          <Ionicons name="cloud-upload-outline" size={24} color="black" />
          <Text style={styles.uploadText}>Upload Photos</Text>
        </View>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.photoContainer} horizontal>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[styles.nextButton, coverPhoto !== defaultCoverImage && styles.nextButtonActive]}
        onPress={handleNext}
        disabled={coverPhoto === defaultCoverImage}
      >
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
  backButton: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
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
  imagePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },
  coverPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e1e1e1',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    borderStyle: 'dashed',
    marginVertical: 20,
    borderWidth: 2,
  },
  uploadButtonText: {
    fontSize: 16,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    fontSize: 17,
    color: colors.secondary,
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
    backgroundColor: '#d3d3d3',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  nextButtonActive: {
    backgroundColor: '#4460EF',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CreateProfileScreen;
