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
import { useTranslation } from 'react-i18next';

type SliderItem = {
	id: number;
	imageURL: string;
	description: string;
};

const tender_News: SliderItem[] = tenderNews; // Corrected typo

// Get screen Width
const screenWidth = Dimensions.get('window').width - 25;

const renderItem = ({ item }: { item: SliderItem }) => {
	const { t } = useTranslation();

	return (
		<View>
			<ImageBackground
				source={{ uri: item.imageURL }}
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

				<Text style={styles.description}>{item.description}</Text>
				<TouchableOpacity style={styles.readMore}>
					<Text style={{ color: '#fff' }}>Read More</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default function TenderNews() {
	const [activeIndex, setActiveIndex] = useState(0);
	const flatListRef = useRef<FlatList<SliderItem>>(null); // Reference for the FlatList to auto-scroll

	// Auto-scroll functionality
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => {
				const nextIndex = (prevIndex + 1) % tender_News.length; // Looping to the first item
				flatListRef.current?.scrollToIndex({ index: nextIndex }); // Scroll to the next index
				return nextIndex; // Update active index
			});
		}, 3000); // Set interval time (e.g., 3000 ms for 3 seconds)

		// Clear interval on component unmount
		return () => clearInterval(interval);
	}, []);
	// end of Auto-scroll functionality

	const handleScroll = (event: {
		nativeEvent: { contentOffset: { x: number } };
	}) => {
		const scrollPosition = event.nativeEvent.contentOffset.x;
		const index = Math.round(scrollPosition / screenWidth);
		setActiveIndex(index);
	};

	const renderDotIndicators = (activeIndex: number) => {
		return tender_News.map((dot, index) => {
			return (
				<View
					key={index.toString()}
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
			<View style={{ marginHorizontal: 10 }}>
				<FlatList
					ref={flatListRef} // Assigning ref to the FlatList for auto-scroll
					data={tender_News}
					horizontal={true}
					bounces={false}
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ gap: scale(5) }}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderItem}
					onScroll={handleScroll}
					getItemLayout={(data, index) => ({
						length: screenWidth,
						offset: screenWidth * index,
						index,
					})}
				/>
			</View>
			<View style={styles.dotContainer}>
				{renderDotIndicators(activeIndex)}
			</View>
		</View>
	);
}
