import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const WithdrawalScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: 'bank_transfer', title: 'Bank Transfer', description: 'Withdraw directly to your bank account' },
    { id: 'paypal', title: 'PayPal', description: 'Withdraw to your PayPal account' },
    { id: 'crypto', title: 'Cryptocurrency', description: 'Withdraw to your crypto wallet' },
  ];

  const handleWithdraw = () => {
    if (selectedMethod) {
      console.log(`Withdraw using ${selectedMethod}`);
      // Implement the withdrawal functionality here
    } else {
      console.log('Please select a withdrawal method');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Withdrawal</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Withdraw Funds</Text>
        <Text style={styles.sectionDescription}>Select your preferred method to withdraw funds.</Text>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[styles.optionRow, selectedMethod === method.id && styles.selectedOption]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <View>
              <Text style={styles.optionTitle}>{method.title}</Text>
              <Text style={styles.optionDescription}>{method.description}</Text>
            </View>
            {selectedMethod === method.id && <Ionicons name="checkmark-outline" size={20} color={colors.primary} />}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleWithdraw}>
        <Text style={styles.saveButtonText}>Withdraw</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 14,
    marginTop: 40,
    gap: 63
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 8,
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  optionDescription: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 24,
    fontWeight: '400',
  },
  selectedOption: {
    borderColor: colors.primary,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    marginVertical: 180
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
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
});

export default WithdrawalScreen;
