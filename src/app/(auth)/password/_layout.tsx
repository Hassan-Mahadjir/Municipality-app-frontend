import React from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='index' />
			<Stack.Screen name='confirmDigits' />
			<Stack.Screen name='newPassword' />
			<Stack.Screen name='successfullyChanged' />
		</Stack>
	);
}
