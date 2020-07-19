import React from 'react';
import { View, Text, FlatList, Button, Linking } from 'react-native';
export default function ContactList({ contacts }) {
  const call = (contact) => {
    console.warn(contact.phoneNumbers[0].number);
    const link = `tel:${contact.phoneNumbers[0].number}`;
    Linking.canOpenURL(link)
      .then((supported) => {
        console.warn('supported', supported);
        Linking.openURL(link);
      })
      .catch(console.error);
  };
  return (
    <View>
      <Text>Contact List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button title={item.name} onPress={() => call(item)} />
        )}
      />
    </View>
  );
}
