import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import WebView from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';

const googleModal = () => {
	// State for WebView visibility
	const [showWebView, setShowWebView] = useState(false);
	const [loadingWebView, setLoadingWebView] = useState(true);

	const openGoogleLogin = async () => {
		setShowWebView(true);
		let result = await WebBrowser.openBrowserAsync(
			'http://192.168.0.108:3000/auth/google/login'
		);
		console.log(result);
	};

	const handleNavigationStateChange = (navState) => {
		const { url } = navState;
		if (url.includes('?token=')) {
			const token = url.split('?token=')[1];
			console.log('Received token:', token);
			setShowWebView(false); // Hide WebView after successful login
		}
	};

	return (
		<WebView
			style={loadingWebView ? { display: 'none' } : { flex: 1 }}
			source={{ uri: 'http://192.168.0.108:3000/auth/google/login' }}
			onLoadEnd={() => setLoadingWebView(false)}
			onNavigationStateChange={handleNavigationStateChange}
			userAgent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
		/>
	);
};

export default googleModal;
const styles = StyleSheet.create({});
