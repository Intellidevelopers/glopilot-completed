import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TextInput, TouchableOpacity, Keyboard, Linking } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { colors } from '../utils/colors';

const messages = [
  {
    id: '1',
    sender: 'other',
    text: 'Hi, Please let me know if there is any discount at your place?',
    timestamp: 'May 06',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: '2',
    sender: 'me',
    text: 'Can you please let me know when do you want to come?',
  },
  {
    id: '3',
    sender: 'other',
    text: 'From 16 May to 24 May?',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: '4',
    sender: 'me',
    text: 'Yes, You can get 10% discount on these dates.',
  },
  {
    id: '5',
    sender: 'other',
    text: 'Great! Thanks for the info.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: '6',
    sender: 'other',
    text: 'Do you have internet at your place?',
    timestamp: 'May 14',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: '7',
    sender: 'me',
    text: 'Yes',
  },
  {
    id: '8',
    sender: 'other',
    text: 'Thanks for the info, see you on May 16',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
];

const suggestions = ["Can you provide more details?", "What is the best time to contact?", "Is there anything else I can assist with?"];

const ConversationScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState('');
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const handleInputChange = (text) => {
    setInputText(text);
    setIsSend(text.length > 0);
  };

  const handleSendPress = async () => {
    if (isSend) {
      // Handle sending message
      console.log("Message sent:", inputText);
      setInputText('');
      setIsSend(false);
      Keyboard.dismiss();
    } else {
      // Handle voice recording
      if (isRecording) {
        await stopRecording();
      } else {
        await startRecording();
      }
      setIsRecording(!isRecording);
    }
  };

  const startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
  };

  const handlePhoneCall = () => {
    const phoneNumber = 'tel:+2348088886823'; // Replace with the actual phone number
    Linking.openURL(phoneNumber).catch(err => console.error('Error making phone call:', err));
  };

  const renderMessageItem = ({ item }) => (
    <View style={item.sender === 'me' ? styles.myMessageItem : styles.otherMessageItem}>
      {item.sender === 'other' && <Image source={{ uri: item.avatar }} style={styles.avatar} />}
      <View style={styles.messageContent}>
        {item.timestamp && <Text style={styles.timestamp}>{item.timestamp}</Text>}
        <View style={item.sender === 'me' ? styles.myMessageBubble : styles.otherMessageBubble}>
          <Text style={item.sender === 'me' ? styles.myMessageText : styles.otherMessageText}>
            {item.text}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleInputChange(item)} style={styles.suggestionItem}>
      <Text style={styles.suggestionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Matt</Text>
        <TouchableOpacity style={styles.callButton} onPress={handlePhoneCall}>
          <FontAwesome name="phone" size={24} color="#4460EF" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeader}>
        Keep your account safe - never share personal information in this conversation.
      </Text>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />
   <View>
<FlatList
data={suggestions}
renderItem={renderSuggestionItem}
keyExtractor={(item, index) => index.toString()}
horizontal
showsHorizontalScrollIndicator={false}
contentContainerStyle={styles.suggestionList}
/>
</View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
          {isSend ? (
            <FontAwesome name="send" size={24} color="#fff" />
          ) : (
            <FontAwesome name="microphone" size={24} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
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
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  callButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 26,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  subHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 12,
    color: '#888',
    backgroundColor: '#f9f9f9',
  },
  messageList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  myMessageItem: {
    flexDirection: 'row-reverse',
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  otherMessageItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  messageContent: {
    maxWidth: '75%',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 5,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
  },
  myMessageBubble: {
    backgroundColor: '#4460EF',
    borderRadius: 10,
    padding: 10,
  },
  otherMessageBubble: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
  },
  myMessageText: {
    color: '#fff',
  },
  otherMessageText: {
    color: '#000',
  },
 suggestionList: {
paddingHorizontal: 10,
paddingVertical: 5,
borderBottomWidth: 1,
borderBottomColor: '#ddd',
},
suggestionItem: {
backgroundColor: colors.gray,
padding: 19,
borderRadius: 20,
marginHorizontal: 5,
alignItems: "center",
},
suggestionText: {
color: '#000',
textAlign: "center",
},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopColor: '#ddd',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.gray,
    marginHorizontal: 10,
  },
  sendButton: {
    backgroundColor: '#4460EF',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  plusButton: {
    backgroundColor: colors.gray,
    padding: 11,
    borderRadius: 7,
  },
});

export default ConversationScreen;
