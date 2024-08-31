import {
	View,
	Text,
	FlatList,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import services from '@/assets/data/services.json';
import { styles } from '@/styles/serviceCategory.home';
import { router } from 'expo-router';

export default function ServiceCategory() {
	return (
		<View style={styles.servicesContainer}>
			{services.map((service, index) => (
				<View key={index}>
					<ImageBackground
						source={{ uri: service.image }}
						resizeMode='cover'
						style={styles.container}
						imageStyle={styles.imageStyle}
					>
						<LinearGradient
							colors={['rgba(40,53,86,0.9)', 'transparent']}
							style={styles.linearGradientSyley}
							start={{ x: 0, y: 1 }}
							end={{ x: 0, y: 0 }}
						/>
						<Text style={styles.serviceName}>{service.name}</Text>

						<View style={styles.detailsBackground}></View>

						<View style={styles.detailsContainer}>
							<Text style={styles.detialsText}>Details</Text>
							<TouchableOpacity
								onPress={() => router.push('(user)/home/(health)')}
							>
								<Feather name='arrow-right' size={24} color='#fff' />
							</TouchableOpacity>
						</View>
					</ImageBackground>
				</View>
			))}
		</View>
	);
}
