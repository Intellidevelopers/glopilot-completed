import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const advanceNotices = ['Same day', '1 day', '2 days', '3 days'];
const checkInTimes = ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

const NoticeBoardScreen = ({ navigation }) => {
  const [advanceNotice, setAdvanceNotice] = useState('1 day');
  const [fromTime, setFromTime] = useState('Select');
  const [toTime, setToTime] = useState('Select');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        if (selectedType === 'advanceNotice') setAdvanceNotice(item);
        else if (selectedType === 'fromTime') setFromTime(item);
        else if (selectedType === 'toTime') setToTime(item);
        setModalVisible(false);
      }}
    >
      <Text style={styles.listItemText}>{item}</Text>
    </TouchableOpacity>
  );

  const openModal = (type) => {
    setSelectedType(type);
    setModalVisible(true);
  };

  const validateSelections = () => {
    if (fromTime === 'Select' || toTime === 'Select') {
      Alert.alert("Validation Error", "Please select both 'From' and 'To' times.");
      return false;
    }

    const fromTimeDate = new Date(`1970-01-01T${fromTime.replace(' PM', ':00').replace(' AM', ':00')}`);
    const toTimeDate = new Date(`1970-01-01T${toTime.replace(' PM', ':00').replace(' AM', ':00')}`);

    if (fromTime.includes('PM') && fromTime !== '12:00 PM') {
      fromTimeDate.setHours(fromTimeDate.getHours() + 12);
    }
    if (toTime.includes('PM') && toTime !== '12:00 PM') {
      toTimeDate.setHours(toTimeDate.getHours() + 12);
    }

    if (fromTimeDate >= toTimeDate) {
      Alert.alert("Validation Error", "'From' time must be earlier than 'To' time.");
      return false;
    }

    return true;
  };

  const handleFinish = () => {
    if (validateSelections()) {
      navigation.navigate('PublishScreen');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color="#000" size={25} />
      </TouchableOpacity>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>How much advance notice do you require before a guest arrives?</Text>
      <Text style={styles.subtitle}>Guest Arrival Notice Preferences</Text>

      <TouchableOpacity style={styles.dropdown} onPress={() => openModal('advanceNotice')}>
        <Text style={styles.dropdownText}>{advanceNotice}</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>What is your preferred check-in time for guests?</Text>

      <View style={styles.labelDropdownContainer}>
        <Text style={styles.label}>From:</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => openModal('fromTime')}>
          <Text style={styles.dropdownText}>{fromTime}</Text>
          <Ionicons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.labelDropdownContainer}>
        <Text style={styles.label}>To:</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => openModal('toTime')}>
          <Text style={styles.dropdownText}>{toTime}</Text>
          <Ionicons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={selectedType === 'advanceNotice' ? advanceNotices : checkInTimes}
              renderItem={renderItem}
              keyExtractor={(item) => item}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <TouchableOpacity style={styles.nextButton} onPress={handleFinish}>
        <Text style={styles.nextButtonText}>Finish</Text>
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
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 20,
  },
  progressBar: {
    width: '60%',
    height: '100%',
    backgroundColor: '#4460EF',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    fontWeight: "600",
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
  },
  dropdownText: {
    fontSize: 16,
  },
  labelDropdownContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: '#000',
    marginBottom: 5,
    fontWeight: "600"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    padding: 20,
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  listItemText: {
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 80,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default NoticeBoardScreen;
