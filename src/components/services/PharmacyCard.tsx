import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
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
    <View>
      <ImageBackground
        source={{ uri: item.imageURL }}
        resizeMode="cover"
        style={style.pharmacyNewsContainer}
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
    width: scale(360),
    height: verticalScale(180),
    marginTop: verticalScale(4),
    borderRadius: scale(10),
    overflow: 'hidden',
  },
  linearGradientStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  description: {
    position: 'absolute',
    top: verticalScale(100), // Moved slightly up
    marginLeft: scale(10),
    fontWeight: 'bold',
    color: '#fff',
    width: '80%',
  },
  locationContainer: {
    position: 'absolute',
    top: verticalScale(130), // Adjusted positioning
    marginLeft: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
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
    right: scale(5), // Moved closer to the right edge
    bottom: verticalScale(15), // Adjusted for better visibility
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
    backgroundColor: '#F64D00',
    width: scale(25),
    height: scale(10),
  },
  inactiveDot: {
    backgroundColor: 'white',
  },
});
