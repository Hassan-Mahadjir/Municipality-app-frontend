import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { styles } from '@/styles/header.home';
import { useTranslation } from 'react-i18next';
import Loading from '../Loading';
import { useProfile } from '@/services/api/profile';

// Weather service function
const getWeatherByLocation = async (
	lat: number,
	lon: number,
	lang: string = 'en'
) => {
	try {
		const response = await axios.get(
			'https://api.openweathermap.org/data/2.5/weather',
			{
				params: {
					lat,
					lon,
					appid: 'ee6690679d43a6979f64771c27463c40', // Replace with your actual API key
					units: 'metric',
					lang,
				},
			}
		);
		return response.data; // Return the data directly
	} catch (error) {
		console.error('Error fetching weather data:', error);
		throw error;
	}
};

// Hook to fetch the weather data
const useWeatherService = (lat: number, lon: number, lang: string = 'en') => {
	const [weatherData, setWeatherData] = useState<any>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				setIsLoading(true); // Start loading before fetching
				const data = await getWeatherByLocation(lat, lon, lang);
				setWeatherData(data);
				setError(null); // Clear any previous errors
			} catch (err: any) {
				setError(err.message || 'Error fetching weather data'); // Handle errors by setting an error message
			} finally {
				setIsLoading(false); // Stop loading
			}
		};

		fetchWeather();
	}, [lat, lon, lang]); // Re-run when the language changes

	return { weatherData, isLoading, error };
};

const lat = 35.159299;
const lon = 33.907926;

export default function Header() {
	const router = useRouter();
	const { i18n } = useTranslation(); // Get current language from i18n
	const lang = i18n.language; // Use i18n's current language for the weather request
	const { weatherData, isLoading, error } = useWeatherService(lat, lon, lang); // Pass lang here
	const { profileData } = useProfile();

	const { t } = useTranslation(); // Translate static content
	const hello = t('hello');
	const firstName = profileData?.data.data.firstName;

	const weather = weatherData?.weather?.[0];
	const iconUrl = weather
		? `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
		: null;

	const temp = weatherData?.main.temp
		? Math.round(weatherData.main.temp)
		: null;

	return (
		<View style={styles.headerContainer}>
			<View style={styles.subHeaderContianer}>
				<Text style={styles.greetMsg}>
					{hello},<Text style={styles.userName}> {firstName}</Text>
				</Text>

				<View style={[styles.subHeaderContianer, { gap: 25, marginRight: 10 }]}>
					{/* Press Notification */}
					<TouchableOpacity
						onPress={() => {
							router.push('/notification');
						}}
					>
						<Ionicons name='notifications-circle' size={30} color='#fff' />
					</TouchableOpacity>
				</View>
			</View>

			{isLoading ? (
				<Loading />
			) : error ? (
				<Text>Error: {error}</Text>
			) : (
				<View style={styles.weatherContainer}>
					<Text style={styles.temprtureStatus}>{weather?.description}</Text>
					<View style={styles.weatherWrapper}>
						{iconUrl && (
							<Image
								source={{ uri: iconUrl }}
								style={{ width: 50, height: 50 }}
							/>
						)}
						<Text style={styles.temprtureText}>{temp} C</Text>
					</View>
				</View>
			)}
		</View>
	);
}
