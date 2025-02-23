import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as SplashScreen from 'expo-splash-screen';
import { APIProvider } from '@/providers/api-provider';

import '../i18n/translation';
import React from 'react';

import useCheckToken from '@/hooks/check-token';
export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/Roboto-Regular.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const { t } = useTranslation();
	const back_label = t('back');
	useCheckToken();
	return (
		<APIProvider>
			<Stack
				screenOptions={{ headerShown: false, headerBackTitle: back_label }}
			>
				<Stack.Screen name='index' />
				<Stack.Screen name='(user)' />
				<Stack.Screen name='(auth)' />
			</Stack>
		</APIProvider>
	);
}
