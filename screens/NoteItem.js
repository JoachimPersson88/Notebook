//NoteItem.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const NoteItem = ({ title, content, onPress, onDelete }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>{title}</Text>
        <Text style={styles.noteContent}>{content}</Text>
        <Button title="Ta bort" onPress={onDelete} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noteContent: {
    fontSize: 14,
  },
});

export default NoteItem;

