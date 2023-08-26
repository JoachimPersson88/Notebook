//NotesListScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import NoteItem from './NoteItem';  // Glöm inte importera NoteItem om det behövs

const NotesListScreen = ({ route, navigation }) => {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    if (route.params?.newNote) {
      setNotes(prevNotes => [...prevNotes, route.params.newNote]);
    }
  }, [route.params?.newNote]);

  const deleteNote = (index) => {
    setNotes(prevNotes => {
      return prevNotes.filter((note, i) => i !== index);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <NoteItem 
            title={item.title}
            content={item.content}
            onDelete={() => deleteNote(index)}
          />
        )}
      />
      <Button title="Lägg till Anteckning" onPress={() => navigation.navigate('NoteEditor')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default NotesListScreen;
