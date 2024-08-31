import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import tourismSections from "../../../../assets/data/toursimSections.json"
import { verticalScale } from 'react-native-size-matters'
import { styles } from '@/styles/tourismMain';


export default function tourismMain() {
  const router = useRouter();
return (
  <ScrollView>
      <View style={styles.container}>
          <Image
          style={styles.headerImage}
          source={require('../../../../assets/images/tourism-header.jpg')}
          />
          <LinearGradient
            colors={['rgba(239, 84, 13, 1)', 'transparent', 'rgba(78, 126, 149, 1)', 'transparent']}
            style={styles.linearGradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          />
          <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={() => router.back()}>
                  <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jnfstjpj8bo-33%3A1007?alt=media&token=53672763-93e6-4184-b8dc-1bf6c9fc38e0"}} style={styles.arrowImage}/>
              </TouchableOpacity>
          </View>
          <Text style={styles.headerText}>TOURISM SERVICES</Text>
      </View>
      <FlatList
          numColumns={1}
          data={tourismSections}
          contentContainerStyle={{ marginTop:0}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{height:verticalScale(225)}}>
              <TouchableOpacity onPress={() => router.push("/(user)/home/(tourism)/" + item.pageName)}>
                <Text style={styles.imageText}>{item.sectionName}</Text>
              </TouchableOpacity>
              <View>
                <Image source={{ uri: item.image }} style={styles.pageImage} />
              </View>
            </View>
          )}
      />
  </ScrollView>
)}