import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.7749, // Default to a central location (e.g., San Francisco)
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
      </View>
      <Progress.Bar 
        progress={0.6} 
        width={300} 
        style={styles.progressBar} 
        color="#4460EF"
      />
      <Text style={styles.title}>Is the pin in the right spot?</Text>
      <Text style={styles.subtitle}>
        If necessary, feel free to adjust the map to ensure the pin is accurately placed. This information will only be visible to confirmed guests, helping them navigate to your location.
      </Text>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        {location && (
          <Marker
            coordinate={{ latitude: region.latitude, longitude: region.longitude }}
            draggable
            onDragEnd={(e) => setRegion({
              ...region,
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })}
          />
        )}
      </MapView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AmenityScreen')}>
        <Text style={styles.buttonText}>Yes, that's right</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 20,
    left: 5,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  map: {
    flex: 1,
    width: '100%',
    height: '50%',
    marginBottom: 170,
  },
  button: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  progressBar: {
    margin: 0,
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 15,
    left: -5,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
  },
});

export default MapScreen;
