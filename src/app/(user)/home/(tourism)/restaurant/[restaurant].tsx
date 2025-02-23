import {
	View,
	Text,
	FlatList,
	Image,
	Dimensions,
	ScrollView,
	StatusBar,
	Touchable,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/services/Header';
import { styles } from '@/styles/ghostTown';
import { router, useLocalSearchParams } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import CommentPart from '@/components/tourism//CommentPart';
import { useTranslation } from 'react-i18next';
import { useRestaurant } from '@/services/api/tourism';
import { useComments } from '@/services/api/comments';
import { openGoogleMaps } from '@/components/services/PharmacyCard';

const restaurant = () => {
	const screenWidth = Dimensions.get('window').width;
	const { t } = useTranslation();
	const reviews = t('reviews');
	const open = t('open');
	const weekdays = t('weekdays');
	const weekends = t('weekends');
	const phoneNo = t('phoneNo');
	const { restaurant } = useLocalSearchParams();
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { restData, isLoading,refetch } = useRestaurant(+restaurant);
	const restinfo = restData?.data.data;
	const { commentData,refetch:refetchcomment } = useComments('restaurant', +restaurant);
	const data = commentData?.data.data;
	if(!restinfo) return;

	return (
	
		<SafeAreaView style={{ flex: 1 }}>
			{/* Header of the page */}
			<StatusBar barStyle={'dark-content'} />
			<View>
				<Header
					title={restinfo?.name || t('defaultTitle')}
					backgroundImage={{
						uri: restinfo?.images?.[0]?.imageUrl || 'default-image-url',
						
					}}
					
					onBackPress={() => router.back()}
				/>
<View style={styles.shadowContainer}>
	<TouchableOpacity onPress={()=>{openGoogleMaps(restinfo.longitude,restinfo.latitude) }}>
	<View style={{
alignItems: 'center',
							borderWidth: 2, // Orange border
							borderColor: '#F1722A', // Orange color for the border
							backgroundColor: '#fff', // White background
							borderRadius: 10, // Rounded corners
							paddingHorizontal: scale(10), // Space inside the rectangle
						
							alignSelf: 'center', // Makes the rectangle shrink to fit its content
							minWidth: scale(320),
							marginTop: verticalScale(8),
							marginLeft: scale(6),
    }}>
  <View
    style={{
		flexDirection: 'row',
        alignItems: 'center', // Center align icon and text vertically
        justifyContent: 'flex-start', // Ensure elements are aligned to the start
		marginBottom: verticalScale(3)

    }}
  >
    <Ionicons
      name="location-sharp"
      size={24}
      color="#F1722A"
      style={{ marginRight: verticalScale(6) }} // Adds space between the icon and the text
    />
    <Text style={styles.locationText}>{restinfo?.language===lang ? restinfo.location : restinfo.translations.find((translation)=>translation.language===lang)?.location||restinfo.location}</Text>
  </View>
</View></TouchableOpacity></View>

			</View>
			{/* Body of the page */}
			<ScrollView style={{ flexGrow: 1 }}>
				<View style={{ flexDirection: 'row' }}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/01vrktrq36oe-39%3A726?alt=media&token=5e7fbab6-2e66-4e18-ac03-cfaf7865a40b',
						}}
						style={styles.clockIcon}
					/>
					<View style={{ flexDirection: 'row',marginLeft:scale(8) }}>
						<Text style={styles.openText}>{open}</Text>
					</View>
				</View>

				<View
					style={{
						display: 'flex',
						marginHorizontal: scale(25),
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						top: verticalScale(30),
					}}
				>
					<Text style={styles.weekText}>{weekdays}</Text>
					<Text style={styles.weekText}>{weekends}</Text>
				</View>

				<View
					style={{
						display: 'flex',
						marginHorizontal: scale(25),
						flexDirection: 'row',
						justifyContent: 'space-between',
						top: verticalScale(30),
					}}
				>
					<Text style={styles.timeText}>
						{restinfo?.openingHrWeekday}-{restinfo?.closingHrWeekday}
					</Text>
					<Text style={styles.timeText}>
						{restinfo?.openingHrWeekend}-{restinfo?.closingHrWeekend}
					</Text>
				</View>

				<View
					style={{
						flexDirection: 'row',
						margin: scale(15),
						marginTop: verticalScale(55),
					}}
				>
					<Text style={{ color: '#F1722A', fontSize: 18, fontWeight: '600' , }}>
						{phoneNo}:{' '}
					</Text>
					<Text style={{ color: '#4E7E95', fontSize: 18 }}>
						{restinfo?.phone}
					</Text>
				</View>
				
				<CommentPart comments={data?.restaurantComments|| []}
				serviceId={+restaurant || 0} 
				refetch={refetch}
				refetchcomment={refetchcomment} />
			</ScrollView>
		</SafeAreaView>
	);

};

export default restaurant;
