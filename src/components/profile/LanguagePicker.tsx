import React, { useState } from 'react';
import {
	View,
	Text,
	Modal,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from '@/styles/languagePicker';
import SelectLanuageComponent from '@/components/profile/SelectLanguage';
import { useTranslation } from 'react-i18next';
interface LanguagePickerProps {
	visible: boolean;
	onClose: () => void;
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({
	visible,
	onClose,
}) => {
	return (
		<Modal
			transparent={true}
			visible={visible}
			animationType='slide'
			onRequestClose={onClose}
		>
			<View style={styles.modalContainer}>
				<View style={styles.modalContent}>
					<TouchableOpacity onPress={onClose}>
						<Icon name='close' size={24} color='#000' style={{ left: '90%' }} />
					</TouchableOpacity>
					<SelectLanuageComponent onClose={onClose} />
					{/* <TouchableOpacity style={styles.closeButton}>
						<Text style={styles.closeButtonText}>Close</Text>
					</TouchableOpacity> */}
				</View>
			</View>
		</Modal>
	);
};

export default LanguagePicker;
