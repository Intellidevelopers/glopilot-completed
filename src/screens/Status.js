import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const StatusScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Status</Text>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.sectionTitle}>Listing Status</Text>
        <View style={styles.statusRow}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Listed</Text>
        </View>
        <Text style={styles.statusDescription}>
          Guests can find your listing in search results and then request or book available dates
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.actionsContainer}>
        <Text style={styles.changeTitle}>Change your listing status</Text>

        <Text style={styles.actionText}>Snooze</Text>
        <Text style={styles.actionDescription}>
            Temporarily remove your listing from search results for a specific duration
          </Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text  style={styles.actionButtonText}>Snooze</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.actionText}>Unlist</Text>
          <Text style={styles.actionDescription}>
            Remove your listing from search results
          </Text>
        <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Unlist</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.actionText}>Deactivate</Text>
          <Text style={styles.actionDescription}>
            Permanently remove your listing from Glopilots
          </Text>
        <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Deactivate</Text>
        </TouchableOpacity>
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
  statusContainer: {
    padding: 16,
    marginVertical: -30,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: '700',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#04AA6D',
    marginRight: 8,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    marginLeft: 19
  },
  actionsContainer: {
    paddingHorizontal: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  changeTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: 105,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    backgroundColor: colors.white
  },
  actionButtonText:{
    fontWeight: '500',
    color: '#545454'
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#0D1317'
  },
  actionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10
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

export default StatusScreen;
