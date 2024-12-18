import { View } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Shelter from '@/components/animal/Shelter';
import Animal from '@/components/animal/Animal';
import Header from '@/components/animal/Header';
import { Stack } from 'expo-router';

const AnimalMain = () => {
	const { t } = useTranslation();

	const [selectedCategory, setSelectedCategory] = useState<string>(
		t('lostFound')
	);

	const renderContent = () => {
		switch (selectedCategory) {
			case t('shelter'):
				return <Shelter />;
			default:
				return <Animal />;
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<Stack.Screen options={{ title: t('animalService') }} />

			<Header
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			{renderContent()}
		</View>
	);
};

export default AnimalMain;
