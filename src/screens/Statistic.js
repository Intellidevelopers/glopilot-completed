import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const StatisticScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Statistics</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={styles.starRate}>
            <FontAwesome name="star" size={24} color="#FFD700" />
            <Text style={styles.statValue}>4.6</Text>
            </View>
            <Text style={styles.statLabel}>Overall Ratings</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>$9,050</Text>
            <Text style={styles.statLabel}>April earnings</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center', marginBottom: 30}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.additionalStats}>
          <View style={styles.additionalStatItem}>
            <Text style={styles.additionalStatValue}>100%</Text>
            <Text style={styles.additionalStatLabel}>Response rate</Text>
          </View>
          <View style={styles.additionalStatItem}>
            <TouchableOpacity onPress={ () => navigation.navigate('ViewsBooking')}>
            <Text style={styles.additionalStatValue}>790</Text>
            <Text style={styles.additionalStatLabel}>30-days views</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.additionalStatItem}>
            <Text style={styles.additionalStatValue}>10</Text>
            <Text style={styles.additionalStatLabel}>30-days bookings</Text>
          </View>
        </View>
        <TouchableOpacity onPress={ () => navigation.navigate('TransactionHistory')}>
        <View style={styles.transactionHistory}>
          <Text style={styles.transactionHistoryText}>View transaction history</Text>
        </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center', marginBottom: -8}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>Tips</Text>
          <Text style={styles.tipsText}>You're good to go for now! Keep an eye out for more tips in the future.</Text>
        </View>

        <View style={{flexDirection: 'row', width: 330, alignItems: 'center'}}>
          <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    marginVertical: 60,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  starRate:{
    flexDirection: "row",
    alignSelf: "flex-start"
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: "flex-start"
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
    fontWeight: "500"
  },
  additionalStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  additionalStatItem: {
    alignItems: 'center',
  },
  additionalStatValue: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: "flex-start"
  },
  additionalStatLabel: {
    fontSize: 14,
    color: '#555',
    fontWeight: "500"
  },
  transactionHistory: {
    alignItems: 'center',
    marginBottom: 20,
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
  },
  transactionHistoryText: {
    color: colors.primary,
  },
  tipsContainer: {
    marginTop: 20,
    marginBottom: 20
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tipsText: {
    fontSize: 14,
    color: '#555',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  navTextActive: {
    fontSize: 12,
    color: '#4460EF',
  },
});

export default StatisticScreen;
