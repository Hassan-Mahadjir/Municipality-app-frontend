import {
	View,
	Text,
	Dimensions,
	FlatList,
	Image,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '@/components/services/Header';
import ghostown from '../../../../assets/data/ghostTown.json';
import { styles } from '@/styles/ghostTown';
import { scale, verticalScale } from 'react-native-size-matters';
import ImagesContainer from '@/components/tourism/imagesContainer';
import CommentSection from '@/components/tourism/CommentSection';
import commentsData from '../../../../assets/data/comments.json';
import { useTranslation } from 'react-i18next';
import { usePlace } from '@/services/api/tourism';

// Function to split text into paragraphs
const splitTextIntoParagraphs = (text:string) => {
	return text
		.split('.')
		.map((sentence) => sentence.trim())
		.filter((sentence) => sentence.length > 0)
		.map((sentence) => sentence + '.');
};

const place = () => {
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
	const { placeData, isLoading } = usePlace(+place);
	const placeinfo = placeData?.data.data;

	// Return early if no place information is available
	if (!placeinfo || placeinfo.name === '') return;

	// Split history into paragraphs
	const translated= placeinfo.language===lang
	? placeinfo.history
	:placeinfo.translations.find(translation => translation.language===lang)?.history|| placeinfo.history
	
	const historyParagraphs = splitTextIntoParagraphs(translated || '');

	// Determine displayed paragraphs based on expansion state
	const displayedHistory = expanded ? historyParagraphs : [historyParagraphs[0]];

	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* Header */}
			<View>
				<Header
					title={placeinfo?.name || t('defaultTitle')}
					backgroundImage={{
						uri: placeinfo?.images[0].imageUrl,
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
				</View>
			</View>

			{/* Body */}
			<ScrollView style={{ flexGrow: 1 }}>
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
					<Text style={styles.timeText}>
						{placeinfo.openingHrWeekday}-{placeinfo.closingHrWeekday}
					</Text>
					<Text style={styles.timeText}>
						{placeinfo.openingHrWeekend}-{placeinfo.closingHrWeekend}
					</Text>
				</View>

				{/* History Section */}
				<View style={{ paddingTop: verticalScale(30) }}>
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

				{/* Images and Comments */}
				<ImagesContainer 
    images={placeinfo.images.map((image) => ({ url: image.imageUrl }))}
/>
				<CommentSection comments={commentsData} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default place;
