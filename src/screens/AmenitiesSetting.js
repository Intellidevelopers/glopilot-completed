import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const AmenityScreen = ({ navigation }) => {
  const [amenities, setAmenities] = useState({
    essentials: true,
    airConditioner: false,
    heating: false,
    hairDryer: false,
    heating: false,
    iron: false,
    tv: false,
    Cleaning: false,
    dryer: false,
    kitchen: false,
    pool: false,
    washingMachine: false,
  });

  const handleCheckboxChange = (amenity) => {
    setAmenities({ ...amenities, [amenity]: !amenities[amenity] });
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
       <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ameninities</Text>
      </View>
      <Text style={styles.headerTextLeft}>Ameninities</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={{fontWeight: "600", fontSize: 17}}>Essentials</Text>
        <View style={styles.checkboxContainer}>
          <Text style={styles.sub}>
            Guests typically expect these
          </Text>
          <Checkbox
            value={amenities.essentials}
            onValueChange={() => handleCheckboxChange('essentials')}
            style={styles.checkbox}
            color={amenities.essentials ? '#007bff' : undefined}
          />
        </View>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.divider} />

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Air Conditioner</Text>
          <Checkbox
            value={amenities.airConditioner}
            onValueChange={() => handleCheckboxChange('airConditioner')}
            style={styles.checkbox}
            color={amenities.airConditioner ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Heating</Text>
          <Checkbox
            value={amenities.heating}
            onValueChange={() => handleCheckboxChange('heating')}
            style={styles.checkbox}
            color={amenities.heating ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Hair Dryer</Text>
          <Checkbox
            value={amenities.hairDryer}
            onValueChange={() => handleCheckboxChange('hairDryer')}
            style={styles.checkbox}
            color={amenities.hairDryer ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Iron</Text>
          <Checkbox
            value={amenities.iron}
            onValueChange={() => handleCheckboxChange('iron')}
            style={styles.checkbox}
            color={amenities.iron ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>TV</Text>
          <Checkbox
            value={amenities.tv}
            onValueChange={() => handleCheckboxChange('tv')}
            style={styles.checkbox}
            color={amenities.tv ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>WiFi</Text>
          <Checkbox
            value={amenities.wifi}
            onValueChange={() => handleCheckboxChange('wifi')}
            style={styles.checkbox}
            color={amenities.wifi ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Cleaning Products</Text>
          <Checkbox
            value={amenities.Cleaning}
            onValueChange={() => handleCheckboxChange('Cleaning')}
            style={styles.checkbox}
            color={amenities.Cleaning ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Dryer</Text>
          <Checkbox
            value={amenities.dryer}
            onValueChange={() => handleCheckboxChange('dryer')}
            style={styles.checkbox}
            color={amenities.dryer ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Kitchen</Text>
          <Checkbox
            value={amenities.kitchen}
            onValueChange={() => handleCheckboxChange('kitchen')}
            style={styles.checkbox}
            color={amenities.kitchen ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Pool</Text>
          <Checkbox
            value={amenities.pool}
            onValueChange={() => handleCheckboxChange('pool')}
            style={styles.checkbox}
            color={amenities.pool ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Washing Machine</Text>
          <Checkbox
            value={amenities.washingMachine}
            onValueChange={() => handleCheckboxChange('washingMachine')}
            style={styles.checkbox}
            color={amenities.washingMachine ? '#007bff' : undefined}
          />
        </View>

         <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddPhotoScreen')}>
        <Text style={styles.buttonText}>Save</Text>
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
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    textAlign: "center",
    marginLeft: -10
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 10,
    left: 5,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.gray,
    borderWidth: 1,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressBar: {
    width: '60%',
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
    marginBottom: 20,
    marginTop: -10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 1,
    paddingBottom: 20,
    
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 5,
    borderColor: colors.gray,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  Essentials: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 5,
  },

  divider: {
    flexDirection: 'row',
    width: 330,
    alignItems: 'center',
    marginVertical: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 60,
    marginTop: 25
  },
  headerTextLeft:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10
  }
});

export default AmenityScreen;
