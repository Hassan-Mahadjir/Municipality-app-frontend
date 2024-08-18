import {
	View,
	Text,
	FlatList,
	ImageBackground,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import tenderNews from '../../assets/data/tenderNews.json';
import { scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/tenderNew.home';

type SliderItem = {
	id: number;
	imageURL: string;
	description: string;
};

const terder_News: SliderItem[] = tenderNews;

// Get screen Width
const screenWidth = Dimensions.get('window').width - 25;

// Render Items to FlatList
const renderItem = ({ item }: { item: SliderItem }) => {
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

	const handleScroll = (event: {
		nativeEvent: { contentOffset: { x: number } };
	}) => {
		const scrollPosition = event.nativeEvent.contentOffset.x;
		const index = Math.round(scrollPosition / screenWidth);
		setActiveIndex(index);
	};

	// Render Scroll Indicators
	const renderDotIndicators = (activeIndex: number) => {
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
			<View style={{ marginHorizontal: 10 }}>
				<FlatList
					data={terder_News}
					horizontal={true}
					bounces={false}
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ gap: scale(5) }}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderItem}
					onScroll={handleScroll}
				/>
			</View>
			<View style={styles.dotContainer}>
				{renderDotIndicators(activeIndex)}
			</View>
		</View>
	);
}
