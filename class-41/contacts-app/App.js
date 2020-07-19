import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';
import ContactList from './contact-list.js';
export default function App() {
  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);
  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    console.warn('Status', status);
    setPermissions(status === 'granted' ? true : false);
  };
  const getContacts = async () => {
    const contactList = await Contacts.getContactsAsync();
    // console.warn(contactList);
    setContacts(contactList.data);
  };
  useEffect(() => {
    getPermissions();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Contact App</Text>
      <Button title="Get Contacts" onPress={getContacts} />
      <ContactList contacts={contacts} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
