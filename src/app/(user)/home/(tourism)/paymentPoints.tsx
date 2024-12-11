import { View, Text, Image, Linking, ScrollView, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import paymentPoints from '../../../../assets/data/paymentPoints.json';
import { Stack } from 'expo-router';
import SearchField from '@/components/services/Search';
import { useTranslation } from 'react-i18next';
import { styles } from '@/styles/paymentPoints';
import { TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import { usePayment, usePlaces } from '@/services/api/tourism';
import { PaymentValues } from '@/types/tourism.type';

export default function PaymentPoints() {
	const { t } = useTranslation();
	const searchbyplacename = t('searchbypointname');
    const { paymentData, isLoading, refetch, isFetching } = usePayment();
    const pionts = paymentData?.data.data || [];
    const [filteredPoints, setFilteredPoints] =
	useState<PaymentValues[]>(pionts);
	const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
		if (searchQuery.trim() === '') {
			setFilteredPoints(pionts);
		} else {
			setFilteredPoints(
				pionts.filter((pionts) =>
					pionts.branch.toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
		}
	}, [pionts, searchQuery]);
	const onRefresh = async () => {
		await refetch();
	};

    const handlePress = () => {
        const url = 'https://www.google.com/maps/d/u/0/viewer?mid=1MOJS9QrCHWNZCqD-79OaEkiacqrNuAmC&femb=1&ll=35.24891578265986%2C33.669542874735434&z=10'; 
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    };

    

    const handleSeeLocation = (url: string) => {
        if (url) {
            Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
        } else {
            console.log("No URL provided");
        }
    };

    const renderPaymentPoint = ({ item }: {item: PaymentValues}) => (
        <View style={styles.box}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image
                source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8z51sldrhbe-256%3A2042?alt=media&token=e62a0361-18bd-4746-b23f-3ae79c5bb4ef'
                }}
                style={styles.pinImage}
                />
                <TouchableOpacity onPress={() => handleSeeLocation("")}>
                    <Text style={styles.locationText}>{t('seeLocation')}</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'column',marginLeft:scale(14)}}>
                <Text style={styles.orangeText}>{t('branch')}:</Text>
                <Text style={styles.orangeText}>{t('office')}:</Text>
                <Text style={styles.orangeText}>{t('phone')}:</Text>
              
            </View>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.blueText}>{item.branch}</Text>
                <Text style={styles.blueText}>{item.office}</Text>
                <Text style={styles.blueText}>{item.phone}</Text>
               
            </View>
        </View>
      );
    
	return (
		<ScrollView style={{ flex: 1 }} refreshControl={<RefreshControl refreshing={isFetching} onRefresh={onRefresh} />}>
			<Stack.Screen options={{ title: t('paymentPoints') }} />
			<SearchField
				placeholder={searchbyplacename}
				onChangeText={setSearchQuery}
			/>
            <Text style={styles.map}>{t('map')}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Image 
                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ukggue1xyx-608%3A1976?alt=media&token=7af13b24-5e6f-4515-833c-7ab92e6a7059'}} 
                    style={styles.mapImage}
                />
            </TouchableOpacity>
			{filteredPoints.map((item, index) => (
                <React.Fragment key={index.toString()}>
                    {renderPaymentPoint({ item })}
                </React.Fragment>
            ))}
		</ScrollView>
	);
}
