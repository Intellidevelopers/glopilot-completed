import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomBarchart from '../components/CustomBarchart';
import { colors } from '../src/utils/colors';

const chartData = [
  { label: 'Jan', value: 10000, color: colors.primary  },
  { label: 'Feb', value: 8000, color: colors.primary  },
  { label: 'Mar', value: 6000, color: colors.primary  },
  { label: 'Apr', value: 9000, color: colors.primary  },
  { label: 'May', value: 10000, color: colors.primary  },
  { label: 'Jun', value: 2000, color: colors.primary  },
];

const HomePageScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (month) => {
    setSelectedMonth(month);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Income Statistics</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.dropdownText}>{selectedMonth}</Text>
          <Ionicons name="caret-down" size={16} color="black" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={chartData.map(item => item.label)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <CustomBarchart data={chartData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  dropdownText: {
    marginRight: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  modalItemText: {
    fontSize: 16,
  },
});

export default HomePageScreen;
