import {
	FlatList,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	Image,
} from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LANGUAGE_DATA } from '@/constants/language';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

interface SelectLanguageProps {
	onClose: () => void;
}

const selectLanguage: React.FC<SelectLanguageProps> = ({ onClose }) => {
	const [language, setLanguage] = useState('en');
	const { i18n } = useTranslation();

	const toggleLanguage = (locale: 'en' | 'tr') => {
		i18n.changeLanguage(locale);
	};

	const handleLanguageChange = (value: string) => {
		setLanguage(value);
		toggleLanguage(value as 'en' | 'tr');
		onClose(); // Close the modal after selecting a language
	};

	return (
		<FlatList
			data={LANGUAGE_DATA}
			keyExtractor={(item) => String(item.value)}
			renderItem={({ item }) => (
				<TouchableOpacity onPress={() => handleLanguageChange(item.value)}>
					<View style={styles.languageContainer}>
						<Image source={{ uri: item.image.uri }} style={styles.imageStyle} />
						<Text style={styles.text}>{item.lable}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default selectLanguage;

const styles = StyleSheet.create({
	imageStyle: {
		width: scale(20),
		height: verticalScale(20),
		paddingRight: 10,
	},
	generalStyle: {
		backgroundColor: '#ffff',
		borderRadius: 12,
	},
	text: {
		fontSize: moderateScale(16),
		textAlign: 'center',
		marginLeft: scale(100),
		marginBottom: verticalScale(10),
	},
	languageContainer: {
		marginHorizontal: scale(10),
		flexDirection: 'row',
		gap: scale(10),
	},
});
