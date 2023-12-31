//NotesListScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import NoteItem from './NoteItem';

// NotesListScreen är skärmen som visar en lista av anteckningar.
const NotesListScreen = ({ route, navigation }) => {
  // Håller en lokal state för anteckningarna
  const [notes, setNotes] = useState([]);
  
  // Uppdatera anteckningarna när en ny anteckning läggs till.
  useEffect(() => {
    if (route.params?.newNote) {
      setNotes(prevNotes => [...prevNotes, route.params.newNote]);
    }
  }, [route.params?.newNote]);

  // Funktion för att ta bort en anteckning baserat på dess index
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
       {/* Knapp för att navigera till NoteEditorScreen för att skapa en ny anteckning */}
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
