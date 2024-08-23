import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VerificationScreen = ({ navigation, route }) => {
  const { phoneNumber } = route.params;
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChangeText = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to the next input
    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0 && code[index] === '') {
      inputs.current[index - 1].focus();
    }
  };

  const handleContinue = () => {
    if (code.every(digit => digit !== '')) {
      navigation.navigate('PhoneScreen');
    } else {
      Alert.alert('Invalid Code', 'Please enter the full verification code.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={25} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>
        We sent you the 4-digit code at <Text style={styles.phone}>{phoneNumber}</Text>. Please enter the code below to verify your account.
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={[
              styles.codeInput,
              { borderColor: digit ? '#4460EF' : '#ccc' }
            ]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handleChangeText(index, value)}
            onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
            value={digit}
          />
        ))}
      </View>

      <Text style={styles.resendText}>
        Didn't get a code? <Text style={styles.resendLink}>Resend</Text>
      </Text>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    fontWeight: "600",
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: '20%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  resendText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: "center",
  },
  resendLink: {
    color: '#4460EF',
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#4460EF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  phone:{
    fontWeight: "700",
    color: "black"
  }
});

export default VerificationScreen;
