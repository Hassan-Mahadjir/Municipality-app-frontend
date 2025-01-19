import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/services/Header';
import { router, useLocalSearchParams } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { COLORS } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';
import { useGetAnnouncement } from '@/services/api/announcement';
import Loading from '@/components/Loading';
import EventScrollCard from '@/components/services/EventScrollCard';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useGetEvent } from '@/services/api/community';
import SubmitButtonComponent from '@/components/SubmitButton';
import { openGoogleMaps } from '@/components/services/PharmacyCard';

const eventDetails = () => {
	const { id } = useLocalSearchParams();
	const [content, setContent] = useState<string[]>([]);
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase(); // Device language

	// Ensure `news` is a valid number
	const eventId = id ? +id : 0;

	// Fetch only if `newsId` is valid
	const { eventData, isLoading } = useGetEvent(eventId);
	const eventInfo = eventData?.data.data;

	useEffect(() => {
		if (!eventInfo) return;

		// Simulating an API call to fetch content
		const fetchedContent =
			eventInfo.language === lang
				? eventInfo.description
				: eventInfo.translations.find(
						(translation) => translation.language === lang
				  )?.description || eventInfo.description;

		// Split the content into paragraphs where a period is encountered
		const paragraphs = splitTextIntoParagraphs(fetchedContent);
		setContent(paragraphs);
	}, [eventInfo]);

	// Function to split text into paragraphs by period ('.')
	const splitTextIntoParagraphs = (text: string): string[] => {
		// Trim white spaces, split at '.', and re-add the period to each chunk
		return text
			.split('.')
			.map((sentence) => sentence.trim()) // Trim any leading/trailing spaces
			.filter((sentence) => sentence.length > 0) // Filter out any empty sentences
			.map((sentence) => sentence + '.'); // Add the period back to each sentence
	};

	// Return a loading or fallback UI if `newsId` is invalid
	if (!eventId) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{t('Invalid News ID')}</Text>
			</View>
		);
	}

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Loading />
			</View>
		);
	}

	if (!eventInfo) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{t('No announcement found')}</Text>
			</View>
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<Header
				title={eventInfo.title}
				backgroundImage={{
					uri: `${eventInfo.images[0].imageUrl}`,
				}}
				onBackPress={() => router.back()}
			/>
			<View style={{ margin: scale(10) }}>
				<Text style={styles.subject}>
					{eventInfo.language === lang
						? eventInfo.header
						: eventInfo.translations.find(
								(translation) => translation.language === lang
						  )?.header || eventInfo.header}
				</Text>

				<View
					style={{
						flexDirection: 'row',
						marginTop: verticalScale(10),
						justifyContent: 'space-between',
					}}
				>
					<View style={{ flexDirection: 'row' }}>
						<EvilIcons name='location' size={24} color={COLORS.primary} />
						<Text style={{ color: COLORS.primary }}>
							{eventInfo.language === lang
								? eventInfo.location
								: eventInfo.translations.find(
										(translation) => translation.language === lang
								  )?.location || eventInfo.location}
						</Text>
					</View>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Fontisto name='date' size={20} color={COLORS.primary} />
						<Text style={{ marginLeft: scale(5) }}>{eventInfo.date}</Text>
					</View>

					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<FontAwesome6 name='clock' size={20} color={COLORS.primary} />
						<Text style={{ marginLeft: scale(5) }}>{eventInfo.startTime}</Text>
					</View>
				</View>
			</View>
			<View
				style={{ borderBottomWidth: 2, borderBottomColor: COLORS.gray }}
			></View>

			<ScrollView
				style={{ marginHorizontal: scale(10), flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
			>
	<EventScrollCard images={eventInfo.images} />
{/* Loop through the content array and display each paragraph */}
<Text style={styles.description}>{t('description')}</Text>
{content.map((paragraph, index) => (
  <Text key={index} style={styles.paragraph}>
    {paragraph}
  </Text>
))}
<SubmitButtonComponent
  title={t('location')}
  fullWidth
  onPress={()=>{openGoogleMaps(eventInfo.longitude,eventInfo.latitude) }}

/>

			</ScrollView>
		</View>
	);
};

export default eventDetails;

const styles = StyleSheet.create({
	subject: {
		fontWeight: 'bold',
		fontSize: moderateScale(16),
		textAlign: 'justify',
	},
	paragraph: {
		marginBottom: verticalScale(10),
		fontSize: moderateScale(14),
		lineHeight: verticalScale(22),
		textAlign: 'justify',
	},
	description: {
		fontSize: moderateScale(14),
		color: COLORS.primary,
		fontWeight: '600',
	},
});
