import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';

function PrivacyScreen({navigation}) {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy</Text>
      </View>

      <Text style={styles.privacy}>Privacy</Text>
      <View style={styles.settingRow}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIconsIcon
            name="shield-lock"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </View>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>Privacy Center</Text>
          <Text style={styles.settingDescription}>
            Take control of your privacy and learn{"\n"}how we protect it.
          </Text>
        </View>
        <EntypoIcon name="chevron-thin-right" style={styles.icon3}></EntypoIcon>
      </View>
      <View style={styles.dividers}></View>
      <Text style={styles.sectionTitle}>Ads & Data</Text>
      <View style={styles.settingRow}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIconsIcon
            name="flash-outline"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
        </View>
        <View style={styles.settingText}>
         <TouchableOpacity onPress={() => navigation.navigate('Offers')}>
         <Text style={styles.settingTitle}>Offers and Promos from Glopilots</Text>
          <Text style={styles.settingDescription}>
            Take control of your privacy and learn{"\n"}how we protect it.
          </Text>
         </TouchableOpacity>
        </View>
        <EntypoIcon name="chevron-thin-right" style={styles.icon3}></EntypoIcon>
      </View>
      <View style={styles.dividers}></View>
      <Text style={styles.sectionTitle}>Account Security</Text>
      <View style={styles.settingRow}>
        <View style={styles.iconContainer}>
        <MaterialCommunityIconsIcon
            name="account-remove"
            style={styles.icon5}
          ></MaterialCommunityIconsIcon>
        </View>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>Account Deletion</Text>
        </View>
        <EntypoIcon name="chevron-thin-right" style={styles.icon3}></EntypoIcon>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECEFFD",
    borderRadius: 50,
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 27,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
  },
  privacy: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 31,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  settingText: {
    flex: 1,
    marginLeft: 10,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: "700",
  },
  settingDescription: {
    marginTop: 5,
    color: "#666",
  },
  icon2: {
    color: "rgba(68,96,239,1)",
    fontSize: 27,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 21,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 20,
  },
  dividers: {
    width: "112%",
    height: 8,
    backgroundColor: "#E6E6E6",
    marginTop: 20,
    alignSelf: "center"
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
  },
  icon4: {
    color: "rgba(68,96,239,1)",
    fontSize: 27,
  },
  icon5: {
    color: "rgba(68,96,239,1)",
    fontSize: 27,
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
    marginLeft: 72,
  },
});

export default PrivacyScreen;
