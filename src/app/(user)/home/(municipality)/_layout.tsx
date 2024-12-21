import { Stack } from 'expo-router';
import React from 'react';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'react-native';

const municipalityLayout = () => {
	const { t } = useTranslation();
	const back_label = t('back');

	return (
		<>
			<StatusBar barStyle={'default'} />
			<Stack
				screenOptions={{
					headerStyle: { backgroundColor: COLORS.secondary },
					headerTintColor: '#fff',
					headerTitleAlign: 'center',
					headerBackTitle: back_label,
				}}
			>
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen name='municipalDepartment' />
				<Stack.Screen name='contactInfo' />
				<Stack.Screen name='department' options={{ headerShown: false }} />
				<Stack.Screen name='history' options={{ headerShown: false }} />
			</Stack>
		</>
	);
};

export default municipalityLayout;
