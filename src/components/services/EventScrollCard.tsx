import React, { useState, useEffect, useRef } from 'react';
import {
	View,
	FlatList,
	ImageBackground,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

type SliderItem = {
	id: number;
	imageUrl: string;
};

interface EventScrollCardProps {
	images: SliderItem[];
}

const screenWidth = Dimensions.get('window').width - scale(30);

const renderItem = ({ item }: { item: SliderItem }) => {
	return (
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
			</ImageBackground>
		</View>
	);
};

export default function EventScrollCard({ images }: EventScrollCardProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const flatListRef = useRef<FlatList<SliderItem>>(null);

	// Function to handle scrolling
	const scrollToNextItem = () => {
		if (flatListRef.current && images.length > 0) {
			const nextIndex = (activeIndex + 1) % images.length;
			flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
			setActiveIndex(nextIndex);
		}
	};

	// Auto-scroll effect
	useEffect(() => {
		if (images.length === 0) return;
		const interval = setInterval(scrollToNextItem, 3000); // Scroll every 3 seconds
		return () => clearInterval(interval); // Cleanup on unmount
	}, [activeIndex, images]);

	const handleScroll = (event: {
		nativeEvent: { contentOffset: { x: number } };
	}) => {
		const scrollPosition = event.nativeEvent.contentOffset.x;
		const index = Math.round(scrollPosition / screenWidth);
		setActiveIndex(index);
	};

	const renderDotIndicators = (activeIndex: number) => {
		return images.map((_, index) => (
			<View
				key={index}
				style={[
					style.dot,
					activeIndex === index ? style.activeDot : style.inactiveDot,
				]}
			/>
		));
	};

	return (
		<View>
			<View style={{ marginHorizontal: scale(0) }}>
				<FlatList
					ref={flatListRef}
					data={images}
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
			<View style={style.dotContainer}>{renderDotIndicators(activeIndex)}</View>
		</View>
	);
}

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
