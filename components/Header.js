import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../utils/colors";

const Header = () => {
  return (
    <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Notification Settings</Text>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
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
})