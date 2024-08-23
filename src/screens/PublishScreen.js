import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const PublishScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color="#000" size={25} />
      </TouchableOpacity>

      <Image source={require('../assets/publish-image.png')} style={styles.image} />

      <Text style={styles.title}>You're all set to publish your listing!</Text>
      <Text style={styles.subtitle}>
        Once you publish, you can start welcoming guests and easily update your calendar or house rules.
      </Text>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.publishButton} onPress={() => navigation.navigate('MainTabs')}>
        <Text style={styles.publishButtonText}>Publish Listing</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.editButton} onPress={() => alert('Edit Listing pressed')}>
        <Text style={styles.editButtonText}>Edit Listing</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: 70,
    marginVertical: 15,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  publishButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  publishButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  editButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#4460EF',
    fontSize: 18,
  },
  buttonContainer:{
    marginTop: 100,
  }
});

export default PublishScreen;
