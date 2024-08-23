import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors'; // Adjust the path as needed

const AboutScreen = ({ navigation }) => {
  const [summary, setSummary] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxCharCount = 500;

  const handleSummaryChange = (text) => {
    if (text.length <= maxCharCount) {
      setSummary(text);
      setCharCount(text.length);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color="#000" size={25} />
      </TouchableOpacity>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>Tell guests about your place</Text>
      <Text style={styles.subtitle}>
        Share a short summary of your place, focusing on what makes it special, the neighborhood's highlights, and how you'll engage with guests.
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Write a short summary about your place..."
        multiline
        value={summary}
        onChangeText={handleSummaryChange}
      />
      <Text style={styles.charCount}>{charCount}/{maxCharCount} remaining</Text>

      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('PlaceNameScreen')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
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
    marginVertical: 10,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressBar: {
    width: '40%',
    height: '100%',
    backgroundColor: '#4460EF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    padding: 10,
    height: 168,
    textAlignVertical: 'top',
  },
  charCount: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    color: '#666',
  },
  nextButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 160,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AboutScreen;
