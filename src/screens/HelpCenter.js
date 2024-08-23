import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/colors";
import { AntDesign } from '@expo/vector-icons';

function HelpCenterScreen({ navigation }) {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
            </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Center</Text>
        <TouchableOpacity style={styles.searchButton}>
            <AntDesign name="search1" size={25} style={styles.icon4} />
            </TouchableOpacity>
        </View>

      <View style={styles.searchContainer}>
        <FeatherIcon name="search" style={styles.iconSearch} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <Text style={styles.allTopics}>All Topics</Text>

      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('ManageListingsScreen')}>
        <FeatherIcon name="menu" style={styles.itemIcon} />
        <Text style={styles.itemText}>Manage Listings</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.chevronIcon} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('PaymentsScreen')}>
        <FeatherIcon name="dollar-sign" style={styles.itemIcon} />
        <Text style={styles.itemText}>Payments</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.chevronIcon} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('Help')}>
        <FeatherIcon name="settings" style={styles.itemIcon} />
        <Text style={styles.itemText}>Account & App</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.chevronIcon} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('AccountSettingsScreen')}>
        <FeatherIcon name="user" style={styles.itemIcon} />
        <Text style={styles.itemText}>Account Settings</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.chevronIcon} />
      </TouchableOpacity>


      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <Text style={styles.support}>Support</Text>
      
      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('Support')}>
        <FeatherIcon name="phone" style={styles.itemIcon} />
        <Text style={styles.itemText}>Call Support</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.chevronIcon} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 30
  },
  backButton: {
    padding: 10,
  },
  helpCenter: {
    fontSize: 20,
    fontWeight: "700",
  },
  searchButton: {
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.gray,
   borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  iconSearch: {
    fontSize: 24,
    color: "#999",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
    padding: 10,
  },
  allTopics: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  itemIcon: {
    fontSize: 24,
    color: "#333",
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#0d1317",
  },
  chevronIcon: {
    fontSize: 21,
    color: "#333",
  },
  support: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 1,
    marginBottom: 15
  },
  header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
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
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 63,
      },
      searchButton:{
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E6E6E6',
        marginLeft: 60
      }
});

export default HelpCenterScreen;
