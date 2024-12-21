//[place].tsx
import {
	View,
	Text,
	Dimensions,
	FlatList,
	Image,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '@/components/services/Header';
import ghostown from '../../../../assets/data/ghostTown.json';
import { styles } from '@/styles/ghostTown';
import { scale, verticalScale } from 'react-native-size-matters';
import ImagesContainer from '@/components/tourism/imagesContainer';
import CommentSection, {
	CommentProps,
} from '@/components/tourism/CommentSection';
import { FormProvider, useForm } from 'react-hook-form';
import commentsData from '../../../../assets/data/comments.json';
import { useTranslation } from 'react-i18next';
import { usePlace } from '@/services/api/tourism';
import { useComments } from '@/services/api/comments';
import { Ionicons } from '@expo/vector-icons';
import { PostcommValues } from '@/types/comments.type';

// Function to split text into paragraphs
const splitTextIntoParagraphs = (text: string) => {
	return text
		.split('.')
		.map((sentence) => sentence.trim())
		.filter((sentence) => sentence.length > 0)
		.map((sentence) => sentence + '.');
};

const Place = () => {
	// State for ReadMore/ReadLess
	const [expanded, setExpanded] = useState(false);
	const toggleExpansion = () => {
		setExpanded(!expanded);
	};

	const screenWidth = Dimensions.get('window').width;
	const { t } = useTranslation();
	const GhostTown = t('GhostTown');
	const reviews = t('reviews');
	const open = t('open');
	const weekdays = t('weekdays');
	const weekends = t('weekends');
	const history = t('history');
	const { place } = useLocalSearchParams();
	const { i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();
	const { placeData, isLoading ,refetch} = usePlace(+place);
	const placeinfo = placeData?.data.data;
	const { commentData,refetch:refetchcomment } = useComments('historicalPlace', +place);
	const data = commentData?.data.data;

	// Return early if no place information is available
	if (!placeinfo || placeinfo.name === '') return null;

	// Split history into paragraphs
	const translated =
		placeinfo.language === lang
			? placeinfo.history
			: placeinfo.translations.find(
					(translation) => translation.language === lang
			  )?.history || placeinfo.history;

	const historyParagraphs = splitTextIntoParagraphs(translated || '');

	// Determine displayed paragraphs based on expansion state
	const displayedHistory = expanded
		? historyParagraphs
		: [historyParagraphs[0]];
	// console.log(commentData);

	
	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* Header */}
			<StatusBar barStyle={'dark-content'} />
			<View>
				<Header
					title={placeinfo?.name || t('defaultTitle')}
					backgroundImage={{
						uri: placeinfo?.images[0].imageUrl,
					}}
					onBackPress={() => router.back()}
				/>
				<View style={styles.shadowContainer}>
					<View
						style={{
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
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center', // Center align icon and text vertically
								justifyContent: 'flex-start', // Ensure elements are aligned to the start
								
								marginBottom: verticalScale(3),
							}}
						>
							<Ionicons
								name='location-sharp'
								size={24}
								color='#F1722A'
								style={{
									marginRight: verticalScale(6),
									
								}} // Adds space between the icon and the text
							/>
							<Text style={styles.locationText}>{placeinfo?.language===lang ? placeinfo.location : placeinfo.translations.find((translation)=>translation.language===lang)?.location||placeinfo.location}</Text>
						</View>
					</View>
				</View>
			</View>

			{/* Body */}
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{ paddingBottom: verticalScale(20) }}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image
						source={{
							uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/01vrktrq36oe-39%3A726?alt=media&token=5e7fbab6-2e66-4e18-ac03-cfaf7865a40b',
						}}
						style={styles.clockIcon}
					/>
					<Text style={styles.openText}>{open}</Text>
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginHorizontal: scale(25),
						marginTop: verticalScale(20),
					}}
				>
					<Text style={styles.weekText}>{weekdays}</Text>
					<Text style={styles.weekText}>{weekends}</Text>
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginHorizontal: scale(25),
						marginTop: verticalScale(10),
					}}
				>
					<Text style={styles.timeText}>
						{placeinfo.openingHrWeekday}-{placeinfo.closingHrWeekday}
					</Text>
					<Text style={styles.timeText}>
						{placeinfo.openingHrWeekend}-{placeinfo.closingHrWeekend}
					</Text>
				</View>

				{/* History Section */}
				<View
					style={{ marginTop: verticalScale(30), paddingHorizontal: scale(15) }}
				>
					<Text style={styles.historyText}>{history}</Text>
					{displayedHistory.map((paragraph, index) => (
						<Text key={index} style={styles.classicText}>
							{paragraph}
						</Text>
					))}
					<TouchableOpacity onPress={toggleExpansion}>
						<Text style={styles.orangeText}>
							{expanded ? t('readLess') : t('readMore')}
						</Text>
					</TouchableOpacity>
				</View>

				{/* Images */}
				<ImagesContainer
					images={placeinfo.images.map((image) => ({ url: image.imageUrl }))}
				/>

				{/* Scrollable Comment Section */}
				<View
					style={{
						height: 300,
						marginTop: verticalScale(20),
						marginHorizontal: scale(0),
					}}
				>
					<ScrollView nestedScrollEnabled>
					<CommentSection 
  comments={data?.historicalPlaceComments || []} 
  serviceId={+place || 0} 
  refetch={refetch}
  refetchcomment={refetchcomment}
/>
					</ScrollView>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Place;
