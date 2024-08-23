import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import { Fontisto, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const carsData = [
  { id: '1', name: 'Kia Sportage', image: require('../assets/car.png') },
  { id: '2', name: 'Kia Sportage', image: require('../assets/car.png') },
  { id: '3', name: 'Kia Sportage', image: require('../assets/car.png') },
  { id: '4', name: 'Kia Sportage', image: require('../assets/car.png') },
];

const CarsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const handleKebabMenuPress = (car) => {
    setSelectedCar(car);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedCar(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.carImage} />
      <View style={styles.cardContent}>
        <Text style={styles.carName}>{item.name}</Text>
        <TouchableOpacity style={styles.kebabMenu} onPress={() => handleKebabMenuPress(item)}>
          <MaterialIcons name="more-vert" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.carPriceContainer}>
        <Text style={styles.carPrice}>$200/</Text>
        <Text style={styles.carPriceSmall}>week</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cars</Text>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search Product..." />
        <Ionicons name="filter" size={20} color="gray" style={styles.filterIcon} />
      </View>
      <View style={styles.divider} />
      <FlatList
        data={carsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => setButtonsVisible(!buttonsVisible)}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
      {buttonsVisible && (
        <View style={styles.additionalButtonsContainer}>
          <TouchableOpacity style={styles.additionalButton}>
            <Ionicons name="camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.additionalButton} onPress={() => navigation.navigate('AddCar')}>
            <Ionicons name="car-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomePageScreen')}>
        <Octicons name="home" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Cars')}>
          <Ionicons name="car-outline" size={24} color="#4460EF" />
          <Text style={styles.navButtonTextActive}>Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AllBooking')}>
          <Ionicons name="calendar-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Earnings')}>
        <Fontisto name="dollar" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AccountProfile')}>
          <Ionicons name="person-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Account</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalButton} onPress={() => { handleModalClose(); console.log('Edit'); }}>
              <Text style={styles.modalButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => { handleModalClose(); console.log('Delete'); }}>
              <Text style={styles.modalButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 46,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: colors.gray,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterIcon: {
    marginLeft: 8,
  },
  list: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    height: 220
  },
  carImage: {
    width: 149,
    height: 140,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: -10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  carName: {
    marginTop: 8,
    fontWeight: 'bold',
    flex: 1,
  },
  kebabMenu: {
    marginLeft: -2,
    marginTop: -270,
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 50,
  },
  carPrice: {
    marginTop: 4,
    color: 'black',
    marginLeft: -55,
    fontWeight: "700",
    fontSize: 16,
  },
  carPriceContainer: {
    flexDirection: "row",
  },
  carPriceSmall: {
    marginTop: 5,
    color: 'grey',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  additionalButtonsContainer: {
    position: 'absolute',
    right: 20,
    bottom: 150,
    alignItems: 'center',
  },
  additionalButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '110%',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#C5C5C5',
  },
  navButtonTextActive: {
    color: '#4460EF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 200,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    paddingVertical: 10,
  },
  modalButtonText: {
    fontSize: 18,
    color: 'black',
  },
  divider: {
    flexDirection: 'row',
    width: 354,
    alignItems: 'center',
    marginLeft: -10,
    marginTop: 7,
    marginBottom: 15,
    height: 8,
    backgroundColor: colors.gray,
  },
});

export default CarsScreen;
