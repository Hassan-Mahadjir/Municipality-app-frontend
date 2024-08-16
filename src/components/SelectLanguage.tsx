import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectCountry as SelectLanuageComponent } from 'react-native-element-dropdown';

import { LANGUAGE_DATA } from '@/constants/language';

const selectLanguage = (_props: any) => {
	const [language, setLanguage] = useState('en');
	const { i18n } = useTranslation();

	const toggleLanguage = (locale: 'en' | 'tr') => {
		i18n.changeLanguage(locale);
	};
	return (
		<SelectLanuageComponent
			style={styles.dropdown}
			selectedTextStyle={styles.selectedTextStyle}
			placeholderStyle={styles.placeholderStyle}
			imageStyle={styles.imageStyle}
			iconStyle={styles.iconStyle}
			containerStyle={styles.generalStyle}
			itemContainerStyle={styles.generalStyle}
			itemTextStyle={styles.generalStyle}
			activeColor='transparent'
			maxHeight={200}
			value={language}
			data={LANGUAGE_DATA}
			valueField='value'
			labelField='lable'
			imageField='image'
			placeholder='Select language'
			searchPlaceholder='Search...'
			onChange={(e) => {
				setLanguage(e.value);
				toggleLanguage(e.value as 'en' | 'tr');
			}}
		/>
	);
};

export default selectLanguage;

const styles = StyleSheet.create({
	dropdown: {
		margin: 0,
		padding: 0,
		height: 40,
		width: 100,
		backgroundColor: '#E6E2E290',
		borderRadius: 12,
		paddingHorizontal: 8,
	},
	imageStyle: {
		width: 20,
		height: 20,
		paddingRight: 10,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 12,
		marginLeft: 5,
	},
	iconStyle: {
		width: 20,
		height: 20,
		tintColor: 'black',
	},
	generalStyle: {
		backgroundColor: '#E6E2E2',
		borderRadius: 12,
	},
});
