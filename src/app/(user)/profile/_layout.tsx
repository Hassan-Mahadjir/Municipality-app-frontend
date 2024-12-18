import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';

export default function userProfileLayout() {
	const { t } = useTranslation();
	const back_lable = t('back');
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
				headerBackTitle: back_lable,
			}}
		>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='account' />
			<Stack.Screen name='password' options={{ headerShown: true }} />
		</Stack>
	);
}
