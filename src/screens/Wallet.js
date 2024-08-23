import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome6, Entypo } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const WalletScreen = ({ navigation }) => {
  const handlePayoutPress = (transactionId, amount, date, recipient, status) => {
    navigation.navigate('Payout', {
      transactionId,
      amount,
      date,
      recipient,
      status,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Wallet</Text>
      </View>

      <View style={styles.balanceContainer}>
        <View style={styles.content}>
          <Text style={styles.balance}>Balance</Text>
          <View style={styles.balanceItems}>
            <Text style={styles.balanceText}>$310.50</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
          <Text style={styles.payoutText}>Payout scheduled: May 02</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.cashOutButton} onPress={() => navigation.navigate('Withdraw')}>
        <FontAwesome6 name="bolt-lightning" size={24} color="white" />
        <Text style={styles.cashOutButtonText}>Cash out</Text>
      </TouchableOpacity>
      <View style={styles.recentPayoutsContainer}>
        <View style={styles.recent}>
          <Text style={styles.recentPayoutsHeader}>Recent payouts</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
            <Text style={styles.recentSeeall}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.payoutItem}>
          <TouchableOpacity
            onPress={() => handlePayoutPress(
              'TXN12345',
              210.45,
              'Apr 04, 2024',
              'John Doe',
              'Completed'
            )}
          >
            <View style={styles.payoutDetails}>
              <Text style={styles.payoutAmount}>$210.45</Text>
              <Text style={styles.payoutDate}>Initiated Apr 04, 2024</Text>
              <View style={styles.calendar}>
                <Entypo name="calendar" size={20} color="black" />
                <View style={styles.icons}>
                  <Text style={styles.payoutType}>Weekly payment</Text>
                  <Ionicons name="chevron-forward" size={20} color="black" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.payoutItem}>
          <TouchableOpacity
            onPress={() => handlePayoutPress(
              'TXN12346',
              324.15,
              'Apr 01, 2024',
              'Jane Smith',
              'Pending'
            )}
          >
            <View style={styles.payoutDetails}>
              <Text style={styles.payoutAmount}>$324.15</Text>
              <Text style={styles.payoutDate}>Initiated Apr 01, 2024</Text>
              <View style={styles.calendar}>
                <Entypo name="calendar" size={20} color="black" />
                <View style={styles.icons}>
                  <Text style={styles.payoutType}>Weekly payment</Text>
                  <Ionicons name="chevron-forward" size={20} color="black" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem1}>
          <Ionicons name="card" size={24} color="black" />
          <Text style={styles.menuItemText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Help')}>
          <Ionicons name="help-circle" size={24} color="black" />
          <Text style={styles.menuItemText}>Help</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  balanceContainer: {
    backgroundColor: '#E7EEFF',
    borderRadius: 10,
    alignItems: 'flex-start',
    marginBottom: 20,
    marginVertical: -15,
    height: 170,
    justifyContent: "center",
  },
  balanceText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 125,
  },
  payoutText: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    fontWeight: "400",
  },
  calendar: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cashOutButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 28,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginVertical: -48,
    flexDirection: "row",
    gap: 5,
  },
  cashOutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  recentPayoutsContainer: {
    marginBottom: 20,
  },
  recentPayoutsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  payoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  payoutDetails: {
    flexDirection: 'column',
  },
  payoutAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  payoutDate: {
    fontSize: 14,
    color: '#555',
  },
  payoutType: {
    fontSize: 14,
    color: '#3656FF',
    backgroundColor: "#DBE1FF",
    padding: 6,
    borderRadius: 7,
    textAlign: "center",
    marginLeft: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  menuItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 16,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  balance: {
    fontWeight: "700",
  },
  content: {
    marginLeft: 15,
    marginTop: -40,
  },
  balanceItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '95%',
  },
  recent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recentSeeall: {
    fontSize: 14,
    color: '#3656FF',
  },
  header: {
    flexDirection: "row",
    marginVertical: 40,
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 10,
    gap: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 60,
    marginTop: 20,
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 10,
    left: -11,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.gray,
    borderWidth: 1,
  },
});

export default WalletScreen;
