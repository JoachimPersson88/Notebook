//NoteEditorScreen.js

import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

const NoteEditorScreen = ({ route, navigation }) => {
  
  const [title, setTitle] = useState(route.params?.note?.title || '');
  const [content, setContent] = useState(route.params?.note?.content || '');

  const saveNote = () => {
    const newNote = { title, content };
    navigation.navigate('NotesList', { newNote });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={styles.titleInput}
          placeholder="Anteckningens titel"
          value={title}
          onChangeText={setTitle}
          returnKeyType="next"
        />
        <TextInput
          style={styles.contentInput}
          placeholder="Anteckningens innehåll"
          multiline
          value={content}
          onChangeText={setContent}
          returnKeyType="done"
        />
        <Button title="Spara" onPress={saveNote} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  titleInput: {
    fontSize: 24,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  contentInput: {
    fontSize: 18,
    flex: 1,
  },
});

export default NoteEditorScreen;
