import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const ProfileEdit = ({ navigation }) => {
  const [name, setName] = useState('Femi Vanzekin');
  const [about, setAbout] = useState("I'm a 36 years old successful IT consultant by profession and passionate about travelling to new places. I love meeting people from different parts of the world, and I look forward to connecting with more people.");
  const [location, setLocation] = useState('California, USA');
  const [languages, setLanguages] = useState(['English', 'Spanish']);
  const [work, setWork] = useState('Entrepreneur');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newLanguage, setNewLanguage] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const addLanguage = () => {
    if (newLanguage.trim()) {
      setLanguages([...languages, newLanguage]);
      setNewLanguage('');
      setModalVisible(false);
    }
  };

  const removeLanguage = (index) => {
    const newLanguages = languages.filter((_, i) => i !== index);
    setLanguages(newLanguages);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.BackButton} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.secondary} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          <Image source={image ? { uri: image } : require('../assets/profile3.png')} style={styles.profileImage} />
          <View style={styles.iconContainer}>
            <Icon name="camera" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.divider} />
        <Text style={styles.label}>About</Text>
        <TextInput
          style={styles.inputs}
          multiline
          value={about}
          onChangeText={setAbout}
        />
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />
        <Text style={styles.label}>Languages</Text>
        <View style={styles.languageContainer}>
          {languages.map((lang, index) => (
            <View key={index} style={styles.languageChip}>
              <Text>{lang}</Text>
              <TouchableOpacity onPress={() => removeLanguage(index)}>
                <EvilIcons name="close" size={16} color="black" />
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
            <AntDesign name="plus" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Work</Text>
        <TextInput
          style={styles.inputWork}
          value={work}
          onChangeText={setWork}
        />
        
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Save pressed')}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Language</Text>
            <TextInput
              style={styles.modalInput}
              value={newLanguage}
              onChangeText={setNewLanguage}
            />
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={addLanguage}>
                <Text style={styles.modalButtonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 16,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'grey',
    borderRadius: 12,
    padding: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    color: "#545454",
  },
  inputs: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    fontSize: 16,
    fontWeight: "400",
    color: "#545454",
  },
  inputWork: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    fontSize: 16,
    fontWeight: "400",
    color: "#545454",
    marginBottom: 20
  },
  languageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  languageChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.gray
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: 40,
    height: 40,
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 40,
    alignItems: 'center',
    marginHorizontal: 10,
    gap: 55,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 22
  },
  BackButton: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.gray,
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 12,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginBottom: 12,
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
});

export default ProfileEdit;
