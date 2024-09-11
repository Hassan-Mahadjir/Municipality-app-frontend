import React from 'react';
import { Stack } from 'expo-router';

const newsLayout = () => {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='index' />
			<Stack.Screen name='[news]' />
		</Stack>
	);
};

export default newsLayout;
