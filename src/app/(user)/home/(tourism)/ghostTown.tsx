import { View, Text, ScrollView, Image, StyleSheet, TextInput, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { router } from 'expo-router'

export default function ghostTown() {
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    const photos = [
        'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/w7w9ak2zpdg-594%3A1974?alt=media&token=bebf3baf-4e21-4aa6-9250-7ad471d25b36',
        'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/mr3fllifh78-267%3A1290?alt=media&token=b83fb12e-da66-4bd5-82a0-7c3ebc211239',
        'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/znpusw4m5cr-267%3A1291?alt=media&token=cb7828a7-7785-4269-a992-308bbb20f564',
    ];
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.headerImage}
                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/i7mhi5ix258-533%3A1980?alt=media&token=e00f3a9d-eae3-4684-a9b7-3a1e97957848'}}
                />
                <LinearGradient
                    colors={['rgba(40,53,86,0.9)', 'transparent']}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                />
            </View>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jnfstjpj8bo-33%3A1007?alt=media&token=53672763-93e6-4184-b8dc-1bf6c9fc38e0"}} style={styles.arrowImage}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>Ghost Town</Text>
            <View style={styles.shadowContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
                    <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7'}} style={styles.starImage}/>
                    <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7'}} style={styles.starImage}/>
                    <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7'}} style={styles.starImage}/>
                    <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ui0s3xdrmua-192%3A1095?alt=media&token=cfb3c95f-3117-4a1d-8c9b-4295dbdb12d7'}} style={styles.starImage}/>
                    <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/5a14csqsccu-192%3A1099?alt=media&token=eb324012-4bf4-4665-b817-0e140eb32845'}} style={styles.starImage}/>
                    <Text style={styles.starText}>1,987 Reviews</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/01vrktrq36oe-39%3A726?alt=media&token=5e7fbab6-2e66-4e18-ac03-cfaf7865a40b'}} style={styles.clockIcon}/>
                    <Text style={styles.openText}>Open</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.weekText1}>Weekdays:</Text>
                    <Text style={styles.weekText2}>Weekends:</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 50}}>
                    <Text style={styles.timeText1}>8.00 am - 11.59 pm</Text>
                    <Text style={styles.timeText2}>8.00 am - 11.59 pm</Text>
                </View>
            </View>
            <ScrollView style={{marginTop: 5}}>
                <View>
                    <Text style={styles.classicText}>Once a thriving resort and seaside town, the ghost town of Varosha has sat abandoned since the 1970s. While you're not allowed to enter the fenced-off areas, you can still have a stroll or bike ride around the area to explore the deserted buildings and
                    </Text>
                    {expanded && (
                        <Text style={styles.classicText}>
                            rubble—a time capsule of what was once the most glamorous spot in Cyprus. A part of Varosha beach has recently been reopened, for a peculiar beach day against the backdrop of the abandoned resort. For a more typical beach holiday, you can head to the neighboring Palm Beach first before starting your tour of the Ghost Town.
                        </Text>
                    )}
                    <TouchableOpacity onPress={toggleExpansion}>
                        <Text style={styles.orangeText}>
                            {expanded ? 'Read Less' : 'Read More'}
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{height: 500}}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    headerText: {
        position: 'absolute',
        top: 80,
        left: 100,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    arrowImage: {
        height: verticalScale(20),
        width: scale(25),
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
    starImage: {
        height: 20,
        width: 20,
        marginVertical: 10,
        marginLeft: 5,
    },
    starText: {
        fontSize: 18,
        position: 'absolute',
        color: '#4E7E95',
        marginTop: 30,
    },
    clockIcon: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    openText: {
        color: '#F1722A',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 10,
        left: 45
    },
    weekText1: {
        color: '#F1722A',
        fontSize: 18,
        position: 'absolute',
        top: 40,
        marginLeft: 50,
        marginRight: 10,
    },
    weekText2: {
        color: '#F1722A',
        fontSize: 18,
        position: 'absolute',
        top: 40,
        marginLeft: 250,
        marginRight: 10,
    },
    timeText1: {
        color: '#4E7E95',
        fontSize: 18,
        position: 'absolute',
        top: 60,
        marginLeft: 25,
    },
    timeText2: {
        color: '#4E7E95',
        fontSize: 18,
        position: 'absolute',
        top: 60,
        marginLeft: 220,
    },
    shadowContainer: {
        height: 140,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        zIndex: 10,
    },
    classicText: {
        flexWrap: 'wrap',
        flex: 1,
        fontSize: 20,
        fontWeight: 'normal',
        color: 'black',
        marginLeft: 15,
    },
    orangeText: {
        fontSize: 18,
        color: '#F1722A',
        marginLeft: 15,
    },
    placeImage: {
        height: 200,
        width: 360,
        borderRadius: 5,
        marginTop: 15,
        marginLeft: 15,
    },
    rectangle: {
        height: 10,
        width: 30,
        borderRadius: 10,
        backgroundColor: '#F1722A',
    },
    smallcircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'lightgrey'
    },
    scrollView: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
});
