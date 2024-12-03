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
import { useTranslation } from 'react-i18next';

export default function ServiceCategory() {
	const { servisesData } = useService({ limit: 4 });
	const services = servisesData?.data.data;

	const { i18n } = useTranslation(); // Get current language from i18n
	const lang = i18n.language.toLocaleUpperCase(); // Use i18n's current language for the weather request
	console.log(lang);

	return (
		<View style={styles.servicesContainer}>
			{services?.map((service, index) => (
				<TouchableOpacity
					onPress={() =>
						router.push(`../home/(${service.name.toLocaleLowerCase()})`)
					}
				>
					<View key={service.id || index}>
						<ImageBackground
							source={{ uri: service.imageUrl }}
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
								{service.language === lang
									? service.name
									: service.translations.find(
											(translation) => translation.language === lang
									  )?.name || service.name}
							</Text>

							{/* <View style={styles.detailsBackground}></View>

							<View style={styles.detailsContainer}>
								<Text style={styles.detialsText}>Details</Text>

								<Feather name='arrow-right' size={24} color='#fff' />
							</View> */}
						</ImageBackground>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
}
