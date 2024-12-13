import { View, Text, TextInput, FlatList, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'John', content: 'Hello there!', time: '10:30 AM' },
    { id: '2', sender: 'You', content: 'Hey! How are you?', time: '10:31 AM' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: (messages.length + 1).toString(),
        sender: 'You',
        content: newMessage,
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.content}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Chat Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat with John</Text>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.messagesList}
      />

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <Button title="Send" onPress={sendMessage} color="#15133C" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#15133C',  // Dark background for header
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 22,
    color: '#fff',  // White color for header text
    fontWeight: 'bold',
  },
  messagesList: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 70,  // Leave space for the input area
  },
  messageContainer: {
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#f9f9f9',  // Slightly lighter background for messages
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sender: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#15133C',  // Sender's name color
  },
  message: {
    fontSize: 14,
    marginVertical: 5,
    color: '#333',  // Message text color
  },
  time: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderRadius: 25,
    paddingLeft: 15,
    backgroundColor: '#f0f0f0',
    height: 40,
    fontSize: 16,
    color: '#333',
  },
});
