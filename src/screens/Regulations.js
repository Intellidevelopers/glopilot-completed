import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const Regulations = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Regulations</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Regulations</Text>
        <Text style={styles.description}>
          Please complete these tasks as required by your local government.
        </Text>
        <View style={styles.itemContainer}>
          <Ionicons name="checkmark-circle" size={24} color="green" />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Registration number</Text>
            <Text style={styles.itemDescription}>
              It appears on your listing to inform guests that you've registered with your local government.
            </Text>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={() => console.log('Edit pressed')}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    gap: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 50,
    marginTop: 20,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 12,
    borderRadius: 8,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666666',
  },
  editButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 14,
    color: colors.primary,
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
});

export default Regulations;
