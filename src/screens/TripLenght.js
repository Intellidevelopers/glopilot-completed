import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton, Menu, Provider } from 'react-native-paper';
import { colors } from '../utils/colors';

const TripLength = ({ navigation }) => {
  const [checked, setChecked] = useState('review');
  const [minStayVisible, setMinStayVisible] = useState(false);
  const [maxStayVisible, setMaxStayVisible] = useState(false);
  const [minStay, setMinStay] = useState('2');
  const [maxStay, setMaxStay] = useState('28');

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Trip Length</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Minimum Stay (Nights)</Text>
          <Text style={styles.description}>Set minimum nights required for bookings.</Text>
          <Menu
            visible={minStayVisible}
            onDismiss={() => setMinStayVisible(false)}
            anchor={
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setMinStayVisible(true)}
              >
                <Text style={styles.menuButtonText}>{minStay}</Text>
                <Ionicons name="chevron-down" size={24} color="black" />
              </TouchableOpacity>
            }
          >
            
            <Menu.Item 
              onPress={() => {
                setMinStay('1');
                setMinStayVisible(false);
              }} 
              title="1" 
            />
            <Menu.Item 
              onPress={() => {
                setMinStay('2');
                setMinStayVisible(false);
              }} 
              title="2" 
            />
            <Menu.Item 
              onPress={() => {
                setMinStay('3');
                setMinStayVisible(false);
              }} 
              title="3" 
            />
          </Menu>
          <View style={styles.divider} />
          <Text style={styles.title}>Maximum Stay (Nights)</Text>
          <Text style={styles.description}>Set minimum nights required for bookings.</Text>
          <Menu
            visible={maxStayVisible}
            onDismiss={() => setMaxStayVisible(false)}
            anchor={
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setMaxStayVisible(true)}
              >
                <Text style={styles.menuButtonText}>{maxStay}</Text>
                <Ionicons name="chevron-down" size={24} color="black" />
              </TouchableOpacity>
            }
          >
            <Menu.Item 
              onPress={() => {
                setMaxStay('14');
                setMaxStayVisible(false);
              }} 
              title="14" 
            />
            <Menu.Item 
              onPress={() => {
                setMaxStay('28');
                setMaxStayVisible(false);
              }} 
              title="28" 
            />
            <Menu.Item 
              onPress={() => {
                setMaxStay('60');
                setMaxStayVisible(false);
              }} 
              title="60" 
            />
          </Menu>
          <View style={styles.divider} />

          <Text style={styles.title1}>For stays longer than 28 nights</Text>
          <View style={styles.optionRow}>
            <RadioButton
              value="review"
              status={checked === 'review' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('review')}
              color="#4A90E2"
              uncheckedColor="#C0C0C0"
            />
            <Text style={styles.optionText}>Review and approve reservation requests manually.</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.optionRow}>
            <RadioButton
              value="dont_allow"
              status={checked === 'dont_allow' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('dont_allow')}
              color="#4A90E2"
              uncheckedColor="#C0C0C0"
            />
            <Text style={styles.optionText}>Don't allow reservation requests.</Text>
          </View>
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
    marginLeft: 50,
    marginTop: 20
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '600',
  },
  title1: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: '600',
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
    marginBottom: 14,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "400"
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
    borderWidth: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
});

export default TripLength;
