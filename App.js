//App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotesListScreen from './screens/NotesListScreen';
import NoteEditorScreen from './screens/NoteEditorScreen';

const Stack = createStackNavigator();

// Huvudkomponenten som styr navigationen i appen
export default function App() {
  return (
    <NavigationContainer>  
      <Stack.Navigator initialRouteName="NotesList">
        <Stack.Screen name="NotesList" component={NotesListScreen} />
        <Stack.Screen name="NoteEditor" component={NoteEditorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
