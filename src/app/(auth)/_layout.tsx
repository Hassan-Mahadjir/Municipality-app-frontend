import React from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='index' />
			<Stack.Screen name='signUp' />
			<Stack.Screen name='verified' />
			<Stack.Screen name='password' />
			<Stack.Screen name='google-modal' />
		</Stack>
	);
}
