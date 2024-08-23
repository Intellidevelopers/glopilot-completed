import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';

const TransactionHistoryScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Pending');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transaction History</Text>
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.amountTitle}>{activeTab} Amount</Text>
        <Text style={styles.amountValue}>$200.75</Text>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Pending' && styles.activeTabButton]}
            onPress={() => setActiveTab('Pending')}
          >
            <Text style={[styles.tabLabel, activeTab === 'Pending' && styles.activeTabLabel]}>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Paid' && styles.activeTabButton]}
            onPress={() => setActiveTab('Paid')}
          >
            <Text style={[styles.tabLabel, activeTab === 'Paid' && styles.activeTabLabel]}>
              Paid
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>
      </View>
      <View style={styles.filter}>
        <Text style={styles.sectionTitle}>{activeTab} Amount</Text>
        <TouchableOpacity>
          <View style={styles.icon}>
            <Ionicons name="filter-outline" color="#000" size={25} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', width: 330, alignItems: 'center', marginBottom: 10}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>
      <ScrollView style={styles.transactionsContainer} showsVerticalScrollIndicator={false}>
        {activeTab === 'Pending' ? (
          <View>
            <TransactionCard
              date="May 11, 2024"
              title="Double-Story House with Swimming Pool"
              bookingID="#GP8355"
              duration="May 11, 2024 - May 15, 2024"
              listingPrice="$10,000"
              fees="$1,000"
              bankAccount="**** 7462"
              amount="$9,000"
              isPending={true}
            />
            <TransactionCard
              date="May 11, 2024"
              title="Double-Story House with Swimming Pool"
              bookingID="#GP8356"
              duration="May 11, 2024 - May 15, 2024"
              listingPrice="$10,000"
              fees="$1,000"
              bankAccount="**** 7462"
              amount="$9,000"
              isPending={true}
            />
            <TransactionCard
              date="May 11, 2024"
              title="Double-Story House with Swimming Pool"
              bookingID="#GP8356"
              duration="May 11, 2024 - May 15, 2024"
              listingPrice="$10,000"
              fees="$1,000"
              bankAccount="**** 7462"
              amount="$9,000"
              isPending={true}
            />
            <TransactionCard
              date="May 11, 2024"
              title="Double-Story House with Swimming Pool"
              bookingID="#GP8356"
              duration="May 11, 2024 - May 15, 2024"
              listingPrice="$10,000"
              fees="$1,000"
              bankAccount="**** 7462"
              amount="$9,000"
              isPending={true}
            />
            {/* Add more pending transaction cards here */}
          </View>
        ) : (
          <View>
            <TransactionCard
              date="May 11, 2024"
              title="Double-Story House with Swimming Pool"
              bookingID="#GP4356"
              duration="May 11, 2024 - May 15, 2024"
              listingPrice="$2,000"
              fees="$100"
              bankAccount="**** 7462"
              amount="$1,900"
              isPending={false}
            />
            <TransactionCard
              date="May 11, 2024"
              title="Double-Story House with Swimming Pool"
              bookingID="#GP4357"
              duration="May 11, 2024 - May 15, 2024"
              listingPrice="$2,000"
              fees="$100"
              bankAccount="**** 7462"
              amount="$1,900"
              isPending={false}
            />
            {/* Add more paid transaction cards here */}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const TransactionCard = ({ date, title, bookingID, duration, listingPrice, fees, bankAccount, amount, isPending }) => (
  <View style={styles.transactionCard}>
    <Text style={styles.transactionDate}>{date}</Text>
        <Text style={styles.transactionTitle}>{title}</Text>
        <Text style={styles.transactionDetail}>
            <Text>Booking ID:          </Text>
            <Text style={styles.transactionDetailValue}>{bookingID}</Text>
        </Text>
        <Text style={styles.transactionDetail}>
            <Text>Date:                      </Text> 
            <Text style={styles.transactionDetailValue}>{duration}</Text>
        </Text>
        <Text style={styles.transactionDetail}>
            <Text>Listing Price:       </Text> 
            <Text style={styles.transactionDetailValue}>{listingPrice}</Text>
        </Text>
        <Text style={styles.transactionDetail}>
            <Text>Fees:                     </Text>
            <Text style={styles.transactionFee}>{fees}</Text>
        </Text>
        <Text style={styles.transactionDetail}>
            <Text>Bank Account:    </Text>
            <Text style={styles.transactionDetailValue}>{bankAccount}</Text>
        </Text>
    <Text style={styles.transactionDetail}>
      <Text>
    {isPending ? 'You get' : 'You Got'}: 
    </Text>
      <Text style={styles.transactionGot}>               {amount}</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#F5F5F5',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
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
  },
  amountContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  amountTitle: {
    fontSize: 16,
    color: "#0D1317",
    alignSelf: "flex-start",
  },
  amountValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    marginTop: 10,
    alignSelf: "flex-start"
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabLabel: {
    fontSize: 16,
    color: "#0D1317",
  },
  activeTabLabel: {
    color: colors.primary,
  },
  transactionsContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  transactionCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: 320
  },
  transactionDate: {
    fontSize: 14,
    color: "#0D1317",
    marginBottom: 5,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  transactionDetail: {
    fontSize: 14,
    marginBottom: 2,
    color: '#0D1317',
  },
  transactionDetailValue: {
    fontWeight: 'bold',
  },
  transactionGot: {
    fontWeight: 'bold',
    color: '#04AA6D',
  },
  transactionFee: {
    fontWeight: 'bold',
    color: 'red',
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    backgroundColor: colors.gray,
    padding: 10,
    borderRadius: 30,
    marginBottom: 10,
  },
});

export default TransactionHistoryScreen;
