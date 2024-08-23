import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/colors";
import { AntDesign } from '@expo/vector-icons';
import AddListingPhotoScreen from './AddListingScreen';

function HelpCenterScreen({ navigation }) {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
            </TouchableOpacity>
        <Text style={styles.headerTitle}>Help</Text>
        </View>

      <Text style={styles.allTopics}>Account & App</Text>

      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.itemText}>Reset your password</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.chevronIcon} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('PaymentsScreen')}>
        <Text style={styles.itemText}>Turn on email updates</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.chevronIcon} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('DeleteAccount')}>
        <Text style={styles.itemText}>Delete Host Account</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.chevronIcon} />
      </TouchableOpacity>

      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('AccountInfo')}>
        <Text style={styles.itemText}>Updating account information</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.chevronIcon} />
      </TouchableOpacity>


      <View style={{flexDirection: 'row', width: 355, alignItems: 'center', marginLeft: -14, marginBottom: 15}}>
        <View style={{flex: 1, width: 20, height: 1, backgroundColor: colors.gray}} />
      </View>

      <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('BankInfo')}>
        <Text style={styles.itemText}>Updating bank information</Text>
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
