import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import pharmacyInfo from '../../assets/data/pharmacyInfo.json';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

type SliderItem = {
  id: number;
  imageURL: string;
  description: string;
  location?: string;
  locationIconURL?: string;
};

const pharmacy_News: SliderItem[] = pharmacyInfo;

const screenWidth = Dimensions.get('window').width - scale(40);

const renderItem = ({ item }: { item: SliderItem }) => {
  return (
    <View style={style.pharmacyNewsContainer}>
      <ImageBackground
        source={{ uri: item.imageURL }}
        resizeMode="cover"
        style={style.imageBackground}
      >
        <LinearGradient
          colors={['rgba(40,53,86,0.9)', 'transparent']}
          style={style.linearGradientStyle}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        />

        <Text style={style.description}>{item.description}</Text>
        {item.location && (
          <View style={style.locationContainer}>
            {item.locationIconURL && (
              <Image
                source={{ uri: item.locationIconURL }}
                style={style.locationIcon}
              />
            )}
            <Text style={style.location}>{item.location}</Text>
          </View>
        )}
        <TouchableOpacity style={style.readMore}>
          <Text style={[style.readMoreText, { color: COLORS.primary }]}>See Location</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default function PharmacyCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Function to handle scrolling
  const scrollToNextItem = () => {
    if (flatListRef.current) {
      const nextIndex = (activeIndex + 1) % pharmacy_News.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(scrollToNextItem, 3000); // Scroll every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [activeIndex]);

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderDotIndicators = (activeIndex: number) => {
    return pharmacy_News.map((_, index) => {
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
      <View style={{ marginHorizontal: scale(10) }}>
        <FlatList
          ref={flatListRef}
          data={pharmacy_News}
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
  description: {
    marginLeft: scale(10),
    marginBottom: verticalScale(20),
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
  locationIcon: {
    width: scale(20),
    height: verticalScale(25),
    marginRight: scale(5),
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
