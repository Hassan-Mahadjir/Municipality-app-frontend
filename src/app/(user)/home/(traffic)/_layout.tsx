import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';

const trafficLa = () => {
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
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='busTrack' />
			<Stack.Screen name='collectedVehicle' />
			<Stack.Screen name='[vechicle]' />
			<Stack.Screen name='route' options={{ headerShown: false }} />
		</Stack>
	);
};

export default trafficLa;
