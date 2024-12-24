import { Stack } from 'expo-router';
import React from 'react';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';

const healthLayout = () => {
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
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='hospitalScreen' options={{ headerShown: true }} />
			<Stack.Screen name='pharamcyScreen' options={{ headerShown: true }} />
		</Stack>
	);
};

export default healthLayout;
