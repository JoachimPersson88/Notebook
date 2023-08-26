//CustomButton.js

// Importerar nödvändiga komponenter från react-native.
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

// CustomButton är en återanvändbar knappkomponent.
// Den tar två props: "title" för texten som ska visas på knappen,
// och "onPress" för den funktion som ska köras när knappen trycks på.
const CustomButton = ({ title, onPress }) => {
  return (
    // Pressable är den grundläggande komponenten som används för att hantera tryckhändelser.
    // Vi lägger till styling med "styles.button" och sätter upp en onPress-hanterare.
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

// StyleSheet.create används för att definiera en uppsättning av stilar som kan
// återanvändas i komponenten. Det är mer prestandaeffektivt än att använda inline-styling.
const styles = StyleSheet.create({
  // Styling för själva knappkomponenten.
  button: {
    padding: 12,
    backgroundColor: '#007BFF', // Bakgrundsfärg för knappen.
    borderRadius: 8, // Rundade hörn.
    alignItems: 'center', // Centrerar texten horisontellt.
  },
  // Styling för texten på knappen.
  text: {
    color: '#FFF', // Textfärg.
    fontSize: 16, // Textstorlek.
  },
});

export default CustomButton;
