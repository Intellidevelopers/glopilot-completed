import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const transactions = [
  { id: '1', title: 'Payment from Glopilot', description: 'Received on 2024-07-01', amount: '+$200.00' },
  { id: '2', title: 'Payment to Jane Smith', description: 'Received on 2024-06-28', amount: '-$50.00' },
  { id: '3', title: 'Refund from Glopilot', description: 'Received on 2024-06-25', amount: '+$30.00' },
  // Add more transactions as needed
];

const AllTransactionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Transactions</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <View>
            <View style={styles.optionRow}>
              <View>
                <Text style={styles.optionTitle}>{item.title}</Text>
                <Text style={styles.optionDescription}>{item.description}</Text>
              </View>
              <Text>{item.amount}</Text>
            </View>
            <View style={styles.divider} />
          </View>
        )}
      />
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 50,
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
    marginBottom: 8,
    backgroundColor: "whitesmoke",
    padding: 10,
    borderRadius: 5
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
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  saveButton: {
    backgroundColor: '#4460EF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginVertical: 20,
  },
});

export default AllTransactionScreen;
