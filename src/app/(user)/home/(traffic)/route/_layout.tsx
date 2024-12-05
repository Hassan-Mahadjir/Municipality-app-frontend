import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';

const routLayout = () => {
	const {t}=useTranslation();
	const back_label=t('back')
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
				headerBackTitle: back_label
			}}
		>
			<Stack.Screen name='[id]' />
			
		</Stack>
	);
};

export default routLayout;
