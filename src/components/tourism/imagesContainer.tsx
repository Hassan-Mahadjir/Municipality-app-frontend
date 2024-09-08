import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { styles } from '@/styles/tenderNew.home';

const screenWidth = Dimensions.get('window').width - 25;

const renderItem = (item: { url: string }) => {
  return (
    <View>
      <ImageBackground
        source={{ uri: item.url }}
        imageStyle={{ borderRadius: scale(10) }}
        style={{
          width: screenWidth - 15,
          height: verticalScale(160),
          marginTop: scale(10),
		  marginLeft: scale(15),
		  marginRight: scale(15)
        }}
      />
    </View>
  );
};

export default function ImagesContainer({ images }: { images: { url: string }[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  // Render Scroll Indicators
  const renderDotIndicators = (activeIndex: number) => {
    return images.map((_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          activeIndex === index ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    ));
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: scale(5) }}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust for better performance
      >
        {images.map((item, index) => (
          <View key={index}>
            {renderItem(item)}
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {renderDotIndicators(activeIndex)}
      </View>
    </View>
  );
}
