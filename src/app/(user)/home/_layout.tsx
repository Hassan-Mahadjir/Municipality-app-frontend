import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function UserHomeLayout() {
	const { t } = useTranslation(); // Translation hook
	const health = t('health');
	const tourism = t('tourism');

	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='(health)' options={{ headerShown: false }} />
			<Stack.Screen name='(tourism)' options={{ headerShown: false }} />
			<Stack.Screen name='(traffic)' options={{ headerShown: false }} />
			<Stack.Screen name='(news)' options={{ headerShown: false }} />
			<Stack.Screen name='service' />
			<Stack.Screen name='(community)' options={{ headerShown: false }} />
		</Stack>
	);
}
