import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/card'; // Ensure this path and styles are correct
import React from 'react';
import { scale } from 'react-native-size-matters';
import { router } from 'expo-router';
import moment from 'moment';

type NewsData = {
  id: string;
  title: string;
  urlToImage: string;
  publishedAt: string;
};

interface CardProps {
  data: NewsData;
}

const NewsItem: React.FC<CardProps> = ({ data }) => {
  return (
    <View style={{ flex: 1, marginHorizontal: scale(5) }}>
      <Image
        resizeMode="cover"
        source={{ uri: data.urlToImage }}
        style={styles.pageImage} // Ensure styles are correctly defined
      />
      <TouchableOpacity
        onPress={() => {
          router.push(`./${data.id}`);
        }}
      >
        <Text style={styles.imageText} numberOfLines={2}>
          {data["title"]}
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
       
        <Text style={styles.agoText}>
          {moment(data.publishedAt).fromNow()} {/* Format as "5m ago" */}
        </Text>
      </View>
    </View>
  );
};

export default NewsItem;
