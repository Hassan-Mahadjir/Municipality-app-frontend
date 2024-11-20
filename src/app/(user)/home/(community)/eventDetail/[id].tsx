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

const eventDetails = () => {
	const { id } = useLocalSearchParams();
	const [content, setContent] = useState<string[]>([]);
	const { t } = useTranslation();

	// Ensure `news` is a valid number
	const eventId = id ? +id : null;

	// Fetch only if `newsId` is valid
	const { AnnouncementData, isLoading } = useGetAnnouncement(eventId || 0);
	const announcementInfo = AnnouncementData?.data.data;

	useEffect(() => {
		if (!announcementInfo) return;

		// Simulating an API call to fetch content
		const fetchedContent = announcementInfo.body;

		// Split the content into paragraphs where a period is encountered
		const paragraphs = splitTextIntoParagraphs(fetchedContent);
		setContent(paragraphs);
	}, [announcementInfo]);

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

	if (!announcementInfo) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{t('No announcement found')}</Text>
			</View>
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<Header
				title={announcementInfo.title}
				backgroundImage={{
					uri: `${announcementInfo.images[0].imageUrl}`,
				}}
				onBackPress={() => router.back()}
			/>
			<View style={{ margin: scale(10) }}>
				<Text style={styles.subject}>{announcementInfo.header}</Text>

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
							{announcementInfo.location}
						</Text>
					</View>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Fontisto name='date' size={20} color={COLORS.primary} />
						<Text style={{ marginLeft: scale(5) }}>20/11/2024</Text>
					</View>

					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<FontAwesome6 name='clock' size={20} color={COLORS.gray} />
						<Text style={{ marginLeft: scale(5) }}>18:30</Text>
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
				<EventScrollCard />
				{/* Loop through the content array and display each paragraph */}
				{content.map((paragraph, index) => (
					<Text key={index} style={styles.paragraph}>
						{paragraph}
					</Text>
				))}
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
});
