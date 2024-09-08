import React from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from '@/styles/languagePicker';

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

export default LanguagePicker;
