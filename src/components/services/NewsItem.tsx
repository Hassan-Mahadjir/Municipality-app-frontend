import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/card'; // Ensure this path and styles are correct
import React from 'react';
import { scale } from 'react-native-size-matters';
import { router } from 'expo-router';
import moment from 'moment';

type NewsData = {
  id: string;
  author:string;
  source:{
    name: string;
  };
  title: string;
  urlToImage: string;
  description:string;
  publishedAt: string;
};

interface CardProps {
  data: NewsData;
}

const NewsItem: React.FC<CardProps> = ({ data }) => {
  return (
    <TouchableOpacity
    onPress={() => {
      // Passing the necessary news data as query parameters
      router.push({
        pathname: `/(user)/home/(news)/[id]`, // Use a dynamic path for the article
        params: { id: data.source.name, publishedAt:data.publishedAt, contents:data.description, url:data.urlToImage,author:data.author}
      });
    }}
    style={{ flex: 1, marginHorizontal: scale(5) }}
  >
      <View>
        <Image
          resizeMode="cover"
          source={{ uri: data.urlToImage }}
          style={styles.pageImage} // Ensure styles are correctly defined
        />
        <Text style={styles.imageText} numberOfLines={2}>
          {data.title}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.agoText}>
            {moment(data.publishedAt).fromNow()} {/* Format as "5m ago" */}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;
