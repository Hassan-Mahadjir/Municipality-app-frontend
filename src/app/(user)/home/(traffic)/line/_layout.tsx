import React from 'react';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/constants/Colors';

const routLayout = () => {
	const { t } = useTranslation();
	const back_label = t('back');
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
				headerBackTitle: back_label,
			}}
		>
			<Stack.Screen name='[id]' options={{ headerShown: false }} />
		</Stack>
	);
};

export default routLayout;
