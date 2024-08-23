import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';

const markedDates = {
  '2024-04-01': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-02': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-03': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-04': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-05': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-06': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-07': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-08': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-09': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-10': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-11': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-12': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-13': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-14': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-15': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-16': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-17': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-18': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-19': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-20': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-21': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-22': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-23': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-24': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-25': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-26': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-27': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-28': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-04-30': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-01': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-02': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-03': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-04': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-05': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-06': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-07': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-08': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-09': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-10': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-11': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-12': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-13': { marked: true, dotColor: colors.primary, color: colors.primary },
  '2024-05-14': { marked: true, dotColor: colors.primary, color: colors.primary },
};

const CalendarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
      </View>
      <CalendarList
        // Initially visible month. Default = Date()
        current={'2024-04-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2025-12-31'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onVisibleMonthsChange={(months) => {
          console.log('visible months changed', months);
        }}
        // Specify style for calendar container element. Default = {}
        style={styles.calendar}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: '#ffffff',
          todayTextColor: colors.primary,
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: colors.primary,
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'black',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
        markedDates={markedDates}
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
  calendar: {
    marginBottom: 20,
    marginLeft: -20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#ffffff',
  },
  tabButton: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: colors.gray,
  },
  activeTabLabel: {
    color: colors.primary,
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

export default CalendarScreen;
