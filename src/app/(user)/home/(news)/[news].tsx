import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/services/Header';
import { router, useLocalSearchParams } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { COLORS } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const newsDetails = () => {
	const { news } = useLocalSearchParams();
	const [content, setContent] = useState<string[]>([]);

	useEffect(() => {
		// Simulating an API call to fetch content
		const fetchedContent = `
			The House advanced legislation on Saturday that could lead to a TikTok ban in the United States. The bill forces TikTok's Chinese owner, ByteDance, to secure American ownership in about a year or face a domestic ban.
			Earlier versions of the legislation gave ByteDance just six months to find a new owner. To fast-track the bipartisan legislation, House Speaker Mike Johnson combined it with a bill to allow the US to confiscate Russian assets.
			That package of legislation will head to the Senate in a matter of days, where it's likely to pass In February, the Senate approved a similar $95.3 billion package that did not include the TikTok bill.
			American politicians have for years expressed security concerns over TikTok because ByteDance is obligated to share data with the Chinese government. TikTok has an estimated 170 million users in the United States alone.The House advanced legislation on Saturday that could lead to a TikTok ban in the United States. The bill forces TikTok's Chinese owner, ByteDance, to secure American ownership in about a year or face a domestic ban.
			Earlier versions of the legislation gave ByteDance just six months to find a new owner. To fast-track the bipartisan legislation, House Speaker Mike Johnson combined it with a bill to allow the US to confiscate Russian assets.
			That package of legislation will head to the Senate in a matter of days, where it's likely to pass In February, the Senate approved a similar $95.3 billion package that did not include the TikTok bill.
			American politicians have for years expressed security concerns over TikTok because ByteDance is obligated to share data with the Chinese government. TikTok has an estimated 170 million users in the United States alone.
		`;

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
						<Text style={{ color: COLORS.gray }}>10min ago</Text>
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
