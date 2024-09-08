import React from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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
              ListHeaderComponent={
                <View style={styles.headerRow}>
                  <TouchableOpacity style={{ flex: 1, marginRight: -20 }} onPress={() => handleSelectLanguage(languages[0])}>
                    <Text style={styles.itemText}>{languages[0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onClose}>
                    <Icon name="close" size={24} color="#000" />
                  </TouchableOpacity>
                </View>
              }
              data={languages.slice(1)}
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
    justifyContent: 'flex-end', // Align at the bottom of the screen
    alignItems: 'center',
    marginBottom: '13%'
  },
  modalContent: {
    width: '90%',
    height: '34%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // Add shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2, // for Android
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LanguagePicker;
