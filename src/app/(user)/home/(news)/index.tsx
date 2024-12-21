import { View, FlatList, Alert, ActivityIndicator, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '@/components/services/Header';
import { router } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import {COLORS} from '@/constants/Colors';
import axios from 'axios';
import NewsItem from '@/components/services/NewsItem';
import Loading from '@/components/Loading';

const newsIndex = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Track the current page
  const { t } = useTranslation();

  // Fetch News API with pagination
  const fetchNews = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=tr&apiKey=13bfa7fe68164d6a8db50e98789d6fa7&pageSize=100&page=${pageNumber}` // Increase pageSize for more results
      );

      const data = response.data;
      console.log(data);  // Log the full response for debugging

      if (data && data.articles && data.articles.length > 0) {
        setNews((prevNews) => [...prevNews, ...data.articles]); // Append new articles to existing ones
      } else {
        Alert.alert(t('Error'), t('No news found.'));
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      Alert.alert(t('Error'), t('Could not fetch news.'));
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchNews(page);
  }, [page]); // Fetch news when page changes

  // Log news data after update
  useEffect(() => {
    console.log(news);
  }, [news]);

  // Handle the "Load More" action
  const loadMoreNews = () => {
    setPage((prevPage) => prevPage + 1); // Increment page for pagination
  };

  return (
    <View>
      <Header
        title={t('news')}
        backgroundImage={{ uri: 'https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg' }}
        onBackPress={() => router.back()}
      />

      {loading && page === 1 ? ( // Loading indicator only shown for the first page
        <Loading />
      ) : news.length > 0 ? (
        <FlatList
          data={news}
          renderItem={({ item }) => <NewsItem data={item} />}
          keyExtractor={(item) => item.url}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{
            gap: scale(10),
            paddingBottom: verticalScale(200),
            marginTop: verticalScale(15),
          }}
          onEndReached={loadMoreNews} // Trigger the loading of more news when the user scrolls to the end
          onEndReachedThreshold={0.5} // Start loading more when the user reaches 50% of the list
        />
      ) : (
        <Text style={{ textAlign: 'center', marginTop: verticalScale(20) }}>
          {t('No news found.')}
        </Text>
      )}

      {loading && page > 1 && ( // Show loading indicator when loading more pages
        <ActivityIndicator size="large" color="blue" style={{ marginTop: verticalScale(20) }} />
      )}
    </View>
  );
};

export default newsIndex;
