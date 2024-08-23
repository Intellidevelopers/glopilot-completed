// BottomNavigation.js
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../src/utils/colors';

const BottomNavigation = ({ navigation }) => {
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomePage')}>
        <AntDesign name="home" color="#4460EF" size={24} />
        <Text style={styles.navTextActive}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>
        <AntDesign name="calendar" color="#000" size={24} />
        <Text style={styles.navText}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Statistics')}>
        <Ionicons name="stats-chart-outline" color="#000" size={24} />
        <Text style={styles.navText}>Statistics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Messages')}>
        <AntDesign name="message1" color="#000" size={24} />
        <Text style={styles.navText}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Account')}>
        <MaterialCommunityIcons name="account-circle-outline" color="#000" size={24} />
        <Text style={styles.navText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
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
};

export default BottomNavigation;
