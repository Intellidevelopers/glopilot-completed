import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { colors } from '../utils/colors';

const PhotosScreen = ({ navigation }) => {
  const [photos, setPhotos] = useState([]); // State to hold photos

  const handleUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: true, // This is not currently supported by expo-image-picker
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotos([...photos, result.uri]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Photos</Text>
      </View>

      <ScrollView style={styles.body}>
        <Text style={styles.label}>Upload Photos</Text>
        <Text style={styles.subtitle}>Drag and drop or select files to upload photos.</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Text style={styles.uploadButtonText}>Upload Photos</Text>
        </TouchableOpacity>
      </ScrollView>

    <View style={styles.columnImages}>
      <View style={styles.rowImages}>
        <Image style={styles.images} source={require('../assets/house.png')} />
        <Image style={styles.images} source={require('../assets/house.png')} />
        <Image style={styles.images} source={require('../assets/house.png')} />
      </View>
    </View>
    <View style={styles.columnImages}>
      <View style={styles.rowImages}>
        <Image style={styles.images} source={require('../assets/house.png')} />
        <Image style={styles.images} source={require('../assets/house.png')} />
        <Image style={styles.images} source={require('../assets/house.png')} />
      </View>
    </View>
    <View style={styles.columnImages}>
      <View style={styles.rowImages}>
        <Image style={styles.images} source={require('../assets/house.png')} />
        <Image style={styles.images} source={require('../assets/house.png')} />
        <Image style={styles.images} source={require('../assets/house.png')} />
      </View>
    </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30
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
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 75,
  },
  body: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#4460EF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photoManagement: {
    marginTop: 20,
  },
  photoButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  photoButtonText: {
    color: '#000',
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photoList: {
    marginTop: 20,
  },
  photoItem: {
    marginRight: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  images:{
    width: 100,
    height: 100,
    borderRadius: 5
    
  },
  rowImages:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  columnImages:{
    flexDirection: "column",
    marginBottom: 10
  }
});

export default PhotosScreen;
