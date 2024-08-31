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
// import services from '@/assets/data/services.json';
import { styles } from '@/styles/serviceCategory.home';
import { router } from 'expo-router';
import { useService } from '@/services/api/home';

export default function ServiceCategory() {
	const { servisesData } = useService();
	const services = servisesData?.data.data;

	return (
		<View style={styles.servicesContainer}>
			{services?.map((service, index) => (
				<View key={service.id || index}>
					<ImageBackground
						source={{ uri: 'https://picsum.photos/350/200' }}
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
							<Text style={styles.detialsText}>Detials</Text>
							<TouchableOpacity
								onPress={() =>
									router.push(
										`/(user)/home/(${service.name.toLocaleLowerCase()})`
									)
								}
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
