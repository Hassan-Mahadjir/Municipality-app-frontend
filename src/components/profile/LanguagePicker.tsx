import React from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface LanguagePickerProps {
  visible: boolean;
  onClose: () => void;
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({ visible, onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>('Select Language');

  const languages: string[] = [
    'English',
    'Turkish',
    'Persian',
    'Arabic',
    'Urdu',
    'Greek',
    'Russian',
  ];

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
    onClose(); // Close the picker after selection
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={languages}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleSelectLanguage(item)}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#F1722A'
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1722A',
  },
  itemText: {
    fontSize: 18,
  },
});

export default LanguagePicker;
