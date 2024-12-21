import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import {
	registerForPushNotificationsAsync,
	setupNotificationListeners,
} from '@/services/notificationService';

export default function Index() {
	useEffect(() => {
		const initializeNotifications = async () => {
			await registerForPushNotificationsAsync();
			setupNotificationListeners();
		};

		initializeNotifications();
	}, []);

	return <Redirect href={'./home'} />;
}
