import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/services/Header';
import { router, useLocalSearchParams } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { COLORS } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const newsDetails = () => {
	const { news } = useLocalSearchParams();
	const [content, setContent] = useState<string[]>([]);
	const { t } = useTranslation();
	const New1= "News1"
	const Min= "Min"

	useEffect(() => {
		// Simulating an API call to fetch content
		const fetchedContent = t('News1');

		// Split the content into paragraphs where a period is encountered
		const paragraphs = splitTextIntoParagraphs(fetchedContent);
		setContent(paragraphs);
	}, []);

	// Function to split text into paragraphs by period ('.')
	const splitTextIntoParagraphs = (text: string): string[] => {
		// Trim white spaces, split at '.', and re-add the period to each chunk
		return text
			.split('.')
			.map((sentence) => sentence.trim()) // Trim any leading/trailing spaces
			.filter((sentence) => sentence.length > 0) // Filter out any empty sentences
			.map((sentence) => sentence + '.'); // Add the period back to each sentence
	};

	return (
		<View>
			<Header
				title={`${news}`}
				backgroundImage={{
					uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/i7mhi5ix258-533%3A1980?alt=media&token=e00f3a9d-eae3-4684-a9b7-3a1e97957848',
				}}
				onBackPress={() => router.back()}
			/>
			<View style={{ margin: scale(10) }}>
				<Text style={styles.subject}>
					The human impact on Everest could lead to 
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
						<Text style={{ color: COLORS.primary }}>FAMAGUSTA</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<EvilIcons name='clock' size={24} color={COLORS.gray} />
						<Text style={{ color: COLORS.gray }}>10 Minutes Ago</Text>
					</View>
				</View>
			</View>
			<View
				style={{ borderBottomWidth: 2, borderBottomColor: COLORS.gray }}
			></View>
			<ScrollView
				style={{ marginHorizontal: scale(10) }}
				showsVerticalScrollIndicator={false}
			>
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

export default newsDetails;

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
