import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-size-matters';

const NewsDetails = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();

	const history = '';
	return (
		<View>
			<Header
				title={t('history')}
				backgroundImage={{
					uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBV0NfJikz6mU0HbEFt6_aywequJEDwp49g&s',
				}}
				onBackPress={() => router.back()}
			/>

			<ScrollView style={{ flexGrow: 1, margin: scale(10) }}>
				<Text style={{}}>{t('history')}</Text>
			</ScrollView>
		</View>
	);
};

export default NewsDetails;

const styles = StyleSheet.create({});
