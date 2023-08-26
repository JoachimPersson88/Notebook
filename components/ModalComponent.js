//ModalComponent.js

import React from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ModalComponent = ({ isVisible, onClose, onConfirm }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text>Vill du verkligen radera denna anteckning?</Text>
            <View style={styles.buttonContainer}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Halvtransparent svart bakgrund
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,  // Skugga för Android
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default ModalComponent;
