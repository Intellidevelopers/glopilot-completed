import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const Listing = ({ navigation }) => {
  const [amenities, setAmenities] = useState({
    essentials: true,
    airConditioner: false,
    heating: false,
    hairDryer: false,
    heating: false,
    iron: false,
    tv: false,
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
        <Text style={styles.headerText}>House Rules</Text>
      </View>
      <Text style={styles.headerTextLeft}>Set your house rules</Text>
      <View style={styles.checkboxContainer}>
            <Text style={{fontWeight: "400", fontSize: 16, color: '#545454'}}>
                Guests are expected to follow your rules or face
                removal from Glopilots.
            </Text>
        </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.checkboxContainer}>
        <Text style={{fontWeight: "400", fontSize: 17}}>Pets Allowed</Text>
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

        <View style={styles.checkboxContainer}>
          <Text style={styles.Essentials}>Events allowed</Text>
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
          <Text style={styles.Essentials}>Any kind of smoking allowed</Text>
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
          <Text style={styles.Essentials}>Photography</Text>
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
          <Text style={styles.Essentials}>Quiet hours</Text>
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
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllListings')}>
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
    
    marginTop: 10
  }
});

export default Listing;
