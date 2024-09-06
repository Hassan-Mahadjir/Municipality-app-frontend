import {
	View,
	FlatList,
	ImageBackground,
	Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/tenderNew.home';

const screenWidth = Dimensions.get('window').width - 25;

const renderItem = ({ item }: { item: { url: string }}) => {
	return (
		<View>
			<ImageBackground
				source={{ uri: item.url }}
				imageStyle={{ borderRadius: scale(10) }}
				style={{
					width: screenWidth,
					height: verticalScale(160),
					marginTop: scale(10),
				}}
			/>
		</View>
	);
};

export default function ImagesContainer({ images }: { images: { url: string }[] }) {
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
		return images.map((_, index) => {
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
					data={images}
					horizontal={true}
					bounces={false}
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ gap: scale(5) }}
					keyExtractor={(item, index) => index.toString()}
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
