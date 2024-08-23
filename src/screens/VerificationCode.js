import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const VerificationCodeScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text) {
      // Focus the next input
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    } else {
      // Focus the previous input if deleting
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back-outline" color="#000" size={25} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>
        We sent you the 4-digit code at Femi******@gmail.com. Please enter the code below to verify your account.
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              styles.otpInput,
              { borderColor: otp[index] ? '#4460EF' : '#E6E6E6' },
            ]}
            value={digit}
            onChangeText={(text) => handleInputChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => inputs.current[index] = ref}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        ))}
      </View>

      <Text style={styles.resendText}>Didn't get a code? <Text style={styles.resendLink}>Resend</Text></Text>

      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Success')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
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
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    color: '#333',
    marginBottom: 20,
    fontWeight: "500"
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
    color: '#000',
  },
  resendText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  resendLink: {
    color: '#4460EF',
    fontWeight: '700',
  },
  continueButton: {
    backgroundColor: '#4460EF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default VerificationCodeScreen;
