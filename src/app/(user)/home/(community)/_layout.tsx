import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';

const communityLayout = () => {
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
			<Stack.Screen name='animal' options={{ headerShown: false }} />
			<Stack.Screen name='eventDetail' options={{ headerShown: false }} />
			<Stack.Screen name='animalMain' />
			<Stack.Screen name='wasteCollection' />
			<Stack.Screen name='disasterPoint' />
			<Stack.Screen name='emergency' />
			<Stack.Screen name='event' options={{ headerShown: false }} />
		</Stack>
	);
};

export default communityLayout;
