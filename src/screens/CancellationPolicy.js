import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropdownMenu from '../../components/DropDownMenu';
import * as Progress from 'react-native-progress'; // Import the progress bar library

const CancellationPolicyScreen = ({ navigation }) => {
  const [propertyType, setPropertyType] = useState('');
  const [selectedOption, setSelectedOption] = useState('Flexible');
  const [progress, setProgress] = useState(0.3); // Progress value between 0 and 1

  const handleNext = () => {
    navigation.navigate('LOCATION'); // Ensure this matches the screen name in the navigator
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}>
       <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cancellation Policy</Text>
      </View>

      <View style={styles.Header}>
        <Text style={styles.HeaderBtmText} size={20}>Choose a cancellation policy</Text>
        
      </View>
      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => setSelectedOption('Flexible')}
      >
        <View style={styles.radioCircle}>
          {selectedOption === 'Flexible' && <View style={styles.selectedRb} />}
        </View>
        <View style={styles.radioTextContainer}>
          <Text style={styles.radioText}>Flexible</Text>
          <Text style={styles.description}>Get a full refund if canceled one day before check-in</Text>
        </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => setSelectedOption('Private Room')}
      >
        <View style={styles.radioCircle}>
          {selectedOption === 'Private Room' && <View style={styles.selectedRb} />}
        </View>
        <View style={styles.radioTextContainer}>
          <Text style={styles.radioText}>Flexible or Non-refundable</Text>
          <Text style={styles.description}>In addition to Flexible, offer a non-refundable option where guests pay 10% less. You'll keep your payout regardless of when they cancel.</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>
      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => setSelectedOption('Moderate')}
      >
        <View style={styles.radioCircle}>
          {selectedOption === 'Moderate' && <View style={styles.selectedRb} />}
        </View>
        <View style={styles.radioTextContainer}>
          <Text style={styles.radioText}>Moderate</Text>
          <Text style={styles.description}>Get a full refund if canceled within five days of arrival.</Text>
        </View>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>
      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => setSelectedOption('Moderate or Non-refundable')}
      >
        <View style={styles.radioCircle}>
          {selectedOption === 'Moderate or Non-refundable' && <View style={styles.selectedRb} />}
        </View>
        <View style={styles.radioTextContainer}>
          <Text style={styles.radioText}>Moderate or Non-refundable</Text>
          <Text style={styles.description}>In addition to Moderate, offer a non-refundable option where guests pay 10% less. You'll keep your payout regardless of when they cancel.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CancellationPolicyScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  BackButton:{
    backgroundColor: colors.white,
    marginTop: 50,
    left: -50,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray,
  },
  PaginationIndicator:{
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gray,
    height: 12,
    width: 320,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  BlueBtn:{
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  BlueBtnText:{
    color: colors.primary,
  },
  WhiteBtnText:{
    color: colors.primary,
  },
  Header:{
    padding: 1,
    flexDirection: "row",
    marginBottom: 20
  },
  HeaderText:{
    left: -0,
    top: 10,
    fontSize: 21,
    fontWeight: "700",
    marginVertical: 5,
  },
  headerText:{
    top: 60,
    fontSize: 20,
    fontWeight: "700",
    left: -20,
  },
  HeaderBtmText:{
    fontSize: 20,
    fontWeight: "700",
    left: -34,
    marginBottom: -40
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: -155,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 16,
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: "center",
    marginRight: 10,
    marginTop: -30,
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    marginTop: 0,
  },
  radioTextContainer: {
    flex: 1,
  },
  radioText: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  nextButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 100,
    width: 310,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  divider: {
    height: 3,
    backgroundColor: colors.primary,
    marginVertical: 2,
  },
  progressBar: {
    margin: 20,
  },
});
