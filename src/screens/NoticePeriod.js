import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Modal, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const currencies = [
  { label: 'USD', value: 'USD', symbol: '$' },
  { label: 'NGN', value: 'NGN', symbol: '₦' },
  { label: 'EUR', value: 'EUR', symbol: '€' },
];

const NoticePeriodScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState(currencies[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePriceChange = (input) => {
    // Remove non-numeric characters except decimal point
    const numericValue = input.replace(/[^0-9.]/g, '');
    setAmount(numericValue);
  };

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.currencyItem}
      onPress={() => handleCurrencyChange(item)}
    >
      <Text style={styles.currencyText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const validateAmount = () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      Alert.alert("Validation Error", "Please enter a valid amount.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateAmount()) {
      navigation.navigate('NoticeBoard');
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

      <Text style={styles.title}>Set the price for your listing</Text>
      <Text style={styles.subtitle}>Don’t worry. You can change it anytime.</Text>

      <View style={styles.priceInputContainer}>
        <TextInput
          style={styles.priceInput}
          value={currency.symbol + amount}
          keyboardType="numeric"
          onChangeText={handlePriceChange}
          placeholder={`${currency.symbol}0`}
          placeholderTextColor="#A9A9A9"
        />
      </View>

      <TouchableOpacity style={styles.currencyPicker} onPress={() => setModalVisible(true)}>
        <Text style={styles.currencyPickerText}>{currency.label}</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={currencies}
              renderItem={renderItem}
              keyExtractor={(item) => item.value}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingHorizontal: 10,
  },
  priceInput: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: '#000',
  },
  currencyPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 40,
    backgroundColor: colors.gray,
    width: 90,
  },
  currencyPickerText: {
    fontSize: 14,
    marginRight: 10,
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
  currencyItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  currencyText: {
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default NoticePeriodScreen;
