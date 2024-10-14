import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/header.home';

export default function Header() {
	const router = useRouter();

	return (
		<View style={styles.headerContainer}>
			<View style={styles.subHeaderContianer}>
				<Text style={styles.greetMsg}>
					Hello,<Text style={styles.userName}> Hassan</Text>
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

			<View style={styles.weatherContainer}>
				<Text style={styles.temprtureStatus}>Pretty Sunny</Text>
				<View style={styles.weatherWrapper}>
					<MaterialIcons name='sunny' size={64} color='#FCFC07' />
					<Text style={styles.temprtureText}>30 C</Text>
				</View>
			</View>
		</View>
	);
}
