import {
	View,
	Text,
	FlatList,
	Image,
	Dimensions,
	ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/services/Header';
import ghostown from '../../../../../assets/data/ghostTown.json';
import { styles } from '@/styles/ghostTown';
import { router, useLocalSearchParams } from 'expo-router';
import { scale, verticalScale } from 'react-native-size-matters';
import CommentSection from '@/components/tourism/CommentSection';
import commentsData from '../../../../../assets/data/restaurantComments.json';
import { useTranslation } from 'react-i18next';
import { useRestaurant } from '@/services/api/tourism';

const restaurant = () => {
	const screenWidth = Dimensions.get('window').width;
	const {t} = useTranslation();
	const reviews = t('reviews');
	const open = t('open');
	const weekdays = t('weekdays');
	const weekends = t('weekends');
	const phoneNo = t('phoneNo');
	const { restaurant } = useLocalSearchParams();
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { restData, isLoading } = useRestaurant(+restaurant);
	const restinfo = restData?.data.data;

	return (
		<SafeAreaView style={{flex: 1}}>
			{/* Header of the page */}
			<View>
				<Header
					title={restinfo?.name|| t('defaultTitle')}
					backgroundImage={{
						uri: restinfo?.images?.[0]?.imageUrl || 'default-image-url',
					}}
					onBackPress={() => router.back()}
				/>
				<View style={styles.shadowContainer}>
					<FlatList
						data={ghostown}
						keyExtractor={(item, index) => index.toString()}
						contentContainerStyle={{ justifyContent: 'center' }}
						renderItem={({ item }) => (
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									width: screenWidth,
									height: 30,
								}}
							>
								{Array.from({ length: 5 }).map((_, index) => (
									<Image
										key={index}
										source={{ uri: item.stars }}
										style={styles.starImage}
									/>
								))}
							</View>
						)}
					/>
					<Text style={styles.starText}>2,597 {reviews}</Text>
				</View>
			</View>
			{/* Body of the page */}
			<ScrollView style={{flexGrow: 1}}>
				<View style={{ flexDirection: 'row' }}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/01vrktrq36oe-39%3A726?alt=media&token=5e7fbab6-2e66-4e18-ac03-cfaf7865a40b',
						}}
						style={styles.clockIcon}
					/>
					<View style={{ flexDirection: 'row' }}>
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
					<Text style={styles.timeText}>{restinfo?.openingHrWeekday}-{restinfo?.closingHrWeekday}</Text>
					<Text style={styles.timeText}>{restinfo?.openingHrWeekend}-{restinfo?.closingHrWeekend}</Text>
				</View>

				<View style={{flexDirection: 'row', margin: scale(15), marginTop: verticalScale(45)}}>
					<Text style={{color: '#F1722A', fontSize: 18, fontWeight: '600'}}>{phoneNo}: </Text>
					<Text style={{color: '#4E7E95', fontSize: 18}}>{restinfo?.phone}</Text>
				</View>

				<CommentSection comments={commentsData}/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default restaurant;
