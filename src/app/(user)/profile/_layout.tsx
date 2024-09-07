import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '@/constants/Colors';

export default function userProfileLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.secondary },
				headerTintColor: '#fff',
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='myAccount' />
			<Stack.Screen name='password' options={{ headerShown: true }} />
		</Stack>
	);
}
