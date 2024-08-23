import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, Modal, Button, FlatList } from 'react-native';
import { FontAwesome6, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { colors } from '../utils/colors';

const AddCarScreen = ({ navigation }) => {
  const [carImage, setCarImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [rentalPrice, setRentalPrice] = useState('');
  const [rentalPriceUnit, setRentalPriceUnit] = useState('');
  const [date, setDate] = useState(new Date());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carDoors, setCarDoors] = useState('');
  const [carSeats, setCarSeats] = useState('');
  const [carType, setCarType] = useState('');
  const [carTransmission, setCarTransmission] = useState('');
  const [carFuel, setCarFuel] = useState('');
  const [carSeatBelt, setCarSeatBelt] = useState('');
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const [carMakeModalVisible, setCarMakeModalVisible] = useState(false);
  const [carModelModalVisible, setCarModelModalVisible] = useState(false);
  const [carYearModalVisible, setCarYearModalVisible] = useState(false);
  const [carColorModalVisible, setCarColorModalVisible] = useState(false);
  const [carDoorsModalVisible, setCarDoorsModalVisible] = useState(false);
  const [carSeatsModalVisible, setCarSeatsModalVisible] = useState(false);
  const [carTypeModalVisible, setCarTypeModalVisible] = useState(false);
  const [carTransmissionModalVisible, setCarTransmissionModalVisible] = useState(false);
  const [carFuelModalVisible, setCarFuelModalVisible] = useState(false);
  const [rentalPriceUnitModalVisible, setRentalPriceUnitModalVisible] = useState(false);
  const [CarseatBeltModalVisible, setCarSeatBeltModalVisible] = useState(false);

  const carMakeOptions = [
    { label: 'Select Make', value: '' },
    { label: 'Toyota', value: 'toyota' },
    { label: 'Honda', value: 'honda' },
    { label: 'Ford', value: 'ford' },
  ];

  const carModelOptions = [
    { label: 'Select Model', value: '' },
    { label: 'Camry', value: 'camry' },
    { label: 'Accord', value: 'accord' },
    { label: 'Mustang', value: 'mustang' },
  ];

  const carYearOptions = [
    { label: 'Select Year', value: '' },
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' },
    { label: '2020', value: '2020' },
  ];

  const carColorOptions = [
    { label: 'Select Color', value: '' },
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Black', value: 'black' },
  ];

  const carDoorsOptions = [
    { label: 'Select Number of Doors', value: '' },
    { label: '2', value: '2' },
    { label: '4', value: '4' },
  ];

  const carSeatsOptions = [
    { label: 'Select Number of Seats', value: '' },
    { label: '2', value: '2' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ];

  const carSeatBeltOptions = [
    { label: 'Select Number of Seat Belts', value: '' },
    { label: 'Belt 2', value: '2' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ];


  const carTypeOptions = [
    { label: 'Select Vehicle Type', value: '' },
    { label: 'Sedan', value: 'sedan' },
    { label: 'SUV', value: 'suv' },
    { label: 'Truck', value: 'truck' },
  ];

  const carTransmissionOptions = [
    { label: 'Select', value: '' },
    { label: 'Automatic', value: 'automatic' },
    { label: 'Manual', value: 'manual' },
  ];

  const carFuelOptions = [
    { label: 'Select', value: '' },
    { label: 'Petrol', value: 'petrol' },
    { label: 'Diesel', value: 'diesel' },
  ];

  const rentalPriceUnitOptions = [
    { label: 'Select', value: '' },
    { label: 'Per week', value: 'per_week' },
    { label: 'Per day', value: 'per_day' },
  ];


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    })();
  }, []);

  const handleLocationChange = (text) => {
    setLocation(text);
  
    if (text === '') {
      setLocationSuggestions([]);
    } else {
      // Here you would normally make an API call to get location suggestions based on the text input
      // For now, we will mock this with some example data
      const mockSuggestions = [
        { label: 'New York, NY, USA', value: 'New York, NY, USA' },
        { label: 'Los Angeles, CA, USA', value: 'Los Angeles, CA, USA' },
        { label: 'Chicago, IL, USA', value: 'Chicago, IL, USA' },
      ];
      setLocationSuggestions(mockSuggestions);
    }
  };
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCarImage(result.uri);
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const formattedDate = date.toLocaleDateString();

  const renderOption = (option, onSelect) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        onSelect(option.value);
      }}
    >
      <Text style={styles.optionText}>{option.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Car</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.headerTitleLeft}>Car Details</Text>

