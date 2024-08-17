import {
<<<<<<< HEAD
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
=======
	View,
	Text,
	FlatList,
	ImageBackground,
	TouchableOpacity,
	Dimensions,
>>>>>>> 4e2582932f176892c846e2a9933a2a6bdc1d75e3
} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import tenderNews from '../../assets/data/tenderNews.json';
<<<<<<< HEAD

type SliderItem = {
  id: number;
  imageURL: string;
  description: string;
=======
import { scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/tenderNew.home';

type SliderItem = {
	id: number;
	imageURL: string;
	description: string;
>>>>>>> 4e2582932f176892c846e2a9933a2a6bdc1d75e3
};

const terder_News: SliderItem[] = tenderNews;

// Get screen Width
<<<<<<< HEAD
const screenWidth = Dimensions.get('window').width - 40;

// Render Items to FlatList
const renderItem = ({ item }: { item: SliderItem }) => {
  return (
    <View>
      <ImageBackground
        source={{ uri: item.imageURL }}
        resizeMode="cover"
        style={style.tenderNewsContainer}
      >
        <LinearGradient
          colors={['rgba(40,53,86,0.9)', 'transparent']}
          style={style.linearGradientStyle}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        />

        <Text style={style.description}>{item.description}</Text>
        <TouchableOpacity style={style.readMore}>
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
            style.dot,
            activeIndex === index ? style.activeDot : style.inactiveDot,
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
          contentContainerStyle={{ gap: 5 }}
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
  tenderNewsContainer: {
    width: 390,
    height: 180,
    marginTop: 10,
  },
  sectionTitle: {
    color: '#F64D00',
    paddingTop: 10,
  },
  linearGradientStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
  description: {
    position: 'absolute',
    top: 115,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#fff',
    width: '80%',
  },
  readMore: {
    position: 'absolute',
    right: '5%',
    bottom: '6%',
  },
  dotContainer: {
    flexDirection: 'row',
    // position: 'absolute',
    marginTop: 5,
    alignSelf: 'center',
  },
  dot: {
    marginHorizontal: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: '#F64D00',
    width: 25,
    height: 10,
  },
  inactiveDot: {
    backgroundColor: 'white',
  },
});
=======
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
>>>>>>> 4e2582932f176892c846e2a9933a2a6bdc1d75e3
