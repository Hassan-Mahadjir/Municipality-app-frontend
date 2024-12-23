import React, { useState, useEffect, useRef } from 'react';
import {
	View,
	Text,
	FlatList,
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { PharmacyValues } from '@/types/health.type';
import { usePharmacy } from '@/services/api/health';
import { t } from 'i18next';

const screenWidth = Dimensions.get('window').width - scale(40);

export const openGoogleMaps = (lat: number, lng: number) => {
	const url = `https://www.google.com/maps?q=${lat},${lng}`;
	Linking.openURL(url).catch((err) =>
		console.error('Failed to open Google Maps', err)
	);
};
const PharmacyCard = () => {
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { pharmacyData, isLoading } = usePharmacy();
	const pharmacies = pharmacyData?.data.data || []; // Default to an empty array if undefined
	const [activeIndex, setActiveIndex] = useState(0);
	const flatListRef = useRef<FlatList>(null);

	// Filter pharmacies where `openthisWeek` is true
	const openPharmacies = pharmacies.filter((pharmacy) => pharmacy.openthisWeek);

	// Function to handle scrolling
	const scrollToNextItem = () => {
		if (flatListRef.current && openPharmacies.length) {
			const nextIndex = (activeIndex + 1) % openPharmacies.length;
			flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
			setActiveIndex(nextIndex);
		}
	};

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(scrollToNextItem, 3000); // Scroll every 3 seconds
		return () => clearInterval(interval); // Cleanup on unmount
	}, [activeIndex, openPharmacies]);

	const handleScroll = (event: {
		nativeEvent: { contentOffset: { x: number } };
	}) => {
		const scrollPosition = event.nativeEvent.contentOffset.x;
		const index = Math.round(scrollPosition / screenWidth);
		setActiveIndex(index);
	};

	const renderDotIndicators = (activeIndex: number) => {
		return openPharmacies.map((_, index) => (
			<View
				key={index}
				style={[
					style.dot,
					activeIndex === index ? style.activeDot : style.inactiveDot,
				]}
			/>
		));
	};

	const renderItem = ({ item }: { item: PharmacyValues }) => (
		<View style={style.pharmacyNewsContainer}>
			<ImageBackground
				source={{ uri: item.imageUrl }}
				resizeMode='cover'
				style={style.imageBackground}
			>
				<LinearGradient
					colors={['rgba(40,53,86,0.9)', 'transparent']}
					style={style.linearGradientStyle}
					start={{ x: 0, y: 1 }}
					end={{ x: 0, y: 0 }}
				/>
				<Text style={style.description}>{item.name}</Text>
				{item.location && (
					<View style={style.locationContainer}>
						<Text style={style.location}>
							{item.language === lang
								? item.location
								: item.translations.find(
										(translation) => translation.language === lang
								  )?.location || item.location}
						</Text>
					</View>
				)}
				<TouchableOpacity
					style={style.readMore}
					onPress={() => openGoogleMaps(item.latitude, item.longitude)}
				>
					<Text style={[style.readMoreText, { color: COLORS.primary }]}>
						{t('seeLocation')}
					</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);

	return (
		<View>
			{isLoading ? (
				<Text>Loading...</Text>
			) : openPharmacies.length ? (
				<>
					<View style={{ marginHorizontal: scale(10) }}>
						<FlatList
							ref={flatListRef}
							data={openPharmacies}
							horizontal
							bounces={false}
							pagingEnabled
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ gap: scale(5) }}
							keyExtractor={(item) => item.id.toString()}
							renderItem={renderItem}
							onScroll={handleScroll}
						/>
					</View>
					<View style={style.dotContainer}>
						{renderDotIndicators(activeIndex)}
					</View>
				</>
			) : (
				<Text>No Pharmacies Open This Week</Text>
			)}
		</View>
	);
};

const style = StyleSheet.create({
	pharmacyNewsContainer: {
		width: screenWidth,
		height: verticalScale(180),
		marginTop: verticalScale(4),
		borderRadius: scale(10),
		overflow: 'hidden',
	},
	imageBackground: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	linearGradientStyle: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	description: {
		marginLeft: scale(10),
		marginBottom: verticalScale(10),
		fontWeight: 'bold',
		color: '#fff',
		width: '80%',
	},
	locationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: scale(10),
		marginBottom: verticalScale(10),
	},
	location: {
		color: '#fff',
		width: '80%',
	},
	readMore: {
		position: 'absolute',
		right: scale(2),
		bottom: verticalScale(15),
		paddingVertical: verticalScale(8),
		paddingHorizontal: scale(15),
		backgroundColor: 'rgba(152, 152, 152, 0.6)',
		borderTopLeftRadius: scale(10),
		borderBottomLeftRadius: scale(10),
		alignItems: 'center',
		justifyContent: 'center',
	},
	readMoreText: {
		fontSize: scale(12),
	},
	dotContainer: {
		flexDirection: 'row',
		marginTop: verticalScale(5),
		alignSelf: 'center',
	},
	dot: {
		marginHorizontal: scale(2),
		width: scale(10),
		height: scale(10),
		borderRadius: scale(5),
	},
	activeDot: {
		backgroundColor: COLORS.primary,
		width: scale(25),
		height: scale(10),
	},
	inactiveDot: {
		backgroundColor: 'white',
	},
});

export default PharmacyCard;
