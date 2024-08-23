import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccountProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Account</Text>

      <View style={styles.profileContainer}>
        <Image source={require('../assets/profile3.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>Femi Vanzekin</Text>
        <Text style={styles.profileEmail}>Femivanzekin@gmail.com</Text>
      </View>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={24} color="black" />
        <Text style={styles.menuText}>Your Profile</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="black" style={styles.chevron} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Earnings')}>
        <Ionicons name="wallet-outline" size={24} color="black" />
        <Text style={styles.menuText}>Wallet</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="black" style={styles.chevron} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('NotificationSettings')}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text style={styles.menuText}>Notification Settings</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="black" style={styles.chevron} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PrivacyCenter')}>
        <Ionicons name="lock-closed-outline" size={24} color="black" />
        <Text style={styles.menuText}>Privacy Center</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="black" style={styles.chevron} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Security')}>
        <Ionicons name="shield-checkmark-outline" size={24} color="black" />
        <Text style={styles.menuText}>Security</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="black" style={styles.chevron} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HelpCenter')}>
        <Ionicons name="help-circle-outline" size={24} color="black" />
        <Text style={styles.menuText}>Help Center</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="black" style={styles.chevron} />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.menuItem, styles.logout]} onPress={() => navigation.navigate('Logout')}>
        <Ionicons name="log-out-outline" size={24} color="red" />
        <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomePageScreen')}>
          <Ionicons name="home-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Cars')}>
          <Ionicons name="car-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AllBooking')}>
          <Ionicons name="calendar-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Earnings')}>
          <Ionicons name="cash-outline" size={24} color="#C5C5C5" />
          <Text style={styles.navButtonText}>Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AccountProfile')}>
          <Ionicons name="person-outline" size={24} color="#4460EF" />
          <Text style={styles.navButtonTextActive}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    color: 'gray',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
  },
  chevron: {
    marginLeft: 'auto',
  },
  logout: {
    marginTop: 10,
  },
  logoutText: {
    color: 'red',
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
    width: '100%',
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
  welcomeText: {
    marginTop: 50,
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 17,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'grey',
    borderRadius: 12,
    padding: 4,
  },
});

export default AccountProfile;
