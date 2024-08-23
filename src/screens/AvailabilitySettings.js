import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton, Menu, Provider } from 'react-native-paper';
import { colors } from '../utils/colors';

const AvailabilitySettings = ({ navigation }) => {
  const [checked, setChecked] = useState('yes');
  const [advanceNoticeVisible, setAdvanceNoticeVisible] = useState(false);
  const [bookingTimeframeVisible, setBookingTimeframeVisible] = useState(false);
  const [advanceNotice, setAdvanceNotice] = useState('1 day before');
  const [bookingTimeframe, setBookingTimeframe] = useState('6 months in advance');

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Availability Settings</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Advance Notice</Text>
          <Text style={styles.description}>
            What is the required notice period before a guest's arrival?
          </Text>
          <Menu
            visible={advanceNoticeVisible}
            onDismiss={() => setAdvanceNoticeVisible(false)}
            anchor={
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setAdvanceNoticeVisible(true)}
              >
                <Text style={styles.menuButtonText}>{advanceNotice}</Text>
                <Ionicons name="chevron-down" size={24} color="black" />
              </TouchableOpacity>
            }
          >
            <Menu.Item 
              onPress={() => {
                setAdvanceNotice('1 day before');
                setAdvanceNoticeVisible(false);
              }} 
              title="1 day before" 
            />
            <Menu.Item 
              onPress={() => {
                setAdvanceNotice('2 days before');
                setAdvanceNoticeVisible(false);
              }} 
              title="2 days before" 
            />
            <Menu.Item 
              onPress={() => {
                setAdvanceNotice('3 days before');
                setAdvanceNoticeVisible(false);
              }} 
              title="3 days before" 
            />
          </Menu>

          <View style={styles.divider} />

          <Text style={styles.title}>
            Can a guest request a reservation without a day's notice?
          </Text>
          <View style={styles.optionRow}>
            <RadioButton
              value="yes"
              status={checked === 'yes' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('yes')}
              color="#4460EF"
              uncheckedColor="#C0C0C0"
            />
            <Text style={styles.optionText}>Yes</Text>
          </View>
          <View style={styles.optionRow}>
            <RadioButton
              value="no"
              status={checked === 'no' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('no')}
              color="#4460EF"
              uncheckedColor="#C0C0C0"
            />
            <Text style={styles.optionText}>No</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.title}>Booking Timeframe</Text>
          <Text style={styles.description}>
            Select the timeframe for how early guests can reserve your space.
          </Text>
          <Menu
            visible={bookingTimeframeVisible}
            onDismiss={() => setBookingTimeframeVisible(false)}
            anchor={
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setBookingTimeframeVisible(true)}
              >
                <Text style={styles.menuButtonText}>{bookingTimeframe}</Text>
                <Ionicons name="chevron-down" size={24} color="black" />
              </TouchableOpacity>
            }
          >
            <Menu.Item 
              onPress={() => {
                setBookingTimeframe('3 months in advance');
                setBookingTimeframeVisible(false);
              }} 
              title="3 months in advance" 
            />
            <Menu.Item 
              onPress={() => {
                setBookingTimeframe('6 months in advance');
                setBookingTimeframeVisible(false);
              }} 
              title="6 months in advance" 
            />
            <Menu.Item 
              onPress={() => {
                setBookingTimeframe('1 year in advance');
                setBookingTimeframeVisible(false);
              }} 
              title="1 year in advance" 
            />
          </Menu>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Save pressed')}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: "row",
    marginVertical: 40,
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 10,
    gap: 15
  },
  content: {
    padding: 16,
    marginVertical: -30
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 30,
    marginTop: 20
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '600'
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    fontWeight: "400"
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 16,
  },
  menuButtonText: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    marginVertical: 100
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  BackButton: {
    backgroundColor: colors.white,
    marginTop: 10,
    left: 5,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.gray,
    borderWidth: 1
  },
});

export default AvailabilitySettings;
