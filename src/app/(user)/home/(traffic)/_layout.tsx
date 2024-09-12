import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';

const trafficLa = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='busTrack' />
			<Stack.Screen name='collectedVehicle' />
			<Stack.Screen name='disasterPoint' />
			<Stack.Screen name='[vechicle]' />
			<Stack.Screen name='route' options={{ headerShown: false }} />
		</Stack>
	);
};

export default trafficLa;
