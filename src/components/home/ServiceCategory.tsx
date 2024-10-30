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
	const { servisesData } = useService({ limit: 4 });
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
						<Text
							ellipsizeMode='tail'
							numberOfLines={1}
							style={styles.serviceName}
						>
							{service.name}
						</Text>

						<View style={styles.detailsBackground}></View>
						<TouchableOpacity
							onPress={() =>
								router.push(`../home/(${service.name.toLocaleLowerCase()})`)
							}
						>
							<View style={styles.detailsContainer}>
								<Text style={styles.detialsText}>Details</Text>

								<Feather name='arrow-right' size={24} color='#fff' />
							</View>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			))}
		</View>
	);
}
