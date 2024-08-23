import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { colors } from '../utils/colors';

const { width } = Dimensions.get('window');

const ListingLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('Fetching location...');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setAddress('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        const { street, city, region, postalCode, country } = reverseGeocode[0];
        setAddress(`${street}, ${city}, ${region}, ${postalCode}, ${country}`);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Location</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Property Location</Text>
        <Text style={styles.sectionDescription}>Your address is only shared with guests after confirmation.</Text>
        <Text style={styles.sectionTitle2}>Address</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{address}</Text>
          <Ionicons style={styles.edit} name="pencil" size={24} color="black" />
        </View>

        <View style={styles.mapView}>
        {location && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          </MapView>
        )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 75,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#666',
    marginBottom: 20,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  addressText: {
    fontSize: 16,
    width: '80%'
  },
  map: {
    width: width - 40,
    height: 200,
    alignSelf: 'center',
  },
  editBtn:{
    marginLeft: -20
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
    marginVertical: 20,
  },
  sectionTitle2:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  edit:{
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 8,
    borderRadius: 30,

  },
  mapView:{
    borderRadius: 10,
  }
});

export default ListingLocationScreen;
