import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView,StatusBar } from 'react-native';
import { styles } from '@/styles/hospitalLocation';
import { useTranslation } from 'react-i18next';
import { Stack } from 'expo-router';
const hospitalLocation = () => {
    const { t } = useTranslation();
  const emuhospital = t('emuhospital');
  const yourlocation =t('yourlocation');
  const location = t('location');
  const showdirections= t('showdirections');
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:"#fff", }}>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Screen options={{ title: "Location" }} />
      <View style={{ flex: 1 }}>
        

        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={{ uri: 'https://www.google.com/maps/d/thumbnail?mid=1aw3ZIzH8ne6sY8pF8GRYXk1qDBQ' }} 
            style={styles.map}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.pharmacyName}>{emuhospital}</Text>
            <Text style={styles.locationLabel}>{yourlocation}</Text>
            <Text style={styles.address}>{location}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{showdirections}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};



export default hospitalLocation;
