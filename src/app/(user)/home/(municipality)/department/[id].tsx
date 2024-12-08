import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '@/components/services/Header';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '@/constants/Colors';
import { useGetDepartment } from '@/services/api/municipality';
import Loading from '@/components/Loading';
import { useTranslation } from 'react-i18next';

const departmentDetails = () => {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.toUpperCase();

	const { id } = useLocalSearchParams();
	const { departmentData, isLoading } = useGetDepartment(id ? +id : 0);
	const departmentDetails = departmentData?.data.data;

	const [content, setContent] = useState<string[]>([]);

	// Function to split text into paragraphs by period ('.')
	const splitTextIntoParagraphs = (text: string): string[] => {
		return text
			.split('.')
			.map((sentence) => sentence.trim())
			.filter((sentence) => sentence.length > 0)
			.map((sentence) => sentence + '.');
	};

	useEffect(() => {
		if (departmentDetails?.description) {
			const description =
				departmentDetails.language === lang
					? departmentDetails.description
					: departmentDetails.translations.find(
							(translation) => translation.language === lang
					  )?.description || departmentDetails.description;
			const paragraphs = splitTextIntoParagraphs(description);
			setContent(paragraphs);
		}
	}, [departmentDetails]);

	if (isLoading) {
		return (
			<View>
				<Loading />
			</View>
		);
	}

	if (!departmentDetails) {
		return (
			<View>
				<Text>{t('noResultFound')}</Text>
			</View>
		);
	}

	return (
		<View>
			<Header
				title={
					departmentDetails.language === lang
						? departmentDetails.name
						: departmentDetails.translations.find(
								(translation) => translation.language === lang
						  )?.name || departmentDetails.name
				}
				backgroundImage={{
					uri: departmentDetails.imageUrl,
				}}
				onBackPress={() => router.back()}
			/>

			<View style={{ margin: scale(10) }}>
				<Text style={styles.reason}>
					Head of department:{' '}
					<Text style={{ textAlign: 'justify', color: '#000' }}>
						{departmentDetails.responsible?.profile.firstName}{' '}
						{departmentDetails.responsible?.profile.lastName}
					</Text>
				</Text>

				<Text style={styles.reason}>{t('description')}: </Text>
				{content.map((paragraph, index) => (
					<Text key={index} style={styles.paragraph}>
						{paragraph}
					</Text>
				))}

				<Text style={styles.reason}>{t('contactInformation')}: </Text>
				<Text style={{ textAlign: 'justify', marginBottom: verticalScale(5) }}>
					{t('phoneNo')}: {departmentDetails.phone}
				</Text>
				<Text style={{ textAlign: 'justify' }}>
					{t('email')}: {departmentDetails.email}
				</Text>
			</View>
		</View>
	);
};

export default departmentDetails;

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
	keyDiscription: {
		fontSize: moderateScale(24),
		fontWeight: '700',
		marginBottom: verticalScale(8),
	},
	reason: {
		color: COLORS.primary,
		marginBottom: verticalScale(3),
		fontSize: moderateScale(14),
		fontWeight: '600',
	},
	getCar: {
		textAlign: 'center',
		color: COLORS.primary,
		marginTop: verticalScale(5),
	},
});
