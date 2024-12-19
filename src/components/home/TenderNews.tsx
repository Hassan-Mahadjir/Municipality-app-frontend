import {
	View,
	Text,
	FlatList,
	ImageBackground,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react'; // Added useEffect and useRef imports
import { LinearGradient } from 'expo-linear-gradient';
import tenderNews from '../../assets/data/tenderNews.json';
import { scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/tenderNew.home';
import { useAnnouncementService } from '@/services/api/announcement';
import Loading from '../Loading';
import { router } from 'expo-router';
import { AnnoucementValues } from '@/types/annoucement.type';
import { useTranslation } from 'react-i18next';

type SliderItem = {
	id: number;
	header: string;
	body: string;
	createAt: string;
	location: string;
	images: { id: number; imageUrl: string }[];
};

const terder_News: SliderItem[] = tenderNews;

// Get screen Width
const screenWidth = Dimensions.get('window').width - 25;

// Render Items to FlatList
const renderItem = ({
	item,
	lang,
}: {
	item: AnnoucementValues;
	lang: string;
}) => {
	return (
		<TouchableOpacity
			onPress={() => {
				if (item.id) {
					router.push(`/(user)/home/${item.id}`);
				} else {
					console.warn('Item does not have a valid id');
				}
			}}
		>
			<View>
				<ImageBackground
					source={{ uri: item.images[0].imageUrl }}
					// resizeMode='cover'
					imageStyle={{ borderRadius: scale(10) }}
					style={{
						width: screenWidth,
						height: verticalScale(160),
						marginTop: scale(10),
					}}
				>
					<LinearGradient
						colors={['rgba(40,53,86,0.9)', 'transparent']}
						style={styles.linearGradientStyle}
						start={{ x: 0, y: 1 }}
						end={{ x: 1, y: 0 }}
					/>

					<Text style={styles.description}>
						{item.language === lang
							? item.header
							: item.translations.find(
									(translation) => translation.language === lang
							  )?.header || item.header}
					</Text>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
};

export default function TenderNews() {
	const { AnnouncementData, isLoading } = useAnnouncementService({ limit: 4 });
	const terder_News = AnnouncementData?.data.data;
	const [activeIndex, setActiveIndex] = useState(0);
	const flatListRef = useRef<FlatList<AnnoucementValues>>(null); // Reference for the FlatList to auto-scroll
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase(); // Device language

	// Auto-scroll functionality
	useEffect(() => {
		if (!terder_News || terder_News.length === 0) return;

		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => {
				const nextIndex = (prevIndex + 1) % terder_News.length;

				if (flatListRef.current) {
					try {
						flatListRef.current.scrollToIndex({
							index: nextIndex,
							animated: true,
						});
					} catch (error) {
						console.error('Auto-scroll failed:', error);
					}
				}

				return nextIndex;
			});
		}, 3000);

		return () => clearInterval(interval); // Clean up interval on unmount
	}, [terder_News]);

	// end of Auto-scroll functionality

	const handleScroll = (event: {
		nativeEvent: { contentOffset: { x: number } };
	}) => {
		const scrollPosition = event.nativeEvent.contentOffset.x;
		const index = Math.round(scrollPosition / screenWidth);
		setActiveIndex(index);
	};

	// Render Scroll Indicators
	const renderDotIndicators = (activeIndex: number) => {
		if (!terder_News) return null;
		return terder_News.map((dot, index) => {
			return (
				<View
					key={index}
					style={[
						styles.dot,
						activeIndex === index ? styles.activeDot : styles.inactiveDot,
					]}
				/>
			);
		});
	};

	return (
		<View>
			{terder_News && terder_News.length > 0 ? (
				<>
					<View style={{ marginHorizontal: 10 }}>
						<FlatList
							ref={flatListRef}
							data={terder_News}
							horizontal={true}
							bounces={false}
							pagingEnabled
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ gap: scale(5) }}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item }) => renderItem({ item, lang })}
							onScroll={handleScroll}
						/>
					</View>
					<View style={styles.dotContainer}>
						{renderDotIndicators(activeIndex)}
					</View>
				</>
			) : (
				<Loading />
			)}
		</View>
	);
}
