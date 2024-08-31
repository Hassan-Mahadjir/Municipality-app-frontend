import { View, Text, StyleSheet, ScrollView, Image, TextInput, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import historicalplaces from "../../../../assets/data/historicalPlaces.json"
import { router } from 'expo-router'
import { scale, verticalScale } from 'react-native-size-matters'

export default function historicalPlaces() {
    const navigation = useNavigation();
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
        <View style={styles.container2}>
          <View style={styles.inputContainer}>
            <Image
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/quopjrofqa-33%3A1107?alt=media&token=9789991c-5509-4be4-8dd0-28c5cce1ed1c' }} 
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="grey"
              style={styles.textInput}
            />
          </View>
        </View>
        <FlatList
            numColumns={2}
            data={historicalplaces}
            contentContainerStyle={{ paddingVertical: 10 }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{height:150}}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={{ uri: item.image }} style={styles.pageImage} />
                </View>
                <TouchableOpacity onPress={() => router.push(`./(user)/home/(tourism)/${item.placename}`)}>
                  <Text style={styles.imageText}>{item.placename}</Text>
                </TouchableOpacity>
              </View>
            )}
        />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#4E7E95'
    },
    headerText: {
        position: 'absolute',
        top: 50,
        left: 100,
        color: 'white',
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
    },
    arrowImage: {
        height: 20,
        width: 25,
    },
    arrowContainer: {
        position: 'absolute',
        top: 10,
        left: 5,
        width: 40, 
        height: 40, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageImage: {
        height: verticalScale(100),
        width: scale(165),
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 10,
    },
    imageText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#F1722A',
        position: 'absolute',
        left: 45,
        top: 10,
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#F1722A',
      width: 395,
      height: 50,
    },
    searchIcon: {
      position: 'absolute',
      marginTop: 10,
      marginLeft: 20,
      width: 24,
      height: 24,
      marginRight: 10,
    },
    textInput: {
      position: 'absolute',
      marginLeft: 50,
      fontSize: 15,
      color: 'grey',
      flex: 1,
    },
})