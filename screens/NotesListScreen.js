import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function NotesListScreen({ navigation }) {
  const [notes, setNotes] = useState([
    { id: '1', content: 'Första anteckningen' },
    { id: '2', content: 'Andra anteckningen' }
  ]);

  return (
    <View style={styles.container}>
      <FlatList 
        data={notes}
        renderItem={({ item }) => (
          <Text>{item.content}</Text>
        )}
        keyExtractor={item => item.id}
      />
      <Button title="Lägg till" onPress={() => navigation.navigate('NoteEditor')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
