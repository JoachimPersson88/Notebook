//ModalComponent.js

import React from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';

// ModalComponent är en återanvändbar modal komponent.
// Den tar tre props: "isVisible" för att styra om modalen är synlig eller ej,
// "onClose" för att stänga modalen, och "onConfirm" för att bekräfta åtgärden.
const ModalComponent = ({ isVisible, onClose, onConfirm }) => {
  return (
        // Modal är den grundläggande komponenten för att skapa modalfönster i React Native.
    <Modal
    animationType="slide"  // Animeringsstil när modalen öppnas/stängs.
    transparent={true}  // Modalen har en genomskinlig bakgrund.
    visible={isVisible}  // Kontrollerar om modalen är synlig eller inte.
    onRequestClose={onClose}  // Hanterare för när användaren vill stänga modalen (Android).
  >
    {/* TouchableWithoutFeedback används för att kunna stänga modalen genom att klicka utanför dess innehåll. */}
      <TouchableWithoutFeedback onPress={onClose}>
    {/* modalOverlay är det yttre skiktet av modalen med en halvgenomskinlig svart bakgrund. */}
        <View style={styles.modalOverlay}>          
    {/* modalContent är det inre skiktet där själva innehållet i modalen ligger. */}
          <View style={styles.modalContent}>
            <Text>Vill du verkligen radera denna anteckning?</Text>
    {/* buttonContainer innehåller alla knappar och lägger dem i en rad. */}
            <View style={styles.buttonContainer}>
    {/* Knappar för att avbryta, bekräfta, radera och stänga modalen. */}
              <Button title="Avbryt" onPress={onClose} />
              <Button title="Bekräfta" onPress={onConfirm} />
              <Button title="Radera" onPress={() => setModalVisible(true)} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default ModalComponent;
