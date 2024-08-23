import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';

const notifications = [
  {
    id: '1',
    message: "Congrats, You earned $30! Your friend Imobighe has just created an account. Invite more friends to earn more.",
    date: "03/04/2024",
  },
  {
    id: '2',
    message: "Congrats, You earned $30! Your friend Imobighe has just created an account. Invite more friends to earn more.",
    date: "03/04/2024",
  },
  {
    id: '3',
    message: "Congrats, You earned $30! Your friend Imobighe has just created an account. Invite more friends to earn more.",
    date: "03/04/2024",
  },
  {
    id: '4',
    message: "Congrats, You earned $30! Your friend Imobighe has just created an account. Invite more friends to earn more.",
    date: "03/04/2024",
  },
  {
    id: '5',
    message: "Congrats, You earned $30! Your friend Imobighe has just created an account. Invite more friends to earn more.",
    date: "03/04/2024",
  },
];

const NotificationScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.iconContainer}>
        <AntDesign name="staro" style={styles.icon} size={24} color="#ffffff" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginLeft: 60,
  },
  listContainer: {
    paddingBottom: 20,
    marginLeft: -10,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderColor: '#f0f0f0',
  },
  icon: {
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 20,
    marginTop: -40,
  },
  iconContainer: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold', // Added fontWeight here
  },
  notificationDate: {
    fontSize: 12,
    color: '#6c757d',
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
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.gray,
  },
});

export default NotificationScreen;
