import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import historicalplaces from "../../../../assets/data/historicalPlaces.json"
import { router } from 'expo-router'
import SearchField from '@/components/services/Search';
import { useTranslation } from 'react-i18next';
import {styles} from '@/styles/historicalPlaces'

export default function historicalPlaces() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const searchbyplacename = t('searchbyplacename');
  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => router.back()}>
                  <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jnfstjpj8bo-33%3A1007?alt=media&token=53672763-93e6-4184-b8dc-1bf6c9fc38e0"}} style={styles.arrowImage}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>Historical Places</Text>
        </View>
        <SearchField
          placeholder={searchbyplacename} 
          onChangeText={(text) => console.log("Search text:", text)}
        />
        <FlatList
            numColumns={2}
            data={historicalplaces}
            contentContainerStyle={{ paddingVertical: 10 }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.pageImage} />
                <TouchableOpacity onPress={() => router.push("/(user)/home/(tourism)/" + item.pageName)}>
                  <Text style={styles.imageText}>{item.placename}</Text>
                </TouchableOpacity>
              </View>
            )}
        />
    </ScrollView>
  )}