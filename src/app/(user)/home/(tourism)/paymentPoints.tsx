import { View, Text, Image, Linking, ScrollView } from 'react-native';
import React from 'react';
import paymentPoints from '../../../../assets/data/paymentPoints.json';
import { Stack } from 'expo-router';
import SearchField from '@/components/services/Search';
import { useTranslation } from 'react-i18next';
import { styles } from '@/styles/paymentPoints';
import { TouchableOpacity } from 'react-native';

export default function historicalPlaces() {
	const { t } = useTranslation();
	const searchbyplacename = t('searchbyplacename');

    const handlePress = () => {
        const url = 'https://www.google.com/maps/d/u/0/viewer?mid=1MOJS9QrCHWNZCqD-79OaEkiacqrNuAmC&femb=1&ll=35.24891578265986%2C33.669542874735434&z=10'; // Replace with your URL
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    };

    type PaymentPoint = {
        branch: string;
        office: string;
        'no.': string;
        location: string;
        seeLocation: string;
    };

    const handleSeeLocation = (url: string) => {
        if (url) {
            Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
        } else {
            console.log("No URL provided");
        }
    };

    const renderPaymentPoint = ({ item }: {item: PaymentPoint}) => (
        <View style={styles.box}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image
                source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8z51sldrhbe-256%3A2042?alt=media&token=e62a0361-18bd-4746-b23f-3ae79c5bb4ef'
                }}
                style={styles.pinImage}
                />
                <TouchableOpacity onPress={() => handleSeeLocation(item.seeLocation)}>
                    <Text style={styles.locationText}>See Location</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.orangeText}>Branch:</Text>
                <Text style={styles.orangeText}>Office:</Text>
                <Text style={styles.orangeText}>No:</Text>
                <Text style={styles.orangeText}>Location:</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.blueText}>{item.branch}</Text>
                <Text style={styles.blueText}>{item.office}</Text>
                <Text style={styles.blueText}>{item['no.']}</Text>
                <Text style={styles.blueText}>{item.location}</Text>
            </View>
        </View>
      );
    
	return (
		<ScrollView style={{ flex: 1 }}>
			<Stack.Screen options={{ title: 'Payment Points' }} />
			<SearchField
				placeholder={searchbyplacename}
				onChangeText={(text) => console.log('Search text:', text)}
			/>
            <Text style={styles.map}>MAP</Text>
            <TouchableOpacity onPress={handlePress}>
                <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ukggue1xyx-608%3A1976?alt=media&token=7af13b24-5e6f-4515-833c-7ab92e6a7059'}} style={styles.mapImage}/>
            </TouchableOpacity>
			{paymentPoints.map((item, index) => (
                <React.Fragment key={index.toString()}>
                    {renderPaymentPoint({ item })}
                </React.Fragment>
            ))}
		</ScrollView>
	);
}
