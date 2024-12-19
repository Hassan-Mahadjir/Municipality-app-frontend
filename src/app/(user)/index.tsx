import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { registerForPushNotificationsAsync } from '@/services/notificationService';

export default function index() {
	useEffect(() => {
		registerForPushNotificationsAsync();
	}, []);
	return <Redirect href={'./home'} />;
}
