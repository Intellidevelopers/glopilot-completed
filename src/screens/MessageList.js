import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


const messages = [
  {
    id: '1',
    name: 'Matt',
    message: 'Thanks for the info, see you on May 16...',
    timestamp: '06:32 PM',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    title: 'Double-Story House with Swimming Pool'
  },
  {
    id: '2',
    name: 'Imobighe',
    message: 'Please let me know if there is any discount...',
    timestamp: '03:15 PM',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    title: 'Double-Story House with Swimming Pool'
  },
  {
    id: '3',
    name: 'Matt',
    message: 'Thanks for the info, see you on May 16...',
    timestamp: '06:32 PM',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    title: 'Double-Story House with Swimming Pool'
  },
  {
    id: '4',
    name: 'Imobighe',
    message: 'Please let me know if there is any discount...',
    timestamp: '03:15 PM',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    title: 'Double-Story House with Swimming Pool'
  },
  {
    id: '5',
    name: 'Matt',
    message: 'Thanks for the info, see you on May 16...',
    timestamp: '06:32 PM',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    title: 'Double-Story House with Swimming Pool'
  },
  {
    id: '6',
    name: 'Imobighe',
    message: 'Please let me know if there is any discount...',
    timestamp: '03:15 PM',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    title: 'Double-Story House with Swimming Pool'
  },
  {
    id: '7',
    name: 'Matt',
    message: 'Thanks for the info, see you on May 16...',
    timestamp: '06:32 PM',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    title: 'Double-Story House with Swimming Pool'
  },
  {
    id: '8',
    name: 'Imobighe',
    message: 'Please let me know if there is any discount...',
    timestamp: '03:15 PM',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    title: 'Double-Story House with Swimming Pool'
  },
  // Add more messages here if needed
];

const MessageScreen = ({navigation}) => {
  const renderMessageItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Conversation')}>
        <View style={styles.messageItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.messageName}>{item.name}</Text>
          <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.messageTitle}>{item.title}</Text>
        <View style={styles.divider} />
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <Text style={styles.subTitle}>All messages</Text>
        <View style={styles.divider} />
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 10,
    marginVertical: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 16,
    color: '#545454',
    fontWeight: "600"
  },
  messageList: {
    paddingHorizontal: 20,
  },
  messageItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
    paddingBottom: 10,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  messageName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageTimestamp: {
    fontSize: 12,
    color: '#888',
  },
  messageText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
    fontWeight: "500"
  },
  messageTitle: {
    fontSize: 12,
    color: '#888',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    width: '150%', // Adjust this to control the width of the divider
    marginTop: 10,
    alignSelf: "center",
    marginLeft: -60
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  navTextActive: {
    fontSize: 12,
    color: '#4460EF',
  },
});

export default MessageScreen;