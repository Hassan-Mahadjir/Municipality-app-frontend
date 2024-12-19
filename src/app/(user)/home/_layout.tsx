import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function UserHomeLayout() {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='(health)' options={{ headerShown: false }} />
			<Stack.Screen name='(tourism)' options={{ headerShown: false }} />
			<Stack.Screen name='(traffic)' options={{ headerShown: false }} />
			<Stack.Screen name='(news)' options={{ headerShown: false }} />
			<Stack.Screen name='(municipality)' options={{ headerShown: false }} />
			<Stack.Screen name='service' />
			<Stack.Screen name='[news]' />
			<Stack.Screen name='(community)' options={{ headerShown: false }} />
		</Stack>
	);
}
