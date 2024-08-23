import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropdownMenu from '../../components/DropDownMenu';
import * as Progress from 'react-native-progress'; // Import the progress bar library

const HomeScreen = ({ navigation }) => {
  const [propertyType, setPropertyType] = useState('');
  const [selectedOption, setSelectedOption] = useState('Full Place');
  const [progress, setProgress] = useState(0.3); // Progress value between 0 and 1
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message

  const handleNext = () => {
    if (!propertyType) {
      setErrorMessage('Please select a property type.');
      return;
    }
    // Reset the error message if validation passes
    setErrorMessage('');
    navigation.navigate('LOCATION'); // Ensure this matches the screen name in the navigator
  };

  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
        <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
      </TouchableOpacity>
      <Progress.Bar
        progress={0.2}
        width={300}
        style={styles.progressBar}
        color="#4460EF"
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <View style={styles.Header}>
        <Text style={styles.HeaderText} size={30}>What kind of place are you listing?</Text>
        <Text style={styles.HeadText}>Property Type</Text>
        <DropdownMenu selectedValue={propertyType} onValueChange={setPropertyType} />
        
      </View>
      <Text style={styles.subtitle}>What will guests have?</Text>

      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => setSelectedOption('Full Place')}
      >
        <View style={styles.radioCircle}>
          {selectedOption === 'Full Place' && <View style={styles.selectedRb} />}
        </View>
        <View style={styles.radioTextContainer}>
          <Text style={styles.radioText}>Full Place</Text>
          <Text style={styles.description}>Guests have the whole place to themselves. This usually includes a bedroom, bathroom.</Text>
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
          <Text style={styles.radioText}>Private Room</Text>
          <Text style={styles.description}>Guests have their own private room for sleeping. Other areas could be shared.</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>
      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => setSelectedOption('Shared Room')}
      >
        <View style={styles.radioCircle}>
          {selectedOption === 'Shared Room' && <View style={styles.selectedRb} />}
        </View>
        <View style={styles.radioTextContainer}>
          <Text style={styles.radioText}>Shared Room</Text>
          <Text style={styles.description}>Guests sleep in a bedroom or a common area that could be shared with others.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  BackButton:{
    backgroundColor: colors.white,
    marginTop: 45,
    left: -137,
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
  },
  HeaderText:{
    left: -0,
    top: 10,
    fontSize: 21,
    fontWeight: "700",
    marginVertical: 5,
  },
  HeadText:{
    top: 19,
    fontSize: 14,
    fontWeight: "700",
    left: -0,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: -155,
    marginTop: -10
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    padding: 16,
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.primary,
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
    marginTop: -10,
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
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
