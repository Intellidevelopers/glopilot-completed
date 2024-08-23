import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utils/colors'; // Adjust path according to your project structure

const CustomSwitch = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity onPress={() => onValueChange(!value)} style={styles.switchContainer}>
      <View style={[styles.switchTrack, value ? styles.switchTrackOn : styles.switchTrackOff]}>
        <View style={[styles.switchThumb, value ? styles.switchThumbOn : styles.switchThumbOff]} />
      </View>
    </TouchableOpacity>
  );
};

const NotificationSettings = () => {
  const navigation = useNavigation();
  const [remindersEnabled, setRemindersEnabled] = useState(false);
  const [guestMessagesEnabled, setGuestMessagesEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification Settings</Text>
      </View>

      <View style={styles.setting}>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>Reminders</Text>
          <Text style={styles.settingDescription}>
            Receive important notifications regarding your listings, reservations, and account activity.
          </Text>
        </View>
        <CustomSwitch
          value={remindersEnabled}
          onValueChange={setRemindersEnabled}
        />
      </View>

      <View style={styles.divider}></View>

      <View style={styles.setting}>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>Guest Messages</Text>
          <Text style={styles.settingDescription}>
            Keep in touch with your guests before and during your trip.
          </Text>
        </View>
        <CustomSwitch
          value={guestMessagesEnabled}
          onValueChange={setGuestMessagesEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 15,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E6E6E6',
    marginTop: 20,
  },
  switchContainer: {
    padding: 10,
  },
  switchTrack: {
    width: 50,
    height: 34, // Increased height for the track
    borderRadius: 95,
    justifyContent: 'center',
    padding: 5,
  },
  switchTrackOn: {
    backgroundColor: colors.primary,
  },
  switchTrackOff: {
    backgroundColor: colors.gray,
  },
  switchThumb: {
    width: 27,
    height: 27,
    borderRadius: 25,
  },
  switchThumbOn: {
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
  },
  switchThumbOff: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
  },
});

export default NotificationSettings;