<Text style={styles.label}>Car Image</Text>
<View style={styles.imagePickerContainer}>
  <Image source={require('../assets/car.png')} style={styles.carImage} />
  {carImage && (
    <Image source={{ uri: carImage }} style={styles.carImage} />
  )}
  <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
    <Ionicons name="camera" size={32} color="gray" />
  </TouchableOpacity>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Make</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarMakeModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carMakeOptions.find(option => option.value === carMake)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={20} color="#666" style={{ position: 'absolute', right: 10, top: 10 }} />
  </TouchableOpacity>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Model</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarModelModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carModelOptions.find(option => option.value === carModel)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={20} color="#666" style={{ position: 'absolute', right: 10, top: 10 }} />
  </TouchableOpacity>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Year</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarYearModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carYearOptions.find(option => option.value === carYear)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={20} color="#666" style={{ position: 'absolute', right: 10, top: 10 }} />
  </TouchableOpacity>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>License Plate Number</Text>
  <TextInput style={styles.input} placeholder="License Plate Number" />
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Mileage</Text>
  <TextInput style={styles.input} placeholder="Mileage" />
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Rental Price</Text>
  <View style={styles.rentalPriceContainer}>
    <TextInput
      style={[styles.inputrent, { flex: 1 }]}
      placeholder="Rental Price"
      value={`${rentalPrice}`}
      onChangeText={setRentalPrice}
      keyboardType="numeric"
    />
    <TouchableOpacity
      style={[styles.dropdownrent, { marginLeft: 10 }]}
      onPress={() => setRentalPriceUnitModalVisible(true)}
    >
      <Text style={styles.dropdownrenttext}>
        {rentalPriceUnitOptions.find(option => option.value === rentalPriceUnit)?.label || 'Select'}
      </Text>
      <SimpleLineIcons name="arrow-down" size={16} color="#666" style={{ position: 'absolute', right: 10, top: 15 }} />
    </TouchableOpacity>
  </View>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Location</Text>
  <TextInput style={styles.input} value={location} onChangeText={handleLocationChange} placeholder="Location" />
  <FontAwesome6 name="location-crosshairs" size={16} color="#666" style={{ position: 'absolute', right: 10, top: 45 }} />
  {locationSuggestions.length > 0 && (
            <FlatList
              data={locationSuggestions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSuggestionPress(item.value)}>
                  <Text style={styles.suggestionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          )}
</View>


<Text style={styles.label}>Availabilty</Text>
<TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
  <Text style={styles.dateText}>{formattedDate}</Text>
  <SimpleLineIcons name="calendar" size={20} color="#666" style={{ position: 'absolute', right: 10, top: 10 }} />
</TouchableOpacity>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Color</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarColorModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carColorOptions.find(option => option.value === carColor)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={16} color="#666" style={{ position: 'absolute', right: 10, top: 15 }} />
  </TouchableOpacity>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Number of Doors</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarDoorsModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carDoorsOptions.find(option => option.value === carDoors)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={16} color="#666" style={{ position: 'absolute', right: 10, top: 15 }} />
  </TouchableOpacity>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Number of Seats</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarSeatsModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carSeatsOptions.find(option => option.value === carSeats)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={16} color="#666" style={{ position: 'absolute', right: 10, top: 15 }} />
  </TouchableOpacity>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Number of Seat Belts</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarSeatBeltModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carSeatBeltOptions.find(option => option.value === carSeatBelt)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={16} color="#666" style={{ position: 'absolute', right: 10, top: 15 }} />
  </TouchableOpacity>
</View>


<View style={styles.inputGroup}>
  <Text style={styles.label}>Vehicle Type</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarTypeModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carTypeOptions.find(option => option.value === carType)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={16} color="#666" style={{ position: 'absolute', right: 10, top: 15 }} />
  </TouchableOpacity>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Transmission Type</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarTransmissionModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carTransmissionOptions.find(option => option.value === carTransmission)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={16} color="#666" style={{ position: 'absolute', right: 10, top: 15 }} />
  </TouchableOpacity>
</View>

<View style={styles.inputGroup}>
  <Text style={styles.label}>Fuel Type</Text>
  <TouchableOpacity
    style={styles.dropdown}
    onPress={() => setCarFuelModalVisible(true)}
  >
    <Text style={styles.dropdownText}>
      {carFuelOptions.find(option => option.value === carFuel)?.label || 'Select'}
    </Text>
    <SimpleLineIcons name="arrow-down" size={16} color="#666" style={{ position: 'absolute', right: 10, top: 15 }} />
  </TouchableOpacity>
</View>
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Car</Text>
      </TouchableOpacity>

      {/* Modals */}
      <Modal
        visible={carMakeModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarMakeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carMakeOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarMake(value);
                setCarMakeModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={carModelModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarModelModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carModelOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarModel(value);
                setCarModelModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={carYearModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarYearModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carYearOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarYear(value);
                setCarYearModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={carColorModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarColorModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carColorOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarColor(value);
                setCarColorModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={CarseatBeltModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarSeatBeltModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carSeatBeltOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarSeatBelt(value);
                setCarSeatBeltModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={carDoorsModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarDoorsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carDoorsOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarDoors(value);
                setCarDoorsModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={carSeatsModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarSeatsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carSeatsOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarSeats(value);
                setCarSeatsModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={carTypeModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarTypeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carTypeOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarType(value);
                setCarTypeModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={carTransmissionModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarTransmissionModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carTransmissionOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarTransmission(value);
                setCarTransmissionModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={carFuelModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCarFuelModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={carFuelOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setCarFuel(value);
                setCarFuelModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={rentalPriceUnitModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setRentalPriceUnitModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={rentalPriceUnitOptions}
              keyExtractor={item => item.value}
              renderItem={({ item }) => renderOption(item, value => {
                setRentalPriceUnit(value);
                setRentalPriceUnitModalVisible(false);
              })}
            />
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 14,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 60,
    alignSelf: "center"
  },
  headerTitleLeft: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  imagePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  carImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  imagePicker: {
    backgroundColor: '#e0e0e0',
    padding: 35,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    fontWeight: "500"
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 14,
  },
  datePicker: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  dropdownText: {
    fontSize: 14,
    color: '#666'
  },
  addButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
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
    marginHorizontal: -10

  },
  rentalPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 20,
  },
  inputrent: {
    padding: 10,
    fontSize: 14,
    flex: 1,
  },
  dropdownrent: {
    backgroundColor: colors.gray,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  dropdownrenttext: {
      fontSize: 14,
    color: '#666',
    marginRight: 15,
    fontWeight: "400"
  },
  suggestionText: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default AddCarScreen;
